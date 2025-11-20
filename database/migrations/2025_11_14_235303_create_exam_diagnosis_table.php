<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('exam_diagnosis', function (Blueprint $table) {
            $table->foreignId('exam_id')->constrained('ophthalmic_exams')->cascadeOnDelete();
            $table->foreignId('diagnosis_id')->constrained('diagnoses')->cascadeOnDelete();
            $table->primary(['exam_id','diagnosis_id']);
        });
    }
    public function down(): void {
        Schema::dropIfExists('exam_diagnosis');
    }
};

