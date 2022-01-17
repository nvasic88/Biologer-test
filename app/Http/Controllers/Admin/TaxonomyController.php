<?php

namespace App\Http\Controllers\Admin;

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
        return view('admin.taxonomy.index');
    }


    /**
     * Fetch all missing taxonomy_id from Taxonomy Database.
     */
    public function fetch()
    {
        $link = config('biologer.taxonomy_link');
        if ($link == '') {
            return;
        }

        $taxa = Taxon::where('taxonomy_id', null)->get();

        foreach ($taxa as $taxon) {
            $response = Http::post($link.'/api/taxa/search', [
                'name' => $taxon->name,
                'rank' => $taxon->rank,
                'country' => 'rs',
            ]);
            if ($response->status() != 200) {
                continue;
            }
            $taxon->taxonomy_id = $response->json()['data']['id'];
            $taxon->can_update = true;
            $taxon->update();
        }
    }

    /**
     * Update all Taxa that have can_update status.
     */
    public function update()
    {
    }
}
