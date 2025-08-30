import { useState } from "react";

// import { Ingredient } from '@/utils/models/recipes.models';

export function handleAddNewRecipe() {
    const [recipeName, setRecipeName] = useState<string>('')

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRecipeName(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
    }

    return {
        recipeName,
        handleNameChange,
        handleSubmit
    }
}