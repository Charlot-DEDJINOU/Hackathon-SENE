<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LieuDepotRequest extends FormRequest
{
    public function rules() : array
    {
        return [
            'nom' => 'required',
            'quartier' => 'required',
            'ville' => 'required',
            'longitude' => 'required',
            'repere' => 'required',
            'url_image' => 'required',
            'description' => 'required',
            'latitude' => 'required',
            'publier' => 'required|in:0,1',
        ];
    }
}
