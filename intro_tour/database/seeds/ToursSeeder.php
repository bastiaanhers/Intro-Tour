<?php

use Illuminate\Database\Seeder;

class ToursSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Tours')->insert 
        ([
        'name' => "Super Cool Tour Rawr XD",
        'team_limit' => 2,
        'description' => "Rawr my fellow Emo kids welcome to the super cool tour. Remember this tour is for the coolest emo kids only. DONT @ ME!!",
        'tour_code' => 778899,
        ]);
    }
}
