<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::middleware("guest")->group(function() {
    Route::get('/', [AuthController::class, "index"])->name('home');
    Route::post("/signin", [AuthController::class, "signin"]);
    Route::get("/signup", [AuthController::class, "signupIndex"]);
    Route::post("/signup", [AuthController::class, "signup"]);
});
Route::permanentRedirect('/login', '/')->name("login");
Route::middleware("auth")->group(function() {
    Route::post("/tasks", [TaskController::class, "postTask"])->name("tasks");
    Route::put("/tasks/{id}", [TaskController::class, "editTask"])->name("tasks");
    Route::get("/dashboard", [TaskController::class, "dashboard"])->name("dashboard");
    Route::post("/logout", [AuthController::class, "logout"]);
});
require __DIR__.'/auth.php';
