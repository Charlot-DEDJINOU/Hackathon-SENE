<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'motdepasse',
        'admin',
        'contact',
        'adresse',
        'statut',
    ];

    public function getUtilisateurInfos()
    {
        return [$this->nom, $this->prenom];
    }
}
