<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('games')->insert([
            [
                'title' => 'The Witcher 3',
                'poster' => 'witcher3.jpg',
                'description' => 'An epic RPG with a huge open world.',
                'price' => 29.99,
                'genre_id' => 2, // RPG
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Counter-Strike 2',
                'poster' => 'cs2.jpg',
                'description' => 'Tactical shooter game.',
                'price' => 0.00,
                'genre_id' => 1, // Action
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Stardew Valley',
                'poster' => 'stardew.jpg',
                'description' => 'Chill farming and life simulator.',
                'price' => 14.99,
                'genre_id' => 4, // Indie
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
