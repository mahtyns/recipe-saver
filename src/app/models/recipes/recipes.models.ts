import type { Ingredient } from "@/app/models/ingredients/ingredients.models";

export interface Recipe {
    id: number,
    name: string,
    description: string,
    steps: string,
    cooking_time: number,
    image_url: string | null
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