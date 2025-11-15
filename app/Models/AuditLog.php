<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AuditLog extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'entity_type','entity_id','action','actor_id','clinic_id','ip_address','user_agent','details','created_at'
    ];

    protected $casts = ['details'=>'array','created_at'=>'datetime'];

    public function actor(){
        return $this->belongsTo(User::class,'actor_id');
    }
    public function clinic(){
        return $this->belongsTo(Clinic::class,'clinic_id');
    }
}


