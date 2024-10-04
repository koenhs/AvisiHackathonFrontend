"use client";

import { CriteriumDto } from "@/dtos/criteriumDto";
import { callApi } from "@/services/callApi";
import { useEffect, useState } from "react";

// Define your types here
interface WorkProcess {
    name: string;
    status: "Nog niet voldaan" | "Orientatie" | "Development" | "Expert"; // Add more statuses if necessary
}

interface CoreTask {
    name: string;
    workProcesses: WorkProcess[];
}

// Example mock data structure
const coreTasksData: CoreTask[] = [
    {
        name: "Realiseert software",
        workProcesses: [
            { name: "Werkproces 1", status: "Expert" },
            { name: "Werkproces 2", status: "Development" },
            { name: "Werkproces 3", status: "Orientatie" },
        ],
    },
    {
        name: "Voert ICT-projecten uit",
        workProcesses: [
            { name: "Werkproces 4", status: "Expert" },
            { name: "Werkproces 5", status: "Expert" },
            { name: "Werkproces 6", status: "Development" },
        ],
    },
    // Add more core tasks as needed
];

export default function Overzicht() {
    const [criterium, setCriterium] = useState<CriteriumDto[]>([]);
    const [selectedPeriod, setSelectedPeriod] = useState<string>("Periode 4 (huidige periode)"); // Default selected period
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

    // Function to calculate the progress of each core task
    const calculateProgress = (workProcesses: WorkProcess[]): number => {
        const total = workProcesses.length;
        const completed = workProcesses.filter(wp => wp.status === "Expert").length;
        return total > 0 ? (completed / total) * 100 : 0; // Return percentage of expert level completion
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Main content area */}
            <div className="flex-1 p-6 overflow-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Studie Dashboard</h1>
                <div className="flex space-x-4">
                    {/* Period Overview Section */}
                    <div className="mb-6 w-3/5 bg-white p-4 rounded-md shadow-lg">
                        <h2 className="text-2xl font-semibold mb-2">Periode overzicht</h2>
                        <div className="mb-4">
                            <div className="flex items-center">
                            <select
                                value={selectedPeriod}
                                onChange={handlePeriodChange}
                                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {periods.map((period) => (
                                    <option key={period} value={period}>
                                        {period}
                                    </option>
                                ))}
                            </select>
                            <div className="ml-2 text-white text-3xl py-1 px-4 rounded-lg cursor-pointer">
                                <img src="/images/gear-settings-icon-2048x2041-ad5sr7k6.png" alt="icon"
                                    className="h-11 w-12"/>
                            </div>
                            </div>
                        </div>

                        {/* Criteria Cards Container */}
                        <div className="h-[310px] overflow-y-auto"> {/* Set a fixed height and make it scrollable */}
                            <div className="grid grid-cols-1 gap-4">
                                {criterium.map((criteria) => (
                                    <div key={criteria.id} className="bg-white px-4 py-4 rounded-lg shadow-md flex justify-between items-center">
                                        <h3 className="text-xl font-semibold">{criteria.name}</h3>
                                        <button className="bg-secondary px-2 py-1 text-white rounded-md">Bekijk</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Overall Progress Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md w-2/5 h-[449px] overflow-y-auto">
                        <h2 className="text-2xl font-semibold mb-4">Recente voortgang</h2>
                        <div className="space-y-4">
                            {coreTasksData.map((coreTask) => {
                                const progress = calculateProgress(coreTask.workProcesses);
                                return (
                                    <div key={coreTask.name}>
                                        <h3 className="font-medium">{coreTask.name}</h3>
                                        <div className="flex items-center mb-2">
                                            <div className="w-full bg-gray-200 rounded h-4">
                                                <div
                                                    className="bg-blue-600 h-4 rounded"
                                                    style={{width: `${progress}%`}}
                                                />
                                            </div>
                                            <span className="ml-2">{progress.toFixed(1)}%</span>
                                        </div>
                                        <ul className="list-disc pl-5">
                                            {coreTask.workProcesses.map((wp) => (
                                                <li key={wp.name} className="text-gray-700">
                                                    {wp.name} - <span
                                                    className={wp.status === "Expert" ? "text-green-500" : "text-yellow-500"}>{wp.status}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="mt-6 text-blue-500 cursor-pointer">Bekijk volledige voortgang</p>
                    </div>
                </div>

                <div className="flex space-x-4">
                    {/* My Data Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md w-3/5">
                        <h2 className="text-2xl font-semibold mb-2">Mijn gegevens</h2>
                        <p className="text-gray-700">Naam: Bastiaan Hopman</p>
                        <p className="text-gray-700">Adres: Reigerstraat 21, 6335XJ Nijmegen</p>
                        <p className="text-gray-700">Studentnummer: 123456</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md w-2/5">
                        <h2 className="text-2xl font-semibold mb-2">Mijn docenten</h2>
                        <p className="text-blue-500 cursor-pointer">Mijn PO</p>
                        <p className="text-blue-500 cursor-pointer">Mijn LBC</p>

                    </div>
                </div>
            </div>
        </div>
    );
}
