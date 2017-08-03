<?php

namespace App;

use Illuminate\Support\Facades\Storage;

class FieldObservation extends Model
{
    /**
     * Main observation data.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function observation()
    {
        return $this->morphOne(Observation::class, 'details');
    }

    /**
     * Comments related to observation.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function comments()
    {
        return $this->observation->comments();
    }

    /**
     * Photos of the observation.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function photos()
    {
        return $this->belongsToMany(Photo::class);
    }

    /**
     * Add photos to the observation, using photos' paths.
     *
     * @param array $photos Paths
     */
    public function addPhotos($photos)
    {
        return $this->photos()->saveMany(
            collect($photos)->filter(function ($path) {
                return Storage::disk('public')->exists($path);
            })->map(function ($path) {
                return Photo::store($path, [
                    'author' => $this->source,
                ]);
            })
        );
    }
}