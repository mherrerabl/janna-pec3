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
        Schema::create('products_order', function (Blueprint $table) {
            $table->id();
            $table->boolean('state');
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('price_id');
            $table->unsignedBigInteger('order_id');
            $table->foreign('price_id')->references('id')->on('prices');     
            $table->foreign('product_id')->references('id')->on('products');     
            $table->foreign('order_id')->references('id')->on('orders');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products_order');
    }
};
