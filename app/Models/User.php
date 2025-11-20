<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\TwoFactorAuthenticatable;
class User extends Authenticatable
{
    use HasFactory;
    use Notifiable;
    use TwoFactorAuthenticatable;

    protected $fillable = ['name','email','password','role','is_active','specialty','license_number',];

    protected $hidden = ['password','remember_token','two_factor_secret','two_factor_recovery_codes',];

    //encriptar con bcrypt
    public function setPasswordAttribute($value){
        if (! empty($value)) {
            $this->attributes['password'] = Hash::needsRehash($value)
                ? Hash::make($value)
                : $value;
        }
    }

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

