<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFieldObservationPhotoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('field_observation_photo', function (Blueprint $table) {
            $table->unsignedBigInteger('field_observation_id');
            $table->unsignedBigInteger('photo_id');

            $table->primary(['field_observation_id', 'photo_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('field_observation_photo');
    }
}