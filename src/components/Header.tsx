"use client";

import React from "react";
import {useRouter} from "next/navigation";
import logOut from "@/app/login/LogOut";
import {deleteFun} from "@/services/callApi";

export const Header = () => {
    const router = useRouter();
    async function onClick() {
        const response = await deleteFun("authenticate")

        if (response.ok) {
            logOut();
            router.push('/login');
        }

        if (response.status === 401) {
            logOut();
            router.push('/login');
        }
    }
    return (
        <>
            <header>
                <nav className="bg-gray-100 border-gray-200 lg:px-5 py-5 dark:bg-gray-800">
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex items-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/RIJN-IJSSEL-VAKSCHOOL-WAGENINGEN%20(1).png" className="mr-3 h-6 sm:h-9"
                                 alt="RijnIjsel"/>
                        </a>
                        <div className="items-center">
                            <ul className="flex flex-grow flex-col mt-4 font-medium lg:flex-row gap-24 items-center lg:mt-0 w-full">
                                <li className="flex gap-12">
                                    <a href="/"
                                       className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                       aria-current="page">Home</a>
                                    <a href="/student-overzicht"
                                       className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                       aria-current="page">Overzicht</a>
                                    <a href="/voortgang"
                                       className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                       aria-current="page">Voortgang</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <button

                                className="bg-red-500 hover:bg-red-400 transition text-white text-lg font-bold py-2 px-4 rounded-md"
                                onClick={onClick}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
