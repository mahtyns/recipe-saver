interface Ingredient {
    name: string,
    quantity: string
}

interface RecipeDocument {
    title: string,
    ingredients: Ingredient[],
    steps: string[]
}

export interface Recipe extends RecipeDocument {
    id: string; 
}