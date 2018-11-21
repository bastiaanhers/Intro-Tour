<?php

use Illuminate\Database\Seeder;

class HintsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hints')->insert(
            [
                [
                    'hint' => 'Sinds kort zijn de opleidingen verkort',
                    'event_id' => 2,
                    'cost' => 50
                ],
                [
                    'hint' => 'In de buurt van het gebouw met die kleurtjes',
                    'event_id' => 1,
                    'cost' => 100
                ],
                [
                    'hint' => 'Yo, wat denk je nou zelf?',
                    'event_id' => 4,
                    'cost' => 150
                ]
            ]
        );
    }
}
