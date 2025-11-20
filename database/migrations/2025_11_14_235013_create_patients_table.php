<?php

// database/migrations/XXXX_XX_XX_XXXXXX_create_patients_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('primary_clinic_id')->nullable()->constrained('clinics')->nullOnDelete();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('sex', 10)->nullable();
            $table->date('dob')->nullable();
            $table->string('occupation')->nullable();
            $table->string('referred_by')->nullable();
            $table->text('address')->nullable();
            $table->string('phone', 30)->nullable();
            $table->string('mobile', 30)->nullable();
            $table->string('email')->nullable()->index();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('patients');
    }
};

