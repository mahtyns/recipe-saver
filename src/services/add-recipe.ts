import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { RecipeDocument } from '@/utils/models/recipes.models';
import { db } from '@/lib/firebase/firebase';

interface NewRecipeData extends RecipeDocument {
    createdAt?: Timestamp; 
}

export async function addRecipe(recipeData: NewRecipeData): Promise<string> {
    try {
        const recipesCollectionRef = collection(db, 'recipes');
        const newRecipe: NewRecipeData = {
            ...recipeData,
            createdAt: Timestamp.now(), 
        };

        const docRef = await addDoc(recipesCollectionRef, newRecipe);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id; 
    } catch (error) {
        console.error("Error adding document: ", error);
        throw new Error(`Failed to add recipe: ${error || 'Unknown error'}`);
    }
}
