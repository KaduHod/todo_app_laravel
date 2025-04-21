<?php

use App\Http\Requests\SignupPostUser;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render("Home");
})->name('home');
Route::post("signup", function() {

});
Route::get("/signup", function() {
    return Inertia::render("Register");
});
Route::post("/signup", function(SignupPostUser $request) {
    $user = new User();
    foreach($request->all() as $key => $value) {
        if(str_contains($key, "confirmation")) continue;
        $user->setAttribute($key, $value);
    }
    $user->save();
    return to_route("home");
});

require __DIR__.'/auth.php';
