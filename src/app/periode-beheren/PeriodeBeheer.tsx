"use client";

import React, { useState } from "react";

interface Kernproces {
    id: number;
    name: string;
    description: string;
    justifications?: {
        text: string;
        level: string; // Store the selected level for each justification
    }[];
}

export default function PeriodeBeheer() {
    const [kernprocessen, setKernprocessen] = useState<Kernproces[]>([
        { id: 1, name: "Werkproces 1", description: "Beschrijving van werkproces 1" },
        { id: 2, name: "Werkproces 2", description: "Beschrijving van werkproces 2" },
        { id: 3, name: "Werkproces 3", description: "Beschrijving van werkproces 3" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentKernproces, setCurrentKernproces] = useState<Kernproces | null>(null);

    // State for justification inputs and their levels
    const [justification1, setJustification1] = useState<string>("");
    const [justification1Level, setJustification1Level] = useState<string>("orientatie");
    const [justification2, setJustification2] = useState<string>("");
    const [justification2Level, setJustification2Level] = useState<string>("orientatie");
    const [justification3, setJustification3] = useState<string>("");
    const [justification3Level, setJustification3Level] = useState<string>("orientatie");

    // New state to track expanded kernproces and criteria
    const [expandedProcessId, setExpandedProcessId] = useState<number | null>(null);
    const [expandedCriteria, setExpandedCriteria] = useState<number | null>(null); // Track expanded criteria

    const openModal = (kernproces: Kernproces) => {
        setCurrentKernproces(kernproces);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentKernproces(null);
        setJustification1("");
        setJustification1Level("orientatie");
        setJustification2("");
        setJustification2Level("orientatie");
        setJustification3("");
        setJustification3Level("orientatie");
    };

    const saveJustifications = () => {
        if (currentKernproces) {
            const newJustifications = [
                { text: justification1, level: justification1Level },
                { text: justification2, level: justification2Level },
                { text: justification3, level: justification3Level },
            ].filter(j => j.text); // Filter out empty justifications

            setKernprocessen((prevKernprocessen) =>
                prevKernprocessen.map((kp) =>
                    kp.id === currentKernproces.id ? { ...kp, justifications: newJustifications } : kp
                )
            );
            closeModal();
        }
    };

    // Function to toggle the expanded state of a kernproces
    const toggleExpand = (id: number) => {
        setExpandedProcessId((prevId) => (prevId === id ? null : id));
    };

    // Function to toggle the expanded state of criteria
    const toggleCriteria = (id: number) => {
        setExpandedCriteria((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="flex h-screen bg-gray-100 p-6">
            <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-semibold mb-6 text-center">Periode Beheren</h1>

                {/* Kernprocessen Table */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Mijn werkprocessen</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Naam</th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beschrijving</th>
                                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acties</th>
                            </tr>
                            </thead>
                            <tbody>
                            {kernprocessen.map((kernproces) => (
                                <React.Fragment key={kernproces.id}>
                                    <tr className="hover:bg-gray-100 cursor-pointer" onClick={() => toggleExpand(kernproces.id)}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 flex items-center">
                                            {/* Arrow indicator */}
                                            <span className="mr-2">
                                                {expandedProcessId === kernproces.id ? "▼" : "▶"}
                                            </span>
                                            {kernproces.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">{kernproces.description}</td>
                                        <td className="px-6 py-4 text-right space-x-2">
                                            <button
                                                className="text-blue-600 hover:text-blue-900"
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent triggering the row click
                                                    openModal(kernproces);
                                                }}
                                            >
                                                Verantwoorden
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Expanded Content */}
                                    {expandedProcessId === kernproces.id && (
                                        <tr>
                                            <td colSpan={3} className="px-6 py-2">
                                                <div className="bg-gray-50 p-4 rounded-md">
                                                    {/* List of additional information for this process */}
                                                    <p className="flex items-center cursor-pointer" onClick={() => toggleCriteria(1)}>
                                                        {/* Arrow indicator for criteria */}
                                                        <span className="mr-2">
                                                            {expandedCriteria === 1 ? "▼" : "▶"}
                                                        </span>
                                                        <span className="font-bold">Criteria 1 </span>
                                                        <span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
                                                    </p>
                                                    {expandedCriteria === 1 && (
                                                        <div className="ml-6">
                                                            <p><span className="text-red-400">Onvoldoende </span>
                                                            <span className="text-red-400">
                                                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </span>
                                                            </p>
                                                            <p>
                                                                <span
                                                                    className="text-gray-500">Voldoende orientatie </span>
                                                                <span className="text-gray-500">
                                                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </span>
                                                            </p>
                                                            <p><span className="text-gray-500">Goed orientatie </span>
                                                                <span className="text-gray-500">
                                                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </span>
                                                            </p>
                                                            <p><span
                                                                className="text-gray-500">Voldoende developer </span>
                                                                <span className="text-gray-500">
                                                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </span></p>
                                                            <p><span className="text-gray-500">Goed developer </span>
                                                                <span className="text-gray-500">
                                                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </span></p>
                                                            <p><span className="text-gray-500">Voldoende expert </span>
                                                                <span className="text-gray-500">
                                                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </span>
                                                            </p>
                                                            <p><span className="text-gray-600">Goed expert </span>
                                                                <span className="text-gray-600">
                                                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                            </span></p>

                                                        </div>
                                                    )}
                                                    <p className="flex items-center cursor-pointer"
                                                       onClick={() => toggleCriteria(2)}>
                                                        {/* Arrow indicator for criteria */}
                                                        <span className="mr-2">
                                                            {expandedCriteria === 2 ? "▼" : "▶"}
                                                        </span>
                                                        <span className="font-bold">Criteria 2 - </span>
                                                        <span>BExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>
                                                    </p>
                                                    {expandedCriteria === 2 && (
                                                        <div className="ml-6">
                                                            <p>Details for Criteria 2...</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex justify-between mt-6">
                    <button
                        className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                        onClick={() => alert("(functionaliteit in ontwikkeling)")}
                    >
                        Werkprocessen toevoegen
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-2xl font-semibold mb-4">Voer verantwoordingen in</h2>

                        {/* Justification 1 */}
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Verantwoording 1:</label>

                            {/* Level selection for Justification 1 */}
                            <div className="mt-2">
                                <label className="block text-sm font-medium text-gray-700">Niveau:</label>
                                <div className="flex space-x-4 mb-2">
                                    <label>
                                        <input
                                            type="radio"
                                            value="orientatie"
                                            checked={justification1Level === "orientatie"}
                                            onChange={() => setJustification1Level("orientatie")}
                                        />
                                        Orientatie
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="developer"
                                            checked={justification1Level === "developer"}
                                            onChange={() => setJustification1Level("developer")}
                                        />
                                        Developer
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="expert"
                                            checked={justification1Level === "expert"}
                                            onChange={() => setJustification1Level("expert")}
                                        />
                                        Expert
                                    </label>
                                </div>
                            </div>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={2}
                                value={justification1}
                                onChange={(e) => setJustification1(e.target.value)}
                                placeholder="Schrijf verantwoording 1..."
                            ></textarea>
                        </div>

                        {/* Justification 2 */}
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Verantwoording 2:</label>

                            {/* Level selection for Justification 2 */}
                            <div className="mt-2">
                                <label className="block text-sm font-medium text-gray-700">Niveau:</label>
                                <div className="flex space-x-4 mb-2">
                                    <label>
                                        <input
                                            type="radio"
                                            value="orientatie"
                                            checked={justification2Level === "orientatie"}
                                            onChange={() => setJustification2Level("orientatie")}
                                        />
                                        Orientatie
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="developer"
                                            checked={justification2Level === "developer"}
                                            onChange={() => setJustification2Level("developer")}
                                        />
                                        Developer
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="expert"
                                            checked={justification2Level === "expert"}
                                            onChange={() => setJustification2Level("expert")}
                                        />
                                        Expert
                                    </label>
                                </div>
                            </div>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={2}
                                value={justification2}
                                onChange={(e) => setJustification2(e.target.value)}
                                placeholder="Schrijf verantwoording 2..."
                            ></textarea>
                        </div>

                        {/* Justification 3 */}
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Verantwoording 3:</label>

                            {/* Level selection for Justification 3 */}
                            <div className="mt-2">
                                <label className="block text-sm font-medium text-gray-700">Niveau:</label>
                                <div className="flex space-x-4 mb-2">
                                    <label>
                                        <input
                                            type="radio"
                                            value="orientatie"
                                            checked={justification3Level === "orientatie"}
                                            onChange={() => setJustification3Level("orientatie")}
                                        />
                                        Orientatie
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="developer"
                                            checked={justification3Level === "developer"}
                                            onChange={() => setJustification3Level("developer")}
                                        />
                                        Developer
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="expert"
                                            checked={justification3Level === "expert"}
                                            onChange={() => setJustification3Level("expert")}
                                        />
                                        Expert
                                    </label>
                                </div>
                            </div>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={2}
                                value={justification3}
                                onChange={(e) => setJustification3(e.target.value)}
                                placeholder="Schrijf verantwoording 3..."
                            ></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                                onClick={saveJustifications}
                            >
                                Opslaan
                            </button>
                            <button
                                className="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
                                onClick={closeModal}
                            >
                                Annuleren
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
