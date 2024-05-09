<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'persons';
    protected $fillable = [
        'name',
        'surname',
        'email',
        'phone',
    ];

    protected $casts = [
        'email' => 'encrypted',
        'phone' => 'encrypted',
    ];
}
