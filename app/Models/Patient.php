<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable = [
        'primary_clinic_id','first_name','last_name','sex','dob','occupation',
        'referred_by','address','phone','mobile','email','is_active'
    ];

    public function primaryClinic(){
        return $this->belongsTo(Clinic::class,'primary_clinic_id');
    }
    public function clinics(){
        return $this->belongsToMany(Clinic::class);
    }
    public function history(){
        return $this->hasOne(PatientHistory::class);
    }
    public function diseases(){
        return $this->hasMany(PatientDisease::class);
    }
    public function consultations(){
        return $this->hasMany(Consultation::class);
    }
    public function images(){
        return $this->hasMany(MedicalImage::class);
    }
}

