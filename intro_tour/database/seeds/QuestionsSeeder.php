<?php

use Illuminate\Database\Seeder;

class QuestionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('questions')->insert
        ([
        [
        'question' => "Hoe heet het hoofdgebouw van het leerpark?",
        ],[
        'question' => "Hoeveel jaar duurt de opleiding applicatie ontwikkelaar?",
        ],[
        'question' => "Als je op de glijbaan gaat, ben je dan nog steeds cool?"
        ]
        ]);

        DB::table('answers')->insert
        ([
        [
        'answer' => "Azzuro",
        'right_answer' => "0",
        'question_id' => 1,
        ],[
        'answer' => "Bianco",
        'right_answer' => "1",
        'question_id' => 1,
        ],[
        'answer' => "Celeste",
        'right_answer' => "0",
        'question_id' => 1,
        ],[
        'answer' => "3 jaar",
        'right_answer' => "1",
        'question_id' => 2,
        ],[    
        'answer' => "4 jaar",
        'right_answer' => "0",
        'question_id' => 2,
        ],[
        'answer' => "6 jaar",
        'right_answer' => "0",
        'question_id' => 2,
        ],[    
        'answer' => "Ja",
        'right_answer' => "1",
        'question_id' => 3,
        ],[
        'answer' => "Nee",
        'rigth_answer' => "0",
        'question_id' => 3
        ]   
        ]);

    }
}
