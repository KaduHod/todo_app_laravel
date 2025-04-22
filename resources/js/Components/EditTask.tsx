import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Task } from "../types";

const TaskForm: React.FC<{task: Task}> = ({task}) => {
    const [open, setOpen] = useState(false);
    const { data, setData, submit, processing, errors } = useForm<Task>({
        id: task.id,
        title: task.title || "",
        description: task.description || "",
        completed: task.completed || false,
        due_date: task.due_date || "",
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submit({method: "put" ,url: `tasks/${task.id}`});
        setOpen(!open);
    };

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="text-white px-4 py-2 rounded hover:cursor-pointer"
            >
                ✏️
            </button>
            {open && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-center pt-20 z-50">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 border p-5 bg-white rounded-md"
                    >
                        <input type="hidden" value={data.id} name="id" />

                        <button
                            onClick={() => setOpen(!open)}
                            className="text-white px-4 py-2 rounded hover:cursor-pointer"
                        >
                            ❌
                        </button>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                                required
                            />
                            {errors.title && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Description
                            </label>
                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                                rows={4}
                            />
                            {errors.description && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <input
                                    type="checkbox"
                                    checked={data.completed}
                                    onChange={(e) =>
                                        setData("completed", e.target.checked)
                                    }
                                />
                                Completed
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Due Date
                            </label>
                            <input
                                type="date"
                                value={data.due_date.split(' ')[0]}
                                onChange={(e) =>
                                    setData("due_date", e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                                required
                            />
                            {errors.due_date && (
                                <p className="text-sm text-red-500 mt-1">
                                    {errors.due_date}
                                </p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                            >
                                {processing ? "Saving..." : "Save"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default TaskForm;
