<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Game;

class GameController extends Controller
{
    public function index()
    {
        // Получаем все игры с жанрами
        $games = Game::with('genre')->get();

        return response()->json($games);
    }
    public function show($id)
    {
    $game = Game::with('genre')->findOrFail($id);
    return response()->json($game);
    }
}
