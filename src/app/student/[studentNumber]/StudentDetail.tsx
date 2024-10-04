"use client";

import { CriteriumDto } from "@/dtos/criteriumDto";
import { getFun } from "@/services/callApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// Import React Icons
import { FaUser, FaHome, FaIdCard, FaBook, FaCalendarAlt } from 'react-icons/fa';

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
    {
        name: "Maakt een planning",
        workProcesses: [
            { name: "Werkproces 4", status: "Expert" },
            { name: "Werkproces 5", status: "Expert" },
            { name: "Werkproces 6", status: "Development" },
        ],
    },
];

export default function StudentDetail() {
    // Function to calculate the progress of each core task
    const calculateProgress = (workProcesses: WorkProcess[]): number => {
        const total = workProcesses.length;
        const completed = workProcesses.filter(wp => wp.status === "Expert").length;
        return total > 0 ? (completed / total) * 100 : 0; // Return percentage of expert level completion
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Main content area */}
            <div className="flex-1 p-6">
                <a className="cursor-pointer text-blue-500" href="/po-overzicht">
                    Terug naar dashboard
                </a>
                <h1 className="text-4xl font-medium mb-6 text-center">Overzicht Bastiaan Hopman</h1>
                <div className="flex space-x-4">
                    {/* Student gegevens Section */}
                    <div className="mb-6 bg-white p-6 rounded-md shadow-lg flex-grow h-[440px]">
                        <h2 className="text-2xl font-semibold mb-4">Student gegevens</h2>
                        <div className="space-y-4">
                            {/* Wrapping each line in a div with background and shadow */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center">
                                <FaUser className="text-gray-500 mr-2" />
                                <div className="flex justify-between w-full">
                                    <p className="text-gray-700 font-medium">Naam:</p>
                                    <p className="text-gray-800">Bastiaan Hopman</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center">
                                <FaHome className="text-gray-500 mr-2" />
                                <div className="flex justify-between w-full">
                                    <p className="text-gray-700 font-medium">Adres:</p>
                                    <p className="text-gray-800">Reigerstraat 21, 6335XJ Nijmegen</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center">
                                <FaIdCard className="text-gray-500 mr-2" />
                                <div className="flex justify-between w-full">
                                    <p className="text-gray-700 font-medium">Studentnummer:</p>
                                    <p className="text-gray-800">123456</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center">
                                <FaBook className="text-gray-500 mr-2" />
                                <div className="flex justify-between w-full">
                                    <p className="text-gray-700 font-medium">Jaar:</p>
                                    <p className="text-gray-800">2</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center">
                                <FaCalendarAlt className="text-gray-500 mr-2" />
                                <div className="flex justify-between w-full">
                                    <p className="text-gray-700 font-medium">Periode:</p>
                                    <p className="text-gray-800">4</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Voortgang Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md w-2/5 h-[440px] flex-grow overflow-y-auto">
                        <h2 className="text-2xl font-semibold mb-4">Voortgang</h2>
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
                                                    style={{ width: `${progress}%` }}
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
                    </div>
                </div>
            </div>
        </div>
    );
}
