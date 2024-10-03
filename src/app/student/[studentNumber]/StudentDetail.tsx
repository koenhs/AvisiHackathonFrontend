"use client";

// Define the Student interface
import { useState, useEffect } from "react";
import callApi from "@/services/callApi";

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

// Component to display student details
const StudentDetail = ({ studentNumber }: { studentNumber: string }) => {
    const [student, setStudent] = useState<Student | null>(null); // Manage student state
    const [error, setError] = useState<string | null>(null); // Manage error state

    // Fetch student data on component mount or when studentNumber changes
    useEffect(() => {
        const fetchUser = () => {
            const url = `student/${studentNumber}`;
            callApi(url, {string : studentNumber}, "GET")
                .then((response) => response.json())
                .then((data) => {
                    setStudent(data); // Update state with fetched student data
                })
                .catch((error) => {
                    console.log(error);
                    setError("Error fetching student data.");
                });
        };

        fetchUser();
    }, [studentNumber]);

    if (!student) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Render student details
    return (
        <div className="text-white">
            <h1>Student Detail</h1>
            <div>Studentnummer: {student.studentNumber}</div>
            <div>Naam: {student.name}</div>
            <div>Tussenvoegsel: {student.infix}</div>
            <div>Achternaam: {student.surname}</div>
            <div>Geslacht: {student.gender}</div>
            <div>Geboortedatum: {student.birthDate}</div>
            <div>Klascode: {student.classCode}</div>
            <div>Crebonummer: {student.creboNumber}</div>
        </div>
    );
};

export default StudentDetail;
