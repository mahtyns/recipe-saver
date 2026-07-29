export interface Ingredient {
    id: number,
    name: string,
    category: string,
    quantity: string,
    protein: number,
    carbs: number,
    fats: number,
    calories: number
}

export type NewIngredient = Omit<Ingredient, "id">
