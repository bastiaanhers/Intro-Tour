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
			[
				'name' => "Super Cool Tour Rawr XD",
				'team_limit' => 2,
				'description' => "Rawr my fellow Emo kids welcome to the super cool tour. Remember this tour is for the coolest emo kids only. DONT @ ME!!",
				'tour_code' => 778899,
				'time_limit' => 10800
			],
			[
				'name' => "Super snelle tour",
				'team_limit' => 5,
				'description' => "Kan jij alles beantwoorden binnen 1 minuut",
				'tour_code' => 112233,
				'time_limit' => 60
			]
		]);
    }
}
