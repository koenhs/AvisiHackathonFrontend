"use client";

import {CriteriumDto} from "@/dtos/criteriumDto";
import {callApi} from "@/services/callApi";
import {useEffect, useState} from "react";

export default function Page() {
    const [criterium, setCriterium] = useState<CriteriumDto[]>([]);

    useEffect(() => {
        // Function to fetch data
        const getAllCriterium = async () => {
            try {
                const response = await callApi<CriteriumDto[]>("StudentOverzicht/CriteriaAll");
                const data = await response.json();
                setCriterium(data);  // Update the state with fetched data
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
                {/* You can add more user details here */}
            </div>

            {/* Main content area */}
            <div className="flex-1 p-4 overflow-auto">
                <h2 className="text-2xl font-semibold mb-4">Data Table</h2>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Criterium</th>
                        <th className="border px-4 py-2">Kerntaak</th>
                        <th className="border px-4 py-2">Werkprocess</th>
                    </tr>
                    </thead>
                    <tbody>
                    {criterium.map(criteria => (
                        <tr key={criteria.id} className="border-b">
                            <td className="border px-4 py-2 text-center">{criteria.id}</td>
                            <td className="border px-4 py-2 text-center">{criteria.name}</td>
                            <td className="border px-4 py-2 text-center">{criteria.id}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}


