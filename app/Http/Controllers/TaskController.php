<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostTask;
use App\Http\Requests\PutTask;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function dashboard() {
        $user = Auth::user();
        return Inertia::render("Dashboard", ["tasks" => $user->tasks]);
    }
    public function postTask(PostTask $request) {
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $user->tasks()->create($request->validated());
        return to_route("dashboard");
    }
    public function editTask(PutTask $request) {
        $task = Task::find($request->id);
        if(!$task) {
            return to_route("dashboard");
        }
        if($task->user_id !== Auth::id()) {
            return to_route("dashboard");
        }
        $task->title = $request->title;
        $task->description = $request->description;
        $task->completed = $request->completed;
        $task->due_date = $request->due_date;
        $task->save();
        return to_route("dashboard");
    }
}
