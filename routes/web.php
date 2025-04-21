<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render("Home");
})->name('home');
Route::get("/signup", function() {
    return Inertia::render("Register");
})->name("register");

require __DIR__.'/auth.php';
