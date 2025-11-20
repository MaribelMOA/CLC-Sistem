<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('ophthalmic_exams', function (Blueprint $table) {
            $table->id();
            $table->foreignId('consultation_id')->constrained('consultations')->cascadeOnDelete();
            $table->decimal('right_av_sc', 5, 2)->nullable();
            $table->decimal('right_av_cc', 5, 2)->nullable();
            $table->decimal('left_av_sc', 5, 2)->nullable();
            $table->decimal('left_av_cc', 5, 2)->nullable();
            $table->decimal('right_pio', 5, 2)->nullable();
            $table->decimal('left_pio', 5, 2)->nullable();
            $table->text('right_lens')->nullable();
            $table->text('left_lens')->nullable();
            $table->text('right_bmc')->nullable();
            $table->text('left_bmc')->nullable();
            $table->text('right_fo')->nullable();
            $table->text('left_fo')->nullable();
            $table->text('exam_notes')->nullable();
            $table->text('diagnosis_text')->nullable();
            $table->text('treatment_plan_text')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('ophthalmic_exams');
    }
};

