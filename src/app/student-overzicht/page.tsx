export default function Page() {
    return (
        <div className="flex flex-row min-h-screen justify-center items-center">
            <table className="table-auto" class={"basis-full"}>
                <thead>
                <tr>
                    <th>Werkprocess</th>
                    <th>Beschrijving</th>
                    <th>Behaalde cijfer</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                </tr>
                <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                </tr>
                <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                </tr>
                </tbody>
            </table>
        </div>

    );
}


