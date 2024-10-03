
import StudentDetail from "@/app/student/[studentNumber]/StudentDetail";

export default function Page({params} : {params : {studentNumber: string}}) {

    const studenNumber = params.studentNumber;

    return (
        <StudentDetail studentNumber={studenNumber} />
    );
}
