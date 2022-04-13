<?php

namespace App\Http\Controllers\Admin;

use App\ConservationDocument;
use App\ConservationLegislation;
use App\Http\Requests\SyncTaxon;
use App\RedList;
use App\Support\Taxonomy;
use App\Taxon;
use Illuminate\Support\Facades\Http;

class TaxonomyController
{
    /**
     * Display taxonomy options.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('admin.taxonomy.index', [
            'taxonomy_use' => config('biologer.taxonomy_use'),
        ]);
    }

    /**
     *  Check if connection is possible to make.
     */
    public function check()
    {
        $link = Taxonomy::checkOrFailUsingTaxonomy();
        if ($link == false) {
            return response('Failed to connect! Check .env file on server!', 400);
        }

        $response = Http::post($link.'/api/taxonomy/check', [
            'key' => config('biologer.taxonomy_secret_key'),
        ]);
        if ($response->status() == 200) {
            return "Check for $link was identified as {$response->body()}";
        }

        return response('Failed to connect! Unidentified error.', 200);
    }

    /**
     * Connects to Taxonomy.
     */
    public function connect()
    {
        $link = Taxonomy::checkOrFailUsingTaxonomy();
        if ($link == false) {
            return response('Failed to connect! Check .env file on server!', 400);
        }

        $data['key'] = config('biologer.taxonomy_secret_key');
        $data['red_lists'] = RedList::all()->toArray();
        $data['docs'] = ConservationDocument::all()->toArray();
        $data['legs'] = ConservationLegislation::all()->toArray();

        $response = Http::post($link.'/api/taxonomy/connect', $data);

        return response($response->body(), 200);
    }

    /**
     * Disconnects from Taxonomy.
     */
    public function disconnect()
    {
        $link = Taxonomy::checkOrFailUsingTaxonomy();
        if ($link == false) {
            return response('Failed to connect! Check .env file on server!', 400);
        }

        $data['key'] = config('biologer.taxonomy_secret_key');

        $response = Http::post($link.'/api/taxonomy/disconnect', $data);
        if ($response->status() == 200) {
            $taxa = Taxon::whereNotNull('taxonomy_id')->get();
            foreach ($taxa as $taxon) {
                $taxon->update(['taxonomy_id' => null]);
                $taxon->save();
            }

            return response('Disconnected from Taxonomy', 200);
        }

        return response('Failed to disconnect from Taxonomy!', 400);
    }


    /**
     * Find taxonomy ID for all taxa that are not connected and update taxa from Taxonomy database.
     * Once Taxonomy database get request from specific taxon, it will send updates when occurred.
     */
    public function search()
    {
        $link = Taxonomy::checkOrFailUsingTaxonomy();
        if ($link == false) {
            return response('Error! Local site is not using connection to Taxonomy database.', 400);
        }

        $data['taxa'] = [];
        $data['key'] = config('biologer.taxonomy_secret_key');

        // TODO: There should be some limit of how much data we request from taxonomy base at once,
        //  and then send it in batches.
        $taxa = Taxon::where('taxonomy_id', null)->get();
        foreach ($taxa as $taxon) {
            $data['taxa'][$taxon->id]['name'] = $taxon->name;
            $data['taxa'][$taxon->id]['rank'] = $taxon->rank;
        }

        $response = Http::post($link.'/api/taxonomy/search', $data);

        if ($response->status() != 200) {
            return response('Error! Data not retrieved.', 400);
        }

        $taxa = $response['taxa'];
        $country_ref = $response['country_ref'];

        foreach ($taxa as $id => $data) {
            if ($data['response'] == '') {
                continue;
            }

            $taxon = Taxon::find($id);

            # Update current taxon with Taxonomy data
            (new SyncTaxon)->update($data['response'], $taxon, $country_ref);
        }

        return response('Fetching done...', 200);
    }
}
