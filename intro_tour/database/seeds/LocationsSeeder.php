<?php

use Illuminate\Database\Seeder;

class LocationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Locations')->insert
        ([
        [
        'name' => "test position",
        'description' => "this is a test postition",
        'radius' => "{'type': 'circle','data': '12'}",
        'longitude' => 51.798856,
        'latitude' => 4.683647,
        ]    
        ]);
    }
}
