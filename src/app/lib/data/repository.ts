import type { Ingredient } from "@/app/models/ingredients/ingredients.models";
import type { RecipeWithLabels, RecipeWithIngredients } from "@/app/models/recipes/recipes.models";
import type { LabelData, NewLabel } from "@/app/models/labels/labels.models";

export interface DataRepository {
    getIngredients(): Promise<Ingredient[]>;
    getRecipes(): Promise<RecipeWithLabels[]>;
    getRecipeById(id: number): Promise<RecipeWithIngredients | null>;
    getLabels(): Promise<LabelData[]>;
    addLabel(newLabel: NewLabel): Promise<LabelData | null>
}