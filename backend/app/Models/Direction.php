<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Direction extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'directions';
    protected $fillable = [
        'name',
        'address',
        'number',
        'additonalInfo',
        'zip',
        'city',
        'user_id'
    ];
}
