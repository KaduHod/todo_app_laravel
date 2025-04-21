import React from "react";
import { useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/signup");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-slate-800 rounded-lg px-8 py-10 ring-1 ring-slate-900/5 shadow-xl">
                    <h1 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-6">
                        Create an Account
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                htmlFor="name"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                                required
                            />
                            {errors.name && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                                required
                            />
                            {errors.email && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                                required
                            />
                            {errors.password && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </div>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                htmlFor="password_confirmation"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                                required
                            />
                            {errors.password_confirmation && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.password_confirmation}
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                            >
                                {processing
                                    ? "Creating Account..."
                                    : "Register"}
                            </button>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Already have an account?{" "}
                                <a
                                    href="/"
                                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
                                >
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
