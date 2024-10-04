"use client";

import React, { useEffect, useState } from "react";
import { getFun } from "@/services/callApi";
import logOut from "@/app/login/LogOut";
import { useRouter } from "next/navigation";

interface Student {
    studentNumber: string;
    name: string;
    infix: string;
    surname: string;
    gender: string;
    birthDate: string;
    classCode: string;
    creboNumber: string;
}

interface User {
    name: string;
    email: string;
}

export const Overzicht = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState<'PO' | 'LBC'>('PO');
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    async function getStudents() {
        const res = await getFun("students");

        if (res.status === 401) {
            logOut();
            router.push("/login");
            return; // Exit if unauthorized
        }

        const body = await res.json();
        setStudents(body);
        setLoading(false);
    }

    async function getUserData() {
        // Mocked user data
        const userData: User = {
            name: "Jan Jansen",
            email: "jan.jansen@example.com",
        };
        setUser(userData);
    }

    useEffect(() => {
        getStudents();
        getUserData();
    }, []);

    // Sample LBC student data
    const lbcStudents: Student[] = [
        {
            studentNumber: "1001",
            name: "John",
            infix: "van",
            surname: "Doe",
            gender: "M",
            birthDate: "2003-05-20",
            classCode: "LBC1",
            creboNumber: "12345",
        },
        {
            studentNumber: "1002",
            name: "Jane",
            infix: "de",
            surname: "Smith",
            gender: "V",
            birthDate: "2004-06-15",
            classCode: "LBC1",
            creboNumber: "12346",
        },
        {
            studentNumber: "1003",
            name: "Alex",
            infix: "van",
            surname: "Miller",
            gender: "V",
            birthDate: "2003-08-30",
            classCode: "LBC1",
            creboNumber: "12347",
        },
    ];

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (students.length === 0 && activeTab === 'PO') {
        return <div className="text-center mt-10">No students found.</div>;
    }

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Docenten Dashboard</h1>

            <div className="flex flex-row space-x-6 w-full max-w-6xl min-h-[500px]">
                {/* Openstaande Beoordelingen Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-2/6 h-full">
                    <h2 className="text-2xl font-semibold mb-4">Openstaande Beoordelingen</h2>
                    <p className="text-gray-800">Je hebt op dit moment geen openstaande beoordelingen.</p>
                </div>

                {/* Student Table Section */}
                <div className="bg-white p-6 rounded-md drop-shadow-md">
                    <div className="relative flex space-x-4 mb-4">
                        <button
                            onClick={() => setActiveTab('PO')}
                            className={`w-[200px] relative px-6 py-3 rounded-lg font-semibold transition-colors text-gray-700 bg-white border-2 border-gray-300 ${
                                activeTab === 'PO' ? 'text-blue-600 border-secondary' : 'hover:bg-gray-100'
                            }`}
                        >
                            PO
                            {activeTab === 'PO' && (
                                <span className="absolute left-0 right-0 bottom-0 h-1 bg-secondary transition-all duration-300 ease-in-out"></span>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('LBC')}
                            className={`w-[200px] relative px-6 py-3 rounded-lg font-semibold transition-colors text-gray-700 bg-white border-2 border-gray-300 ${
                                activeTab === 'LBC' ? 'text-blue-600 border-secondary' : 'hover:bg-gray-100'
                            }`}
                        >
                            LBC
                            {activeTab === 'LBC' && (
                                <span className="absolute left-0 right-0 bottom-0 h-1 bg-secondary transition-all duration-300 ease-in-out"></span>
                            )}
                        </button>
                    </div>

                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                        <tr className="bg-gray-200 text-gray-700 text-left text-sm uppercase">
                            <th className="py-3 px-4 border-b">Naam</th>
                            <th className="py-3 px-4 border-b">Studentnummer</th>
                            <th className="py-3 px-4 border-b">Geslacht</th>
                            <th className="py-3 px-4 border-b">Geboortedatum</th>
                            <th className="py-3 px-4 border-b">Klascode</th>
                            <th className="py-3 px-4 border-b">Crebonummer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {(activeTab === 'PO' ? students : lbcStudents).map((student, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-gray-100 transition-colors cursor-pointer ${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                                onClick={() => (location.href = `/student/${student.studentNumber}`)}
                            >
                                <td className="py-4 px-4 border-b text-sm text-gray-800">
                                    {student.name} {student.infix} {student.surname}
                                </td>
                                <td className="py-4 px-4 border-b text-sm text-gray-800">
                                    {student.studentNumber}
                                </td>
                                <td className="py-4 px-4 border-b text-sm text-gray-800">
                                    {student.gender}
                                </td>
                                <td className="py-4 px-4 border-b text-sm text-gray-800">
                                    {student.birthDate}
                                </td>
                                <td className="py-4 px-4 border-b text-sm text-gray-800">
                                    {student.classCode}
                                </td>
                                <td className="py-4 px-4 border-b text-sm text-gray-800">
                                    {student.creboNumber}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mijn Gegevens Section moved to the bottom */}
            {user && (
                <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-6xl mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Mijn Gegevens</h2>
                    <div className="flex flex-col space-y-2">
                        <p className="text-gray-800">
                            <strong>Naam:</strong> {user.name}
                        </p>
                        <p className="text-gray-800">
                            <strong>Email:</strong> {user.email}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
