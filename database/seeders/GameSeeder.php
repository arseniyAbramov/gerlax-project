<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Game;
use App\Models\Genre;

class GameSeeder extends Seeder
{
    public function run(): void
    {
        $genres = Genre::all()->keyBy('name');

        $games = [
            // Action
            ['title' => 'Call of Duty', 'price' => 4999, 'genre' => 'Action', 'poster' => '/posters/call-of-duty.png', 'description' => 'Захватывающая военная кампания, кинематографические миссии и динамичный мультиплеер. Настоящая классика шутеров от первого лица.'],
            ['title' => 'Battlefield V', 'price' => 3999, 'genre' => 'Action', 'poster' => '/posters/BattlefieldV.png', 'description' => 'Масштабные сражения Второй мировой с разрушаемым окружением. Режимы на 64 игрока и захватывающий сеттинг.'],
            ['title' => 'DOOM Eternal', 'price' => 2999, 'genre' => 'Action', 'poster' => '/posters/DOOMEternal.png', 'description' => 'Безумный темп, кровавые добивания и орды демонов. Вернись в ад — и уничтожь его. Игра для настоящих бойцов.'],
            ['title' => 'Far Cry 6', 'price' => 4499, 'genre' => 'Action', 'poster' => '/posters/FarCry6.png', 'description' => 'Стань частью революции против диктатора. Открытый мир, множество оружия и свобода действий на экзотическом острове.'],

            // RPG
            ['title' => 'The Witcher 3', 'price' => 2999, 'genre' => 'RPG', 'poster' => '/posters/TheWitcher3.png', 'description' => 'Огромный живой мир, глубокие квесты и моральные выборы. Геральт из Ривии возвращается в величайшем фэнтези-RPG десятилетия.'],
            ['title' => 'Cyberpunk 2077', 'price' => 5999, 'genre' => 'RPG', 'poster' => '/posters/Cyberpunk2077.png', 'description' => 'Добро пожаловать в Найт-Сити — мрачный техно-город будущего. Кастомизация, импланты и эпический сюжет с Киану Ривзом.'],
            ['title' => 'Divinity: Original Sin 2', 'price' => 2499, 'genre' => 'RPG', 'poster' => '/posters/Divinity-2.png', 'description' => 'Пошаговая боёвка, кооператив на 4 игроков и потрясающая нелинейность. Идеальная игра для поклонников классических RPG.'],
            ['title' => 'Dragon Age: Inquisition', 'price' => 1999, 'genre' => 'RPG', 'poster' => '/posters/Dragon-Age-Inquisition.png', 'description' => 'Возглавь Инквизицию, спаси мир от разлома и стань героем. Магия, политика и эпические сражения.'],

            // Спортивные
            ['title' => 'FIFA 23', 'price' => 4999, 'genre' => 'Спортивные', 'poster' => '/posters/FIFA23.png', 'description' => 'Новый движок, реалистичная физика мяча и актуальные составы. Почувствуй атмосферу настоящего футбола.'],
            ['title' => 'NBA 2K24', 'price' => 5999, 'genre' => 'Спортивные', 'poster' => '/posters/NBA2K24.png', 'description' => 'Полный контроль над игрой, яркие матчи и глубочайшая карьера игрока. Баскетбол, как ты его ещё не видел.'],
            ['title' => 'UFC 5', 'price' => 3999, 'genre' => 'Спортивные', 'poster' => '/posters/UFC5.png', 'description' => 'Сражайся в октагоне с лучшими бойцами мира. Реализм ударов, пот и кровь — это не шоу, это битва.'],
            ['title' => 'NHL 24', 'price' => 3499, 'genre' => 'Спортивные', 'poster' => '/posters/NHL24.png', 'description' => 'Захватывающий хоккей на льду: острые моменты, шайбы в девятку и командный дух.'],

            // Гонки
            ['title' => 'Forza Horizon 5', 'price' => 5999, 'genre' => 'Гонки', 'poster' => '/posters/ForzaHorizon5.png', 'description' => 'Открытый мир Мексики, сотни машин и дикая скорость. Гоняй по пустыням, джунглям и улицам города.'],
            ['title' => 'F1 23', 'price' => 5499, 'genre' => 'Гонки', 'poster' => '/posters/F1-23.png', 'description' => 'Официальная Формула-1: профессиональные трассы, пилоты и соревновательный онлайн.'],
            ['title' => 'Need for Speed Heat', 'price' => 2999, 'genre' => 'Гонки', 'poster' => '/posters/Need-for-Speed-Heat.png', 'description' => 'Уличные гонки ночью и официальные дрифт-соревнования днём. Тюнинг и погоня — в твоих руках.'],
            ['title' => 'Gran Turismo 7', 'price' => 6999, 'genre' => 'Гонки', 'poster' => '/posters/GranTurismo7.png', 'description' => 'Симулятор, приближённый к реальности. Гонки, лицензии и коллекционирование автомобилей.'],

            // Хорроры
            ['title' => 'Resident Evil Village', 'price' => 3999, 'genre' => 'Хорроры', 'poster' => '/posters/ResidentEvilVillage.png', 'description' => 'Готическая деревня, вампиры и леди Димитреску. Один из лучших хорроров последних лет.'],
            ['title' => 'Outlast 2', 'price' => 1999, 'genre' => 'Хорроры', 'poster' => '/posters/Outlast2.png', 'description' => 'Ужасы религиозного культа в пустыне Аризоны. Ни оружия — только камера и паника.'],
            ['title' => 'Dead Space Remake', 'price' => 4999, 'genre' => 'Хорроры', 'poster' => '/posters/Dead-Space-Remake.png', 'description' => 'Ремейк легендарного космического хоррора. Смертельная тишина и нечто, что прячется в темноте.'],
            ['title' => 'Amnesia: Rebirth', 'price' => 1499, 'genre' => 'Хорроры', 'poster' => '/posters/Amnesia.png', 'description' => 'Амнезия. Пустыня. Страх. Психологический триллер от мастеров хоррора.'],
        ];

        foreach ($games as $game) {
            Game::create([
                'title' => $game['title'],
                'price' => $game['price'],
                'genre_id' => $genres[$game['genre']]->id,
                'poster' => $game['poster'] ?? null,
                'description' => $game['description'] ?? null,
            ]);
        }
    }
}