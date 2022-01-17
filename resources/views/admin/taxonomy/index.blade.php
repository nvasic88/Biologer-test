@extends('layouts.dashboard', ['title' => __('navigation.taxa')])

@section('content')

@endsection

@section('breadcrumbs')
    <div class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="{{ route('contributor.index') }}">{{ __('navigation.dashboard') }}</a></li>
            <li class="is-active"><a>{{ __('navigation.taxonomy') }}</a></li>
        </ul>
    </div>
@endsection

@section('navigationActions')

@endsection
