import { NextRequest, NextResponse } from "next/server";
import { getRepository } from "@/app/lib/data";

export async function GET(request: NextRequest) {
    try {
        const repo = getRepository();
        const recipes = await repo.getRecipes();
        return NextResponse.json(recipes);
    } catch (error) {
        return NextResponse.json(
            {
                message: "Database error",
                error: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}