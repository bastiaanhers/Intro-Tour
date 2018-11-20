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
                    'hint' => 'Logan is not a good boi',
                    'event_id' => 2,
                    'cost' => 1
                ],
                [
                    'hint' => 'Dabbing is always the best solution',
                    'event_id' => 1,
                    'cost' => 5
                ]
            ]
        );
    }
}
