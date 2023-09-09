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
        Schema::create('lieu_depots', function (Blueprint $table) {
            $table->id();
            $table->string('quartier');
            $table->string('ville');
            $table->string('nom');
            $table->decimal('longitude', 10, 7);
            $table->decimal('latitude', 10, 7);
            $table->string('repere')->nullable();
            $table->string('url_image')->nullable();
            $table->text('description')->nullable();
            $table->boolean('publier')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lieu_depots');
    }
};
