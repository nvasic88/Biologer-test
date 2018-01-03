<?php

namespace App\Http\Controllers\Contributor;

use App\License;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;

class PreferencesController extends Controller
{
    /**
     * Display user's preferences.
     *
     * @return \Iluuminate\View\View
     */
    public function index()
    {
        return view('contributor.preferences.index', [
            'preferences' => auth()->user()->settings(),
        ]);
    }

    public function update()
    {
        auth()->user()->settings()->merge(request()->validate([
            'data_license' => [Rule::in(License::getIds())],
            'image_license' => [Rule::in(License::getIds())],
        ]));

        return back();
    }
}