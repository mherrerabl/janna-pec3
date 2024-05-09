<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'addresses';
    protected $fillable = [
        'name',
        'address',
        'number',
        'additionalInfo',
        'zip',
        'city',
        'predetermined',
        'user_id',
    ];
}
