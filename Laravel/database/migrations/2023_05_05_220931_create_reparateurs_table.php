<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('réparateur', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_utilisateur');
            $table->unsignedBigInteger('id_quartier')->nullable();
            $table->unsignedBigInteger('id_ville');
            $table->unsignedBigInteger('id_metier');
            $table->integer('annee_experience');
            $table->integer('etoile')->default(0);
            $table->integer('nombre_projet');
            $table->text('description');
            $table->integer('publier')->default(0);
            $table->string('contact');
            $table->string('image')->default('icone');
            $table->dateTime('fin_abonnement')->nullable();
            $table->timestamps();
        
            $table->foreign('id_utilisateur')->references('id')->on('users');
            $table->foreign('id_quartier')->references('id')->on('quartiers');
            $table->foreign('id_ville')->references('id')->on('villes');
            $table->foreign('id_metier')->references('id')->on('metiers');
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reparateurs');
    }
};
