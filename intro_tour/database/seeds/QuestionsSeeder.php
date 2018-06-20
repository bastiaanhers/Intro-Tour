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
        'question' => "How can you repel the haters?",
        ],[
        'question' => "Whitch is the better paul brother?",
        ],[
        'question' => "Why are we still here?"
        ]
        ]);

        DB::table('answers')->insert
        ([
        [
        'id' => 1,
        'answer' => "spit on them",
        'right_answer' => "0",
        ],[
        'id' => 2,
        'answer' => "Dab on the haters",
        'right_answer' => "1",
        ],[
        'id' => 3,
        'answer' => "Walk away like a responible adult",
        'right_answer' => "0",
        ],[
        'id' => 4,
        'answer' => "Logan Paul",
        'right_answer' => "0",
        ],[
        'id' => 5,    
        'answer' => "Jake Paul",
        'right_answer' => "1",
        ],[
        'id' => 6,
        'answer' => "Just to suffer",
        'right_answer' => "1",
        ],[
        'id' => 7,    
        'answer' => "To survive and reproduce",
        'right_answer' => "0",
        ]    
        ]);

        DB::table('answer_question')->insert
        ([
        [
        'answer_id' => 1,
        'question_id' => 1,  
        ],[
        'answer_id' => 2,
        'question_id' => 1,  
        ],[
        'answer_id' => 3,
        'question_id' => 1,  
        ],[
        'answer_id' => 4,
        'question_id' => 2,  
        ],[
        'anwser_id' => 5,
        'question_id' => 2,
        ],[
        'answer_id' => 6,
        'question_id' => 3,
        ],[
        'asnwer_id' => 7,
        'question_id' => 3,
        ]
        ]);
    }
}
