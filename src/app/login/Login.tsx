"use client"

import {FormEvent, useState} from "react";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        login()
    }

    const login = () => {
        callApi('POST', {email: email, password}, 'POST').then((response) => {
            console.log(response);
        })
    }

    return (
        <>
            <div className="bg-white min-h-screen w-full">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white drop-shadow-md p-10 rounded-md">
                        <h1 className="text-center text-black text-2xl font-bold mb-6 text-bl">Aanmelden</h1>
                        <form>
                            {/* Email Input */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Voer je email in"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                                    Wachtwoord:
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Voer je wachtwoord in"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Submit*/}
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="bg-primary mt-4 text-white font-semibold py-2 px-6 rounded-md w-full"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
