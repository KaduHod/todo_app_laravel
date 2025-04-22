<?php

use App\Http\Requests\SignupPostUser;
use App\Http\Requests\SigninPostUser;
use App\Http\Requests\PostTask;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
Route::middleware("guest")->group(function() {
    Route::get('/', function () {
        return Inertia::render("Home");
    })->name('home');
    Route::post("/signin", function(SigninPostUser $request) {
        if(!Auth::attempt(["email" => $request->email, "password" => $request->password])) {
            return back()->withErrors(["email" => "Invalid credentials"]);
        }
        $request->session()->regenerate();
        return to_route("dashboard");
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
Route::get("/login", function() {
    return redirect("/");
})->name("login");
Route::middleware("auth")->group(function() {
    Route::post("/tasks", function(PostTask $request) {
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $user->tasks()->create($request->validated());
        return to_route("dashboard");
    })->name("tasks");
    Route::get("/dashboard", function() {
        $user = Auth::user();
        return Inertia::render("Dashboard", [
            "tasks" => $user->tasks
        ]);
    })->name("dashboard");
    Route::post("/logout", function() {
        Auth::logout();
        return redirect("/");
    });
});
require __DIR__.'/auth.php';
