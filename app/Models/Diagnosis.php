<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Diagnosis extends Model
{
    protected $fillable = ['created_by','code','name','description','category','is_active'];

    public function author(){
        return $this->belongsTo(User::class,'created_by');
    }
    public function suggestedTreatments(){
        return $this->belongsToMany(Treatment::class,'diagnosis_treatment','diagnosis_id','treatment_id');
    }
}
