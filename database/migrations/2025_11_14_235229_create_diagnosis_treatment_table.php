<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('diagnosis_treatment', function (Blueprint $table) {
            $table->foreignId('diagnosis_id')->constrained('diagnoses')->cascadeOnDelete();
            $table->foreignId('treatment_id')->constrained('treatments')->cascadeOnDelete();
            $table->primary(['diagnosis_id','treatment_id']);
        });
    }
    public function down(): void {
        Schema::dropIfExists('diagnosis_treatment');
    }
};

