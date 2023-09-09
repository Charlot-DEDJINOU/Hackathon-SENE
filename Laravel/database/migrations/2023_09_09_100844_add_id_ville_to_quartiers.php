<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIdVilleToQuartiers extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('quartiers', function (Blueprint $table) {
            $table->unsignedBigInteger('id_ville');
            $table->foreign('id_ville')->references('id')->on('villes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('quartiers', function (Blueprint $table) {
            $table->dropForeign(['id_ville']);
            $table->dropColumn('id_ville');
        });
    }
}