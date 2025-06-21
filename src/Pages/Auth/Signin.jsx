import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ email: '', password: '' });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitted:', formData);

        let result = await axios({
            url: `${process.env.REACT_APP_BASE_URL}auth/signin`,
            method: "post",
            data: formData
        });
        if (result.data.status === 200) {
            localStorage.setItem("token_new", result.data.body.token,)
            navigate("/");
        };
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-2">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md"
            >
                <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Sign In</h2>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm mb-1" htmlFor="email">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm mb-1" htmlFor="password">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Enter your password"
                    />
                </div>

                <div className="flex justify-end mb-6 text-sm">
                    <a href="/forgot-password" className="text-green-500 hover:underline">
                        Forgot Password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                    Sign In
                </button>

                <div className="mt-6 flex flex-col items-center text-sm text-gray-600">
                    <p>
                        Don’t have an account?{" "}
                        <a href="/signup" className="text-green-500 hover:underline">
                            Sign Up
                        </a>
                    </p>
                    <a href="/" className="mt-2 text-green-500 hover:underline">
                        ← Back to Home
                    </a>
                </div>
            </form>
        </div>

    );
};

export default Signin;
