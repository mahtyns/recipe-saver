export interface Ingredient {
    name: string,
    quantity: string
}

export interface RecipeDocument {
    title: string,
    // ingredients: Ingredient[],
    // steps: string[]
}

export interface Recipe extends RecipeDocument {
    id: string;
}