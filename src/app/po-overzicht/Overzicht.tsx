"use client";

import React, { useEffect, useState } from "react";
import { getFun } from "@/services/callApi";
import logOut from "@/app/login/LogOut";
import {useRouter} from "next/navigation";

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

export const Overzicht = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Add a loading state
    const router = useRouter();
    async function getStudents() {
        const res = await getFun('students');

        if (res.status === 401) {
            logOut();
            router.push('/login');
        }
        const body = await res.json();
        setStudents(body);
        setLoading(false);
    }

    useEffect(() => {
        getStudents(); // Fetch students when component mounts
    }, []); // Empty dependency array ensures it only runs once

    if (loading) {
        return <div>Loading...</div>;
    }

    if (students.length === 0) {
        return <div>No students found.</div>;
    }

    return (
        <>
            <div className="flex-row h-screen bg-gray-100">
                    <div className="text-5xl pb-5 font-semibold">{students.length > 0 ? students[0].classCode : "No class available"}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 drop-shadow-md">
                        {students.map((student, index) => (
                            <div
                                className="bg-white rounded-md shadow-lg cursor-pointer hover:bg-gray-100 transition"
                                key={index}
                                onClick={() => (location.href = `/student/${student.studentNumber}`)}
                            >
                                <div className="p-8 text-4xl font-medium mb-5 bg-primary rounded-t-md text-white">
                                    {student.name + " " + student.infix + " " + student.surname}
                                </div>
                                <div className="text-black p-8">
                                    <div className="font-semibold text-xl">Studentnummer</div>
                                    <div className="pb-2 text-xl">{student.studentNumber}</div>

                                    <div className="font-semibold">Geslacht</div>
                                    <div className="pb-2 text-xl">{student.gender}</div>

                                    <div className="font-semibold text-xl">Geboortedatum</div>
                                    <div className="pb-2 text-xl">{student.birthDate}</div>

                                    <div className="font-semibold text-xl">Klascode</div>
                                    <div className="pb-2 text-xl">{student.classCode}</div>

                                    <div className="font-semibold text-xl">Crebonummer</div>
                                    <div className="pb-2 text-xl">{student.creboNumber}</div>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
            </>
            );
            };