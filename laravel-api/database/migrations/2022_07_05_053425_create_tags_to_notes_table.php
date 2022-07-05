<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTagsToNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags_to_notes', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('tags_id');
            $table->unsignedBigInteger('notes_id');
            $table->foreign('tags_id')->references('id')->on('tags')->cascadeOnDelete();
            $table->foreign('notes_id')->references('id')->on('notes')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tags_to_notes');
    }
}
