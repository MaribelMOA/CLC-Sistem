<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = ['name','email','password','role','is_active','specialty','license_number'];

    protected $hidden = ['password','remember_token'];

    public function clinics(){
        return $this->belongsToMany(Clinic::class);
    }
    public function createdConsultations(){
        return $this->hasMany(Consultation::class,'created_by');
    }
    public function doctorConsultations(){
        return $this->hasMany(Consultation::class,'doctor_id');
    }
}

