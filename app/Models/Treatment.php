<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Treatment extends Model
{
    protected $fillable = ['created_by','code','name','description','type','is_active'];

    public function author(){
        return $this->belongsTo(User::class,'created_by');
    }
    public function suggestedForDiagnoses(){
        return $this->belongsToMany(Diagnosis::class,'diagnosis_treatment','treatment_id','diagnosis_id');
    }
}
