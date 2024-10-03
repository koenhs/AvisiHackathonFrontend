import { NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const response = await fetch("http://localhost:8080/api/authenticate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        console.log(await response.json());

        // If validation is successful, log and return the valid data
        return NextResponse.json({ body: body }, { status: 200 });

    } catch (error) {
        // Handle any unexpected errors (like failed JSON parsing)
        console.error('Error processing request:', error);
        return NextResponse.json(
            { error: 'Invalid request format' },
            { status: 400 }
        );
    }
}