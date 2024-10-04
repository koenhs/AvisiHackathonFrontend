"use client";

import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

export default function CriteriaOverzicht() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalInput, setModalInput] = useState("");
    const [selectedCriteria, setSelectedCriteria] = useState(null);

    const criteriaList = [
        {
            id: 1,
            name: 'Eisen wens user stories',
            shortDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
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
            shortDescription: 'H"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
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

    const [openId, setOpenId] = useState(null);

    const toggleOpen = (id) => {
        setOpenId(openId === id ? null : id);
    };

    // Function to open the modal and set the selected criteria
    const openModal = (criteriaName) => {
        setSelectedCriteria(criteriaName);
        setModalOpen(true);
    };

    // Function to close the modal and reset input
    const closeModal = () => {
        setModalOpen(false);
        setModalInput(""); // Reset input
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-2">B1-K1-W1 Stemt opdracht af, plant werkzaamheden en bewaakt de voortgang</h1>

            {criteriaList.map((criteria) => (
                <div key={criteria.id} className="mb-6 border border-gray-300 rounded-lg shadow-lg transition-all">
                    {/* Accordion Header */}
                    <div
                        onClick={() => toggleOpen(criteria.id)}
                        className={`flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-gray-50 ${openId === criteria.id ? 'border-b border-gray-200' : ''}`}
                    >
                        <div>
                            <h2 className="text-lg font-semibold text-gray-700">{criteria.name}</h2>
                            <p className="text-sm text-gray-500 mt-1">{criteria.shortDescription}</p>
                        </div>
                        <div>
                            {openId === criteria.id ? (
                                <button>
                                    <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="8" y1="12" x2="16" y2="12" />
                                    </svg>
                                </button>
                            ) : (
                                <button>
                                    <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="8" x2="12" y2="16" />
                                        <line x1="8" y1="12" x2="16" y2="12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Accordion Content */}
                    {openId === criteria.id && (
                        <div className="p-6 bg-gray-50 transition-all ease-in-out duration-500">
                            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                                {/* Onvoldoende */}
                                <div className=" min-h-3 relative bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-gray-700">Onvoldoende</h3>
                                    <p className="text-gray-600">{criteria.details.onvoldoende}</p>
                                    <button
                                        className="absolute top-2 right-2 bg-purple-800 text-white px-2 py-1 rounded"
                                        onClick={() => openModal('Onvoldoende')}
                                    >
                                        <FaRegEdit/>
                                    </button>
                                </div>
                                {/* Oriënteren Voldoende */}
                                <div className="min-h-3 relative bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-gray-700">Oriënteren Voldoende</h3>
                                    <p className="text-gray-600">{criteria.details.orienterenVoldoende}</p>
                                    <button
                                        className="absolute top-2 right-2 bg-purple-800 text-white px-2 py-1 rounded"
                                        onClick={() => openModal('Oriënteren Voldoende')}
                                    >
                                        <FaRegEdit/>
                                    </button>
                                </div>
                                {/* Oriënteren Goed */}
                                <div className=" min-h-3 relative bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-gray-700">Oriënteren Goed</h3>
                                    <p className="text-gray-600">{criteria.details.orienterenGoed}</p>
                                    <button
                                        className="absolute top-2 right-2 bg-purple-800 text-white px-2 py-1 rounded"
                                        onClick={() => openModal('Oriënteren Goed')}
                                    >
                                        <FaRegEdit/>
                                    </button>
                                </div>
                                {/* Development Voldoende */}
                                <div className=" min-h-3 relative bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-gray-700">Development Voldoende</h3>
                                    <p className="text-gray-600">{criteria.details.developmentVoldoende}</p>
                                    <button
                                        className="absolute top-2 right-2 bg-purple-800 text-white px-2 py-1 rounded"
                                        onClick={() => openModal('Development Voldoende')}>
                                        <FaRegEdit/>
                                    </button>
                                </div>
                                {/* Development Goed */}
                                <div
                                    className=" min-h-3 relative bg-green-400 p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                                    <h3 className="font-semibold">Development Goed</h3>
                                    <p className="text-gray-600">{criteria.details.developmentGoed}</p>
                                    <button
                                        className="absolute top-2 right-2 bg-purple-800 text-white px-2 py-1 rounded"
                                        onClick={() => openModal('Development Goed')}
                                    >
                                        <FaRegEdit/>
                                    </button>
                                </div>
                                {/* Expert Voldoende */}
                                <div className=" min-h-3 relative bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-gray-700">Expert Voldoende</h3>
                                    <p className="text-gray-600">{criteria.details.expertVoldoende}</p>
                                    <button
                                        className="absolute top-2 right-2 bg-purple-800 text-white px-2 py-1 rounded"
                                        onClick={() => openModal('Expert voldoende')}
                                    >
                                        <FaRegEdit/>
                                    </button>
                                </div>
                                {/* Expert Goed */}
                                <div className=" min-h-8 relative bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-gray-700">Expert Goed</h3>
                                    <p className="text-gray-600">{criteria.details.expertGoed}</p>
                                    <button
                                        className="absolute top-2 right-2 bg-purple-800 text-white px-2 py-1 rounded"
                                        onClick={() => openModal('Expert Goed')}
                                    >
                                        <FaRegEdit/>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center"><FaCircle className="text-green-500 m-2"/> Ik ben nu hier
                                </div>
                                <div className="flex items-center"><FaCircle className="text-orange-500 m-2"/> Hier moet ik nu zijn
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Verantwoord {selectedCriteria}</h2>
                        <textarea
                            value={modalInput}
                            onChange={(e) => setModalInput(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Verantwoording invoeren"
                        />
                        <div className="mt-4 flex flex-s">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                                onClick={closeModal}
                            >
                                Afsluiten
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => {
                                    // Save changes (you can expand this to handle saving logic)
                                    console.log('Saved:', modalInput);
                                    closeModal();
                                }}
                            >
                                Opslaan
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}