import React from "react";
import { usePage } from "@inertiajs/react";
import Header from "../Components/Header";
import TaskList, { Task } from "../Components/Tasks";
import NewTask from "../Components/NewTask";

export default function Dashboard() {
    const { tasks } = usePage<{ tasks: Task[] }>().props;

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-white">
            <Header />

            <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
                <section className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Your Tasks</h1>
                    <NewTask />
                </section>

                <section>
                    <TaskList tasks={tasks} />
                </section>
            </main>
        </div>
    );
}

