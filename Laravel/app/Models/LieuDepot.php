<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LieuDepot extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_quartier',
        'id_ville',
        'nom',
        'longitude',
        'latitude',
        'repere' ,
        'url_image' ,
        'description',
        'publier'
    ];
}
