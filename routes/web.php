<?php

use App\Http\Requests\SignupPostUser;
use App\Http\Requests\SigninPostUser;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

Route::middleware("auth")->group(function() {
    Route::get("/dashboard", function() {

        return Inertia::render("Dashboard");
    })->name("dashboard");
    Route::post("/logout", function() {
        Auth::logout();
        return redirect("/");
    });
});
Route::middleware("guest")->group(function() {
    Route::get('/', function () {
        return Inertia::render("Home");
    })->name('home');
    Route::post("signin", function(SigninPostUser $request) {
        $user = User::where("email", $request->email)->first();
        if(!Auth::attempt(["email" => $request->email, "password" => $request->password])) {
            return back()->withErrors(["email" => "Invalid credentials"]);
        }
        $request->session()->regenerate();
        return redirect("/dashboard");
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
});

require __DIR__.'/auth.php';
