"use client";

import {useState } from "react";

export default function CriteriaOverzicht() {
    const criteriaList = [
        {
            id: 1,
            name: 'Eisen wens user stories',
            shortDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
            details: {
                onvoldoende: 'Script voldoet niet aan alle punten voor een voldoende voor deze opdracht.',
                orienterenVoldoende: 'Script is functioneel, maar bevat enkele verbeterpunten.',
                orienterenGoed: 'Script is compleet en duidelijk gedocumenteerd.',
                developmentVoldoende: 'Alle 8 tabellen worden correct aangemaakt.',
                developmentGoed: 'Script is efficiënt en voldoet aan best practices.',
                expertVoldoende: 'Het script is geoptimaliseerd en kan in productie worden ingezet.',
                expertGoed: 'Script toont expertkennis en bevat innovatieve oplossingen.',
            },
        },
        {
            id: 2,
            name: 'Planning maken',
            shortDescription: 'H"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
            details: {
                onvoldoende: 'Script voldoet niet aan alle punten voor een voldoende voor deze opdracht.',
                orienterenVoldoende: 'Script vult de tabellen correct, met enkele fouten.',
                orienterenGoed: 'Script vult de tabellen volledig zonder fouten.',
                developmentVoldoende: 'Script is herhaalbaar zonder fout.',
                developmentGoed: 'Gegevens worden efficiënt verwerkt.',
                expertVoldoende: 'Gegevens zijn correct en geoptimaliseerd voor performantie.',
                expertGoed: 'Toont gevorderde optimalisatie en databasekennis.',
            },
        },
        // Add more criteria...
    ];

    // Track which row is open
    const [openId, setOpenId] = useState(null);

    // Toggle function to open/close accordion
    const toggleOpen = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-8">B1-K1-W1 Stemt opdracht af, plant werkzaamheden en bewaakt de voortgang</h1>

            {/* Loop through criteriaList to generate accordion items */}
            {criteriaList.map((criteria) => (
                <div key={criteria.id} className="mb-4 border rounded-lg shadow-sm">
                    {/* Accordion Header */}
                    <div
                        onClick={() => toggleOpen(criteria.id)}
                        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
                    >
                        <div>
                            <h2 className="text-lg font-medium">{criteria.name}</h2>
                            <p className="text-sm text-gray-500">{criteria.shortDescription}</p>
                        </div>
                        <div>
                            {openId === criteria.id ? '-' : '+'}
                        </div>
                    </div>

                    {/* Accordion Content */}
                    {openId === criteria.id && (
                        <div className="p-4 bg-white">
                            {/* Grading Levels Grid */}
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                {/* Onvoldoende */}
                                <div className="bg-red-100 p-4 rounded-lg">
                                    <h3 className="font-semibold">Onvoldoende</h3>
                                    <p>{criteria.details.onvoldoende}</p>
                                </div>
                                {/* Oriënteren Voldoende */}
                                <div className="bg-yellow-100 p-4 rounded-lg">
                                    <h3 className="font-semibold">Oriënteren Voldoende</h3>
                                    <p>{criteria.details.orienterenVoldoende}</p>
                                </div>
                                {/* Oriënteren Goed */}
                                <div className="bg-yellow-200 p-4 rounded-lg">
                                    <h3 className="font-semibold">Oriënteren Goed</h3>
                                    <p>{criteria.details.orienterenGoed}</p>
                                </div>
                                {/* Development Voldoende */}
                                <div className="bg-green-100 p-4 rounded-lg">
                                    <h3 className="font-semibold">Development Voldoende</h3>
                                    <p>{criteria.details.developmentVoldoende}</p>
                                </div>
                                {/* Development Goed */}
                                <div className="bg-green-200 p-4 rounded-lg">
                                    <h3 className="font-semibold">Development Goed</h3>
                                    <p>{criteria.details.developmentGoed}</p>
                                </div>
                                {/* Expert Voldoende */}
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <h3 className="font-semibold">Expert Voldoende</h3>
                                    <p>{criteria.details.expertVoldoende}</p>
                                </div>
                                {/* Expert Goed */}
                                <div className="bg-blue-200 p-4 rounded-lg">
                                    <h3 className="font-semibold">Expert Goed</h3>
                                    <p>{criteria.details.expertGoed}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
