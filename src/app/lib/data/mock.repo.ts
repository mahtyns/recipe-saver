import type { DataRepository } from "@/app/lib/data/repository";
import type { Ingredient } from "@/app/models/ingredients/ingredients.models";
import type { Label } from "@/app/models/labels/labels.models";
import type { Recipe, RecipeWithLabels, RecipeWithIngredients } from "@/app/models/recipes/recipes.models";
import ingredients from "@/app/data/seed/ingredients.json";
import recipes from "@/app/data/seed/recipes.json";
import recipesIngredients from "@/app/data/seed/recipes-ingredients.json";
import labels from "@/app/data/seed/labels.json";
import recipesLabels from "@/app/data/seed/recipes-labels.json";

function getLabelsForRecipe(recipeId: number): string[] {
    return (recipesLabels as { recipe_id: number; label_id: number }[])
        .filter((rl) => rl.recipe_id === recipeId)
        .map((rl) => (labels as Label[]).find((l) => l.id === rl.label_id)!.label);
}

export const mockRepository: DataRepository = {
    async getIngredients(): Promise<Ingredient[]> {
        return ingredients as Ingredient[];
    },

    async getRecipes(): Promise<RecipeWithLabels[]> {
        return (recipes as Recipe[]).map((recipe) => ({
            ...recipe,
            labels: getLabelsForRecipe(recipe.id),
        }));
    },

    async getRecipeById(id: number): Promise<RecipeWithIngredients | null> {
        const recipe = (recipes as Recipe[]).find((r) => r.id === id);
        if (!recipe) return null;

        const links = (recipesIngredients as { recipe_id: number; ingredient_id: number; quantity: number; unit: string }[])
            .filter((ri) => ri.recipe_id === id);

        const recipeIngredients = links.map((link) => {
            const ingredient = (ingredients as Ingredient[]).find((i) => i.id === link.ingredient_id)!;
            return {
                quantity: link.quantity,
                unit: link.unit,
                ingredient,
            };
        });

        return {
            ...recipe,
            labels: getLabelsForRecipe(id),
            ingredients: recipeIngredients,
        };
    },

    async getLabels(): Promise<Label[]> {
        return labels as Label[];
    },
};