// src/app/api/labels/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getRepository } from "@/app/lib/data";

export async function GET(request: NextRequest) {
    try {
        const repo = getRepository();
        const labels = await repo.getLabels();
        return NextResponse.json(labels);
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