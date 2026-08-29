import { NextRequest, NextResponse } from "next/server";
import { getRepository } from "@/app/lib/data";
import { isCorrectURL, isNonEmptyString } from "@/app/lib/helpers/strings/string-checkers";
import { isIdCorrect, isIngredientCorrect, isTimeCorrect } from "@/app/lib/helpers/recipes/recipes-helpers";

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

export async function POST(request: NextRequest) {
    try {
        const repo = getRepository();
        const body = await request.json();

        if (!isNonEmptyString(body.name)) {
            return NextResponse.json({ message: "Recipe name is required" }, { status: 400 });
        }
        if (!isNonEmptyString(body.description)) {
            return NextResponse.json({ message: "Recipe description is required" }, { status: 400 });
        }
        if (!isNonEmptyString(body.steps)) {
            return NextResponse.json({ message: "Recipe steps are required" }, { status: 400 });
        }
        if (body.image_url) {
            if (!isNonEmptyString(body.image_url) || !isCorrectURL(body.image_url)) {
                return NextResponse.json({ message: "The image path is not correct" }, { status: 400 });
            }
        }
        if (!Array.isArray(body.ingredients) || !body.ingredients.length || !body.ingredients.every(isIngredientCorrect)) {
            return NextResponse.json({ message: "The ingredients are not correct" }, { status: 400 });
        }
        if (!Array.isArray(body.labels) || !body.labels.length || !body.labels.every(isIdCorrect)) {
            return NextResponse.json({ message: "The labels are not correct" }, { status: 400 });
        }
        if (!isTimeCorrect(body.cooking_time)) {
            return NextResponse.json({ message: "The cooking time is not correct" }, { status: 400 });
        }


    }
    catch (err) {
        console.error(err)

        return NextResponse.json(
            { message: "Could not create a recipe" },
            { status: 500 }
        )
    }
}