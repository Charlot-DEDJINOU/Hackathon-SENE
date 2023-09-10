<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReparateurRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'id_utilisateur' => 'required',
            'quartier' => 'required',
            'ville' => 'required',
            'metier' => 'required',
            'annee_experience' => 'required',
            'etoile' => 'required',
            'nombre_projet' => 'required',
            'description' => 'required',
            'publier' => 'required|in:0,1',
            'contact' => 'required',
            'image' => 'nullable',
            'fin_abonnement' => 'nullable',
        ];
    }
}
