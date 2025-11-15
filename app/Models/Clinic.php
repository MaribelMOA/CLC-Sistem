<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clinic extends Model
{
    protected $fillable = ['name','address','phone','clues_code','is_active'];

    public function users(){
        return $this->belongsToMany(User::class);
    }
    public function patients(){
        return $this->belongsToMany(Patient::class);
    }
    public function consultations(){
        return $this->hasMany(Consultation::class);
    }
}

