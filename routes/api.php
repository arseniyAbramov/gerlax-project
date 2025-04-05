<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/message', function () {
    return response()->json([
        'message' => 'Привет от Laravel API!'
    ]);
});