<?php

namespace App\Rules;

use App\FieldObservation;
use Illuminate\Contracts\Validation\Rule;

class ApprovableFieldObservation implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return FieldObservation::approvable()
            ->whereIn('id', array_wrap($value))
            ->count() > 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Field observation/s cannot be approved.';
    }
}
