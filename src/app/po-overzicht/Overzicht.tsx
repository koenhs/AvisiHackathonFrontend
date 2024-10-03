"use client";

import React, { useEffect, useState } from "react";

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

export const Overzicht: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/students")
            .then((response) => response.json())
            .then((data) => setStudents(data))
            .catch((error) => console.error("Error fetching student data:", error));
    }, []);

    return (
        <>
            <div className="flex">
                <div className="h-screen  bg-white p-5  w-screen">
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
            </div>
        </>
    );
};
