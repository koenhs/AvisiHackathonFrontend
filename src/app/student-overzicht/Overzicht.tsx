"use client";

import { CriteriumDto } from "@/dtos/criteriumDto";
import { callApi } from "@/services/callApi";
import { useEffect, useState } from "react";

export default function Overzicht() {
    const [criterium, setCriterium] = useState<CriteriumDto[]>([]);
    const [selectedPeriod, setSelectedPeriod] = useState<string>("Periode 4"); // Default selected period
    const periods: string[] = ["Periode 1", "Periode 2", "Periode 3", "Periode 4 (huidige periode)"]; // Example periods

    useEffect(() => {
        // Function to fetch data
        const getAllCriterium = async () => {
            try {
                // Provide both `void` for request data type, and `CriteriumDto[]` for response data type
                const data = await callApi<void, CriteriumDto[]>("StudentOverzicht/CriteriaAll");
                setCriterium(data); // Update the state with fetched data
            } catch (error) {
                console.error("Error fetching criterium data:", error);
            }
        };

        // Automatically call the function inside useEffect
        getAllCriterium();
    }, []);

    const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPeriod(event.target.value); // Update the selected period state
    };

    return (
        <div className="flex h-screen">
            {/* Main content area */}
            <div className="flex-1 p-4 overflow-auto">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <div className="flex">
                    {/* Period Overview Section */}
                    <div className="mb-6 mx-4 w-3/5">
                        <h2 className="text-xl font-semibold">Periode overzicht</h2>
                        <div className="items-center mb-4">
                            <select
                                value={selectedPeriod}
                                onChange={handlePeriodChange}
                                className="border rounded-md p-2 mr-2 w-full"
                            >
                                {periods.map((period) => (
                                    <option key={period} value={period}>
                                        {period}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Criteria Cards Container */}
                        <div className="h-64 overflow-y-auto"> {/* Set a fixed height and make it scrollable */}
                            <div className="grid grid-cols-1 gap-4 mb-6">
                                {criterium.map((criteria) => (
                                    <div key={criteria.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between">
                                        <h3 className="text-xl font-semibold mb-2">{criteria.name}</h3>
                                        <button className="bg-secondary px-5 py-2 text-white rounded-md">Details</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Overall Progress Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-2/5">
                        <h2 className="text-xl font-semibold mb-2">Algemene voortgang</h2>
                        <p className="text-gray-700">[Your content or progress details go here]</p>
                    </div>
                </div>

                {/* My Data Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Mijn gegevens</h2>
                    <p className="text-gray-700">[Your personal data or summary goes here]</p>
                </div>
            </div>
        </div>
    );
}
