"use client";

import { CriteriumDto } from "@/dtos/criteriumDto";
import { callApi } from "@/services/callApi";
import { useEffect, useState } from "react";

export default function Overzicht() {
    const [criterium, setCriterium] = useState<CriteriumDto[]>([]);
    useEffect(() => {
        // Function to fetch data
        const getAllCriterium = async () => {
            try {
                const response = await callApi<CriteriumDto[]>("StudentOverzicht/CriteriaAll");
                const data = await response.json();
                setCriterium(data); // Update the state with fetched data
            } catch (error) {
                console.error("Error fetching criterium data:", error);
            }
        };
        // Automatically call the function inside useEffect
        getAllCriterium();
    }, []);



    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white w-64 p-4">
                <h1 className="text-xl font-bold mb-4">User Name</h1>
                <p className="text-gray-400">User Details</p>
                {/*<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">*/}
                {/*    */}
                {/*</button>*/}
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bottom-60">
                    logout
                </button>
                {/* You can add more user details here */}
            </div>

            {/* Main content area */}
            <div className="flex-1 p-4 overflow-auto">
            {/* General Info Card */}
                <div className="bg-blue-200 p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-3xl font-bold mb-4">Periode 1</h2>
                    <p className="text-gray-700">This section can contain general information related to the user, task, or page.</p>
                </div>

                {/* Data Cards */}
                <div className="grid grid-cols-1 gap-4">
                    {criterium.map((criteria) => (
                        <div key={criteria.id} className="bg-white p-6 rounded-lg shadow-md flex ">
                            <h3 className="text-xl font-semibold mb-2">{criteria.name}</h3>
                            <button onClick={} className="bg-blue-500 float-end"></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
