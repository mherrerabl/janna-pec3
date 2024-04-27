<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products_variation', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->integer('stock')->default(0);
            $table->unsignedBigInteger('price_id');
            $table->float('purchasePrice', 2);
            $table->string('color', 7)->nullable();
            $table->unsignedBigInteger('product_id');
            $table->foreign('price_id')->references('id')->on('prices');     
            $table->foreign('product_id')->references('id')->on('products');     
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products_variation');
    }
};
