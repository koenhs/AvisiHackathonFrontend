"use client";

import { CriteriumDto } from "@/dtos/criteriumDto";
import { callApi } from "@/services/callApi";
import { useEffect, useState } from "react";

export default function CriteriaOverzicht() {
    const [criterium, setCriterium] = useState<CriteriumDto[]>([]);
    useEffect(() => {
        // Function to fetch data
        const getAllCriterium = async () => {
            try {
                const response = await callApi<CriteriumDto[]>("StudentOverzicht/Criteria/1");
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
        <div className="container h-screen w-screen bg-white p-5 items-center">
             <h2>Workprocess K1-W1</h2>
            <div className="flex-row">
                <div
                    className="block mb-4 w-full h-[150px] p-6 flex  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700">
                    <div className="w-1/7 h-full bg-amber-500 mr-2">Voorbeeld tekst</div>
                    <div className="w-1/7 h-full bg-amber-500 mr-2">Voorbeeld tekst</div>
                    <div className="w-1/7 h-full bg-amber-500 mr-2">Voorbeeld tekst</div>
                    <div className="w-1/7 h-full bg-amber-500 mr-2">Voorbeeld tekst</div>
                    <div className="w-1/7 h-full bg-amber-500 mr-2">Voorbeeld tekst</div>
                </div>
                <div
                    className="block mb-4 w-full h-[150px] p-6 flex  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700">
                    <div className="flex items-center justify-between">etw</div>
                    <div className="flex items-center justify-between">etw</div>
                </div>
            </div>

        </div>
    );
}
