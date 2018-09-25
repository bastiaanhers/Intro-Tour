<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    public function questions()
    {
        return $this->hasMany('App\Question', 'id', 'action.data.question_id');
    }
}
