<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Disease extends Model
{
    protected $fillable = ['code','name','category','is_chronic','is_active'];

    public function patientLinks(){
        return $this->hasMany(PatientDisease::class);
    }
}
