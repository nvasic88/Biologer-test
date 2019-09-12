<?php

namespace App\Http\Controllers\Api\Curator;

use App\FieldObservation;
use App\Http\Controllers\Controller;
use App\Http\Resources\FieldObservationResource;
use Illuminate\Http\Request;

class PendingObservationsController extends Controller
{
    /**
     * Get pending obervation the authenticated user needs to look at.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \App\Http\Resources\FieldObservationResource
     */
    public function index(Request $request)
    {
        $result = FieldObservation::with([
            'observation.taxon', 'observation.photos', 'activity.causer',
            'observation.types.translations', 'observedBy', 'identifiedBy',
        ])->pending()->curatedBy($request->user())->filter($request)->paginate($request->get('per_page', 15));

        return FieldObservationResource::collection($result);
    }
}
