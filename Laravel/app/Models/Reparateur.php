<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reparateur extends Model
{
    use HasFactory;

    protected $fillable = [
        "id_utilisateur",
        "quartier",
        "ville",
        "metier",
        "annee_experience",
        "etoile",
        "nombre_projet",
        "description",
        "publier",
        "contact",
        "image",
        "fin_abonnement"
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_utilisateur');
    }

}
