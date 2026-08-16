import type { Ingredient } from "@/app/models/ingredients/ingredients.models";
import type { Recipe } from "@/app/models/recipes/recipes.models";

export interface DataRepository {
    getIngredients(): Promise<Ingredient[]>;
    getRecipes(): Promise<Recipe[]>;
}