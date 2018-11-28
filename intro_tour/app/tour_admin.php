<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Tour;
use App\Admin;


class tour_admin extends Model
{
    protected $table = 'admin_tour';

    public function tour(){
        return $this->hasOne('App\Tour', 'id', 'tour_id');
    }

    public function admin(){
        return $this->hasOne('App\Admin', 'id', 'admin_id');
    }
}