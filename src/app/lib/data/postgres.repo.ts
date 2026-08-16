import { db } from "@/app/lib/db";
import type { DataRepository } from "@/app/lib/data/repository";
import type { Ingredient } from "@/app/models/ingredients/ingredients.models";
import type { Recipe } from "@/app/models/recipes/recipes.models";

export const postgresRepository: DataRepository = {
    async getIngredients(): Promise<Ingredient[]> {
        const result = await db.query("SELECT * FROM ingredients");
        return result.rows;
    },

    async getRecipes(): Promise<Recipe[]> {
        const result = await db.query("SELECT * FROM recipes");
        return result.rows;
    },
};