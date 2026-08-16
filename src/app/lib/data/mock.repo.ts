import type { DataRepository } from "@/app/lib/data/repository";
import type { Ingredient } from "@/app/models/ingredients/ingredients.models";
import type { Recipe } from "@/app/models/recipes/recipes.models";
import ingredients from "@/app/data/seed/ingredients.json";
import recipes from "@/app/data/seed/recipes.json";

export const mockRepository: DataRepository = {
    async getIngredients(): Promise<Ingredient[]> {
        return ingredients as Ingredient[];
    },

    async getRecipes(): Promise<Recipe[]> {
        return recipes as Recipe[];
    },
};