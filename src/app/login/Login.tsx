"use client";

import {FormEvent, useState} from "react";
import addToken from "@/app/login/addToken";
import {LoginRequestDTO} from "@/dtos/LoginRequestDTO";
import {useRouter} from "next/navigation";
import {post} from "@/services/callApi";
import logOut from "@/app/login/LogOut";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

     async function onSubmit(event: FormEvent<HTMLFormElement>) {
         event.preventDefault();
         const body = {email, password};
         const response = await post<LoginRequestDTO>(body, "authenticate")

         console.log("test")
         if (response.ok) {
             const body = await response.json();
             const role = body.role;
             addToken(body.token, role);
             console.log(role);
             if (role === 'student') {
                 router.push('/student-overzicht');
             }

             if (role === 'po') {
                 router.push('/po-overzicht');
             }
         }

         if (response.status === 401) {
             logOut();
             router.push('/login');
         }

    }

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white drop-shadow-lg p-10 rounded-lg w-full max-w-md">
                    <h1 className="text-center text-gray-800 text-2xl font-bold mb-6">Meld je aan</h1>
                    <form onSubmit={onSubmit}>
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-150 ease-in-out"
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-150 ease-in-out"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-primary hover:bg-accent text-white font-semibold py-2 px-6 rounded-md w-full transition duration-150 ease-in-out" >
                                Aanmelden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
