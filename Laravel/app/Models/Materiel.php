<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materiel extends Model
{
    use HasFactory;

    protected $fillable = [
        'designation',
        'prix_unitaire',
        'etat',
        'type',
        'url_image',
        'caracteristique',
        'quantite_stock',
        'publier',
    ];
}
