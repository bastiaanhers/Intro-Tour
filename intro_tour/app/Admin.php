<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    public function tours(){
        return $this->hasMany('App\tour', 'admin_id', 'id');
    }
    
}
