"use client";

// Define the Student interface
import { useState, useEffect } from "react";
import callApi, {getFun} from "@/services/callApi";
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

// Component to display student details
const StudentDetail = ({ studentNumber }: { studentNumber: string }) => {
    const [student, setStudent] = useState<Student | null>(null); // Manage student stat
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    // Fetch student data on component mount or when studentNumber changes

    async function getStudent() {
        const url = `student/${studentNumber}`;
        const res = await getFun(url);

        if (res.status === 401) {
            logOut();
            router.push('/login');
        }
        const body = await res.json();
        setStudent(body);
        setLoading(false);
    }

    useEffect(() => {
        getStudent();
    }, [studentNumber]);



    if (!student) {
        return <div>Loading...</div>;
    }

    // Render student details
    return (
        <>
        <div className="text-black p-5" >
            <h1 className="text-5xl pb-5">{student.name + " " + student.infix + " " + student.surname}</h1>
            <div>Studentnummer: {student.studentNumber}</div>
            <div>Geslacht: {student.gender}</div>
            <div>Geboortedatum: {student.birthDate}</div>
            <div>Klascode: {student.classCode}</div>
            <div>Crebonummer: {student.creboNumber}</div>
        </div>
        </>
    );
};

export default StudentDetail;
