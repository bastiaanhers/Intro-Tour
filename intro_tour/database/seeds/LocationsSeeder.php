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
        'radius' => '{"type": "circle", "data": 12}',
        'longitude' => 4.683647,
        'latitude' => 51.798856,
        ],
        [
        'name' => "test position 2",
        'description' => "this is a test postition 2",
        'radius' => '{"type": "circle", "data": 12}',
        'longitude' => 4.783647,
        'latitude' => 51.898856,
        ],
        [
        'name' => 'De glijbaan',
        'description' => "Ga op zoek naar een glijbaan",
        'radius' => '{"type": "circle", "data": 15}',
        'longitude' => 4.682584,
        'latitude' => 51.799056
        ]
        ]);
    }
}
