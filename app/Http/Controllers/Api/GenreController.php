<?php

namespace App\Http\Controllers\Api;
use App\Models\Game; // на всякий случай
use Illuminate\Support\Str; // если понадобится
use App\Models\Genre;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index()
    {
        $genres = Genre::all();
        return response()->json($genres);
    }

    public function gamesByGenre($slug)
    {
        $genre = Genre::where('slug', $slug)->firstOrFail();
        $games = $genre->games()->with('genre')->get();

        return response()->json($games);
    }
}
