<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MedicalImage extends Model
{
    protected $fillable = [
        'patient_id','consultation_id','uploaded_by','category',
        'storage_path','file_name','mime_type','size_bytes','is_active'
    ];

    public function patient(){
        return $this->belongsTo(Patient::class);
    }
    public function consultation(){
        return $this->belongsTo(Consultation::class);
    }
    public function uploader(){
        return $this->belongsTo(User::class,'uploaded_by');
    }
}
