<?php

namespace App\Http\Controllers\Api\Curator;

use App\FieldObservation;
use App\Jobs\PerformExport;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Exports\CuratorApprovedFieldObservationsExport;

class ApprovedObservationExportsController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'columns' => [
                'required',
                'array',
                'min:1',
                'distinct',
                Rule::in(CuratorApprovedFieldObservationsExport::availableColumns()),
            ],
            'with_header' => ['boolean'],
        ], [], [
            'columns' => trans('labels.exports.columns'),
            'with_header' => trans('labels.exports.with_header'),
        ]);

        $export = CuratorApprovedFieldObservationsExport::create(
            $request->input('columns'),
            $request->only(array_keys(FieldObservation::filters())),
            $request->input('with_header', false)
        );

        PerformExport::dispatch($export);

        return $export;
    }
}
