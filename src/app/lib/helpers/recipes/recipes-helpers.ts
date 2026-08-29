import { RecipeIngredient } from "@/app/models/recipes/recipes.models";
import { isNonEmptyString } from "../strings/string-checkers";

export const isIdCorrect = (value: unknown): boolean => {
    return typeof value === "number" && Number.isInteger(value) && value > 0;
}

export const isTimeCorrect = (value: unknown): boolean => {
    return typeof value === "number" && Number.isInteger(value) && value > 0;
}

const isQuantityCorrect = (value: unknown): boolean => {
    return typeof value === "number" && value > 0;
}

const isUnitCorrect = (value: unknown): boolean => {
    return isNonEmptyString(value)
}

export const isIngredientCorrect = (ingredient: RecipeIngredient): boolean => {
    return isIdCorrect(ingredient.ingredient_id) && isQuantityCorrect(ingredient.quantity) && isUnitCorrect(ingredient.unit)
}