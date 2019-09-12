<?php

namespace App\Http\Controllers\Api\Autocomplete;

use App\Http\Controllers\Controller;
use App\Http\Resources\PublicationResource;
use App\Publication;
use Illuminate\Http\Request;

class PublicationsController extends Controller
{
    public function index(Request $request)
    {
        $publications = Publication::filter($request, [
            'citation' => \App\Filters\AttributeLike::class,
        ])->orderBy('citation')->paginate(10);

        return PublicationResource::collection($publications);
    }
}
