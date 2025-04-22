<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SigninPostUser;
use App\Http\Requests\SignupPostUser;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function index() {
        return Inertia::render("Home");
    }
    public function signin(SigninPostUser $request) {
        if(!Auth::attempt(["email" => $request->email, "password" => $request->password])) {
            return back()->withErrors(["email" => "Invalid credentials"]);
        }
        $request->session()->regenerate();
        return to_route("dashboard");
    }
    public function signup(SignupPostUser $request) {
        $user = new User();
        foreach($request->all() as $key => $value) {
            if(str_contains($key, "confirmation")) continue;
            $user->setAttribute($key, $value);
        }
        $user->save();
        return to_route("home");
    }
    public function signupIndex() {
        return Inertia::render("Register");
    }
    public function logout() {
        Auth::logout();
        return redirect("/");
    }
}
