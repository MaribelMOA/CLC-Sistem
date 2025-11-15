<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OphthalmicExam extends Model
{
    protected $fillable = [
        'consultation_id','right_av_sc','right_av_cc','left_av_sc','left_av_cc','right_pio','left_pio',
        'right_lens','left_lens','right_bmc','left_bmc','right_fo','left_fo','exam_notes',
        'diagnosis_text','treatment_plan_text','is_active'
    ];

    public function consultation(){
        return $this->belongsTo(Consultation::class);
    }
    public function diagnoses(){
        return $this->belongsToMany(Diagnosis::class,'exam_diagnosis','exam_id','diagnosis_id');
    }
    public function treatments(){
        return $this->belongsToMany(Treatment::class,'exam_treatment','exam_id','treatment_id');
    }
}

