interface RecipeDocument {
    title: string,
    ingredients: string[],
    steps: string[]
}

export interface Recipe extends RecipeDocument {
    id: string; 
}