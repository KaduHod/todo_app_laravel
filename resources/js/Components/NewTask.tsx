import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Task } from "../types";

export default function NewTask() {
    const [ open, setOpen ] = useState(false);
    const { data, setData, post, processing, errors } = useForm<Omit<Task, "id">>({
        title: "",
        description: "",
        completed: false,
        due_date: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/tasks");
        setOpen(!open)
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                + New Task
            </button>

            {open && (
                <form
                    onSubmit={handleSubmit}
                    className="absolute top-12 left-0 bg-white dark:bg-slate-800 p-4 rounded shadow-lg z-10 w-72"
                >
                    <input
                        type="text"
                        value={data.title}
                        name="title"
                        onChange={(e) => setData("title", e.target.value)}
                        placeholder="Task title"
                        className="w-full px-3 py-2 border rounded mb-3 dark:bg-slate-700 dark:text-white"
                        required
                    />
                    {errors.title && (
                        <div className="text-red-500 text-sm mt-1">
                            {errors.title}
                        </div>
                    )}

                    <textarea
                        value={data.description}
                        name="description"
                        onChange={(e) => setData("description", e.target.value)}
                        placeholder="Description"
                        className="w-full px-3 py-2 border rounded mb-3 resize-none dark:bg-slate-700 dark:text-white"
                        rows={3}
                    />
                    {errors.description && (
                        <div className="text-red-500 text-sm mt-1">
                            {errors.description}
                        </div>
                    )}

                    <input
                        type="date"
                        value={data.due_date}
                        name="due_date"
                        onChange={(e) => setData("due_date", e.target.value)}
                        className="w-full px-3 py-2 border rounded mb-3 dark:bg-slate-700 dark:text-white"
                    />
                    {errors.due_date && (
                        <div className="text-red-500 text-sm mt-1">
                            {errors.due_date}
                        </div>
                    )}

                    <div className="flex items-center mb-4 gap-2">
                        <input
                            id="completed"
                            type="checkbox"
                            name="completed"
                            checked={data.completed}
                            onChange={(e) =>
                                setData("completed", e.target.checked)
                            }
                            className="accent-green-600"
                        />
                        {errors.completed && (
                            <div className="text-red-500 text-sm mt-1">
                                {errors.completed}
                            </div>
                        )}
                        <label
                            htmlFor="completed"
                            className="text-sm text-slate-700 dark:text-slate-300"
                        >
                            Mark as completed
                        </label>
                    </div>

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                        >
                            {processing ? "Creating..." : "Create"}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
