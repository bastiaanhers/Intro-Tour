<?php

use Illuminate\Database\Seeder;

class EventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('events')->insert 
        ([
        [
        'trigger' => "{'type': 'time','data': {'time_passed': 60}}",
        'action' => "{actions:{{'type': 'message','data': 'this is a message for all emo kids'},{'type': 'questions', 'data': 'question_id':2},}}",
        ],[
        'trigger' => "{'type': 'location','data': {'location_id': 1}}",
        'action' => "{'type':'question','data':{'question_id':1}}",
        ],[
        'trigger' => "{'type': 'questions_answerd','data': {'amount': 2}}",
        'action' => "{'type':'question','data':{'question_id':3}}",
        ]
        ]);

        DB::table('event_tour')->insert
        ([
        [
        'tour_id' => 1,
        'event_id' => 1,
        ],[
        'tour_id' => 1,
        'event_id' => 2,
        ],[
        'tour_id' => 1,
        'event_id' => 3,
        ]
        ]);
    }
}
