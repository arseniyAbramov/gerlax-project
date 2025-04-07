<?php


use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); // 👈 это твой React-фронт
})->where('any', '.*');
