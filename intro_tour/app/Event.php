<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $casts = [
        'trigger' => 'array',
        'action' => 'array'
    ];
    protected $fillable = [
        'trigger', 'action'
    ];
    public function question()
    {
        return $this->hasOne('App\Question', 'id', 'action->data->question_id');
    }
}
