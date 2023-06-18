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
        Schema::create('enregistrer_deees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_utilisateur');
            $table->unsignedBigInteger('id_quartier')->nullable();
            $table->unsignedBigInteger('id_ville');
            $table->integer('qte_livrer');
            $table->string('repere');
            $table->string('contact');
            $table->text('description')->nullable();
            $table->boolean('collecter')->default(0);
            $table->boolean('traiter')->default(0);
            $table->string('type_gestion')->default('0');
            $table->text('detail_traitement')->nullable();
            $table->timestamp('date_enregistrement')->nullable();
            $table->timestamp('date_collecte')->nullable();
            $table->timestamp('date_traitement')->nullable();
            $table->timestamps();

            $table->foreign('id_utilisateur')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('id_quartier')->references('id')->on('quartiers')->onDelete('set null');
            $table->foreign('id_ville')->references('id')->on('villes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enregistrer_deees');
    }
};
