import {CriteriumDto} from "@/dtos/criteriumDto";
import {callApi} from "@/services/callApi";


export default function Page() {
    let criterium: CriteriumDto[] = [];
    const  getAllCriterium = () => {
        callApi <CriteriumDto[]>('StudentOverzicht/CriteriaAll').then((response) => {
          criterium = response
           return response;
        }).catch((error) => {
            console.error("Login error:", error);
        });
    }
    getAllCriterium();

    const exampleCriterium: CriteriumDto = {
        id: 1,
        name: "Code Quality",
        onvoldoende: "The code contains critical errors and doesn't meet the required standards.",
        orientatieVoldoende: "The code adheres to basic standards but requires improvements.",
        orientatieGoed: "The code meets industry standards and is well-documented.",
        developerVoldoende: "Code follows best practices but could be more efficient.",
        developerGoed: "Code is clean, well-optimized, and easy to maintain.",
        expertVoldoende: "The code shows advanced understanding but is not yet perfect.",
        expertGoed: "The code is exemplary, highly optimized, and very well-structured.",
    };


    criterium.push(exampleCriterium)

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white w-64 p-4">
                <h1 className="text-xl font-bold mb-4">User Name</h1>
                <p className="text-gray-400">User Details</p>
                {/* You can add more user details here */}
            </div>

            {/* Main content area */}
            <div className="flex-1 p-4 overflow-auto">
                <h2 className="text-2xl font-semibold mb-4">Data Table</h2>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Criterium</th>
                        <th className="border px-4 py-2">Kerntaak</th>
                        <th className="border px-4 py-2">Werkprocess</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Example Data Rows */}
                    {Array.from({length: 10}).map((_, index) => (
                        <tr key={index} className="border-b">
                            <td className="border px-4 py-2 text-center">{index + 1}</td>
                            <td className="border px-4 py-2 text-center">Item {index + 1}</td>
                            <td className="border px-4 py-2 text-center">Active</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}


