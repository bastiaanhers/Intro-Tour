<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class event_tour extends Model
{
    protected $table = 'event_tour';
    public function event()
    {
        return $this->hasOne('App\Event', 'id', 'event_id');
    } 
    public function tour()
    {
        return $this->hasOne('App\Tour', 'id', 'tour_id');
    }
}
