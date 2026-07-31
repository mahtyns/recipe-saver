import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET(request: NextRequest) {

    let query = "SELECT * FROM recipes";

    try {
        const result = await db.query(query);

        return NextResponse.json(result.rows);
    }
    catch (error) {
        return NextResponse.json(
            {
                message: "Database error",
                error: error instanceof Error ? error.message : String(error),
            },
            {
                status: 500
            }
        )
    }
}