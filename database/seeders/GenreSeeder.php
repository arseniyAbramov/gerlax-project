<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Genre; // ← ОБЯЗАТЕЛЬНО

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genres = ['Action', 'RPG', 'Спортивные', 'Гонки', 'Хорроры'];

        foreach ($genres as $name) {
            Genre::updateOrCreate(
                        ['name' => $name],
                        ['slug' =>  Str::slug($name)]
                    );   
        }
    }
}
