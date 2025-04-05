<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Game extends Model
{
use HasFactory;

    protected $fillable = [
        'title',
        'poster',
        'description',
        'price',
        'genre_id',
    ];

    /**
     * Игра принадлежит жанру
     */
    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    /**
     * Игра может быть в нескольких заказах
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
