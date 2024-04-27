<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOrder extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'prodcuts_order';
    protected $fillable = [
        'product_id',
        'state',
        'price_id',
        'order_id'
    ];
}
