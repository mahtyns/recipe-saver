import { useState } from "react";
import { addRecipe } from "@/services/add-recipe";

import { Ingredient } from '@/utils/models/recipes.models';

export function handleAddNewRecipe() {
    const [recipeName, setRecipeName] = useState<string>('')
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRecipeName(event.target.value)
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        console.log(recipeName)
        setLoading(true);
        setError(null);
        setSuccess(false);
        console.log(ingredients)

        if (!recipeName || ingredients.length === 0) {
            setError("Please fill in all recipe details and all ingredient name/quantity fields.");
            setLoading(false);
            return;
        }

        try {
            const newDocId = await addRecipe({
                title: recipeName,
                ingredients: ingredients
            });

            console.log("Recipe added successfully with ID:", newDocId);
            setSuccess(true);
            setRecipeName('');

        } catch (err: unknown) {
            console.error("Error submitting form: ", err);
        } finally {
            setLoading(false);
        }
    }

    return {
        recipeName,
        handleNameChange,
        handleSubmit,
        ingredients,
        setIngredients
    }
}