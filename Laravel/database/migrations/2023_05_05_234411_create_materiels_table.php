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
        Schema::create('materiels', function (Blueprint $table) {
            $table->id();
            $table->string('designation');
            $table->decimal('prix_unitaire', 8, 2);
            $table->string('etat');
            $table->string('type');
            $table->string('url_image')->nullable();
            $table->text('caracteristique');
            $table->integer('quantite_stock');
            $table->boolean('publier')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materiels');
    }
};
