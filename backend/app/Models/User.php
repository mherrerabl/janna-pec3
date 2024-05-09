<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'users';
    protected $fillable = [
        'person_id',
        'password',
        'type'
    ];

    protected $casts = [
        'password' => 'encrypted',
    ];
}
