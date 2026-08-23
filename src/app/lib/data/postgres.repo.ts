import { db } from "@/app/lib/db";
import type { DataRepository } from "@/app/lib/data/repository";
import type { Ingredient } from "@/app/models/ingredients/ingredients.models";
import type { RecipeWithLabels, RecipeWithIngredients } from "@/app/models/recipes/recipes.models";
import type { LabelData, NewLabel } from "@/app/models/labels/labels.models"

export const postgresRepository: DataRepository = {
    async getIngredients(): Promise<Ingredient[]> {
        const result = await db.query("SELECT * FROM ingredients");
        return result.rows;
    },

    async getRecipes(): Promise<RecipeWithLabels[]> {
        const result = await db.query(
            `SELECT
         r.id,
         r.name,
         r.description,
         r.steps,
         r.cooking_time,
         r.image_url,
         COALESCE(array_agg(l.label) FILTER (WHERE l.label IS NOT NULL), '{}') AS labels
       FROM recipes r
       LEFT JOIN recipes_labels rl ON rl.recipe_id = r.id
       LEFT JOIN labels l ON l.id = rl.label_id
       GROUP BY r.id
       ORDER BY r.id`
        );
        return result.rows;
    },

    async getRecipeById(id: number): Promise<RecipeWithIngredients | null> {
        const recipeResult = await db.query(
            `SELECT
         r.id,
         r.name,
         r.description,
         r.steps,
         r.cooking_time,
         r.image_url,
         COALESCE(array_agg(DISTINCT l.label) FILTER (WHERE l.label IS NOT NULL), '{}') AS labels
       FROM recipes r
       LEFT JOIN recipes_labels rl ON rl.recipe_id = r.id
       LEFT JOIN labels l ON l.id = rl.label_id
       WHERE r.id = $1
       GROUP BY r.id`,
            [id]
        );
        const recipe = recipeResult.rows[0];

        if (!recipe) return null;

        const ingredientsResult = await db.query(
            `SELECT
         ri.quantity,
         ri.unit,
         i.id,
         i.name,
         i.category,
         i.protein,
         i.carbs,
         i.fats,
         i.calories
       FROM recipes_ingredients ri
       JOIN ingredients i ON i.id = ri.ingredient_id
       WHERE ri.recipe_id = $1`,
            [id]
        );

        const ingredients = ingredientsResult.rows.map((row) => ({
            quantity: row.quantity,
            unit: row.unit,
            ingredient: {
                id: row.id,
                name: row.name,
                category: row.category,
                protein: row.protein,
                carbs: row.carbs,
                fats: row.fats,
                calories: row.calories,
            },
        }));

        return { ...recipe, ingredients };
    },

    async getLabels(): Promise<LabelData[]> {
        const result = await db.query("SELECT * FROM labels ORDER BY label");
        return result.rows;
    },

    async addLabel(newLabel: NewLabel): Promise<LabelData | null> {

        const result = await db.query("INSERT INTO labels (label, created_by) VALUES ($1,$2) RETURNING *", [
            newLabel.label,
            newLabel.created_by
        ])
        return result.rows[0]
    }
};

