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
        Schema::create('reparateurs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_utilisateur');
            $table->string('quartier')->nullable();
            $table->string('ville');
            $table->string('metier');
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
