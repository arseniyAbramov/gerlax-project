<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\Genre; // ← ОБЯЗАТЕЛЬНО

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genres = ['Action', 'RPG', 'Strategy', 'Indie'];

        foreach ($genres as $name) {
            Genre::firstOrCreate(['name' => $name]);
        }
    }
}
