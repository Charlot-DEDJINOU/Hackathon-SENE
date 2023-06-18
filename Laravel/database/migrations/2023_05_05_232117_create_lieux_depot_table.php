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
        Schema::create('lieux_depot', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_quartier')->nullable();
            $table->unsignedBigInteger('id_ville');
            $table->string('nom');
            $table->decimal('longitude', 10, 7);
            $table->decimal('latitude', 10, 7);
            $table->string('repere')->nullable();
            $table->string('url_image')->nullable();
            $table->text('description')->nullable();
            $table->boolean('publier')->default(0);
            $table->timestamps();

            $table->foreign('id_quartier')->references('id')->on('quartiers')->onDelete('set null');
            $table->foreign('id_ville')->references('id')->on('villes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lieux_depot');
    }
};
