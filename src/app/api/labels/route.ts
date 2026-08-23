// src/app/api/labels/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getRepository } from "@/app/lib/data";
import { NewLabel } from "@/app/models/labels/labels.models";
import { isNonEmptyString } from "@/app/lib/helpers/strings/string-checkers";

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

export async function POST(request: NextRequest) {
    try {
        const repo = getRepository();
        const body = await request.json();

        if (!isNonEmptyString(body.label)) {
            return NextResponse.json({ message: "Label is required" }, { status: 400 });
        }

        const newLabel: NewLabel = {
            label: body.label.trim(),
            created_by: "custom",
        };

        const result = await repo.addLabel(newLabel)

        return NextResponse.json(result, { status: 201 })

    }
    catch (err) {
        console.error(err)

        return NextResponse.json(
            { message: "Could not create a label" },
            { status: 500 }
        )
    }
}