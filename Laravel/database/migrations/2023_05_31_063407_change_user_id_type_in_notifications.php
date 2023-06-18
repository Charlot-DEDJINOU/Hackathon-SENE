<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('notifications', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->change();
        });
    }

    public function down()
    {
        Schema::table('notifications', function (Blueprint $table) {
            $table->integer('user_id')->change();
        });
    }
};
