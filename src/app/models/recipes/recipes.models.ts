import type { Ingredient } from "@/app/models/ingredients/ingredients.models";
import { LabelData } from "../labels/labels.models";

export interface Recipe {
    id: number,
    name: string,
    description: string,
    steps: string,
    cooking_time: number,
    image_url?: string
}

export interface RecipeWithLabels extends Recipe {
    labels: string[]
}

export interface RecipeIngredientDetail {
    ingredient: Ingredient,
    quantity: number,
    unit: string
}

export interface RecipeWithIngredients extends RecipeWithLabels {
    ingredients: RecipeIngredientDetail[]
}

export interface RecipeIngredient {
    ingredient_id: number,
    quantity: number,
    unit: string
}

type LabelID = number

export interface NewRecipe {
    name: string,
    description: string,
    steps: string,
    cooking_time: number,
    image_url?: string
    ingredients: RecipeIngredient[],
    labels: LabelID[]
}