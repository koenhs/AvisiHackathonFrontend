import {KerntaakDto} from "@/dtos/kerntaakDto";
import {CriteriumDto} from "@/dtos/criteriumDto";


export default function Page() {

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
    const criterium: CriteriumDto[] = [];

    criterium.push(exampleCriterium)

    return (
        <div className="flex flex-row min-h-screen justify-center items-center">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Kerntaak
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Criterium
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Werkprocess
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Kerntaak
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {criterium.map(criterium => (
                        <tr key={criterium.id}
                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {criterium.name}
                            </th>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}


