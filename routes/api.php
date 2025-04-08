<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GameController;
use App\Http\Controllers\Api\GenreController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\OrderController;

// 🌐 Публичные маршруты
Route::get('/message', function () {
    return response()->json(['message' => 'Привет от Laravel API!']);
});

// 📦 Игры
Route::get('/games', [GameController::class, 'index']);           // Все игры
Route::get('/games/{id}', [GameController::class, 'show']);       // Детали игры

// 🎮 Жанры
Route::get('/genres', [GenreController::class, 'index']);         // Список жанров
Route::get('/genres/{slug}/games', [GenreController::class, 'gamesByGenre']); // Игры по жанру

// 🔐 Аутентификация
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// 🔒 Защищённые маршруты (требуется токен)
Route::middleware('auth:sanctum')->group(function () {

    // 👤 Инфо о пользователе
    Route::get('/user', function (Request $request) {
        return response()->json($request->user());
    });

    // ✏️ Обновление имени
    Route::put('/user', function (Request $request) {
        $request->validate(['name' => 'required|string|max:255']);

        $user = $request->user();
        $user->name = $request->name;
        $user->save();

        return response()->json($user);
    });

    // 🖼️ Загрузка аватара
    Route::post('/user/avatar', function (Request $request) {
        $request->validate(['avatar' => 'image|max:2048']);

        $path = $request->file('avatar')->store('avatars', 'public');

        $user = $request->user();
        $user->avatar = $path;
        $user->save();

        return response()->json(['avatar' => $path]);
    });

    // 🚪 Выход
    Route::post('/logout', [AuthController::class, 'logout']);

    // 🛒 Заказы
    Route::get('/orders', [OrderController::class, 'index']);
    Route::post('/orders', [OrderController::class, 'store']);
});