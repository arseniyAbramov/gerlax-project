<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GameController;
use App\Http\Controllers\Api\GenreController;
// use App\Http\Controllers\Api\GameController;

Route::get('/message', function () {
    return response()->json([
        'message' => 'Привет от Laravel API!'
    ]);
});
Route::get('/games', [GameController::class, 'index']);       // список игр
Route::get('/games/{id}', [GameController::class, 'show']);   // детальная страница игры
Route::get('/genres', [GenreController::class, 'index']);  