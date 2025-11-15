<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    protected $fillable = [
        'patient_id','clinic_id','created_by','doctor_id','status','arrival_time','started_at','completed_at',
        'current_complaint','weight_kg','height_cm','heart_rate','resp_rate','blood_pressure','temperature_c',
        'notes','is_active'
    ];

    protected $casts = [
        'arrival_time'=>'datetime',
        'started_at'=>'datetime',
        'completed_at'=>'datetime',
    ];

    public function patient(){
        return $this->belongsTo(Patient::class);
    }
    public function clinic(){
        return $this->belongsTo(Clinic::class);
    }
    public function creator(){
        return $this->belongsTo(User::class,'created_by');
    }
    public function doctor(){
        return $this->belongsTo(User::class,'doctor_id');
    }
    public function exam(){
        return $this->hasOne(OphthalmicExam::class);
    }
    public function images(){
        return $this->hasMany(MedicalImage::class);
    }
}
