<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTeamPinAndTeamLeaderToTeamTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('teams', function($table) {
            $table->string('team_pin')->nullable()->unique();
            $table->integer('team_leader')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('teams', function($table) {
            $table->dropColumn('team_pin');
            $table->dropColumn('team_leader');
        });
    }
}
