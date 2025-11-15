<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PatientHistory extends Model
{
    protected $fillable = [
        'patient_id','allergies_summary','contraindications_summary','cardio_notes','ophthalmic_notes'
    ];

    public function patient(){
        return $this->belongsTo(Patient::class);
    }
}
