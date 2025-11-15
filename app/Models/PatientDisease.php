<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PatientDisease extends Model
{
    protected $fillable = ['patient_id','disease_id','diagnosed_at','duration_months','is_active','notes'];

    public function patient(){
        return $this->belongsTo(Patient::class);
    }
    public function disease(){
        return $this->belongsTo(Disease::class);
    }
}
