"use client"
import React, { useState } from 'react';
import { Ingredient } from '@/utils/models/recipes.models';
import { addRecipe } from '@/services/add-recipe'; // Adjust this path based on your file structure

function AddRecipeForm() {
    const [recipeName, setRecipeName] = useState<string>('');
    const [ingredients, setIngredients] = useState<Ingredient[]>([{ name: '', quantity: '' }]); // Initialize with one empty ingredient
    const [steps, setSteps] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = { ...newIngredients[index], [field]: value };
        setIngredients(newIngredients);
    };

    const handleStepsChange = (value: string) => {
        const newSteps = [...steps, value];
        setSteps(newSteps);
    }

    const addIngredientRow = () => {
        setIngredients([...ingredients, { name: '', quantity: '' }]);
    };

    const removeIngredientRow = (index: number) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        if (!recipeName || !steps || ingredients.some(ing => !ing.name || !ing.quantity)) {
            setError("Please fill in all recipe details and all ingredient name/quantity fields.");
            setLoading(false);
            return;
        }

        const cleanIngredients = ingredients.filter(ing => ing.name.trim() !== '' && ing.quantity.trim() !== '');

        try {
            const newDocId = await addRecipe({
                title: recipeName,
                ingredients: cleanIngredients, 
                steps: steps,
            });

            console.log("Recipe added successfully with ID:", newDocId);
            setSuccess(true);
            setRecipeName('');
            setIngredients([{ name: '', quantity: '' }]);
            setSteps([]);

        } catch (err: unknown) {
            console.error("Error submitting form: ", err);
            setError(err.message || "An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Recipe</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Recipe added successfully!</p>}

            <div>
                <label htmlFor="recipeName">Recipe Name:</label>
                <input
                    type="text"
                    id="recipeName"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    required
                    disabled={loading}
                />
            </div>

            <h3>Ingredients:</h3>
            {ingredients.map((ingredient, index) => (
                <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>
                    <input
                        type="text"
                        placeholder="Ingredient Name"
                        value={ingredient.name}
                        onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                        required
                        disabled={loading}
                        style={{ flex: 2 }}
                    />
                    <input
                        type="text"
                        placeholder="Quantity (e.g., 2 cups, 1 tbsp)"
                        value={ingredient.quantity}
                        onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                        required
                        disabled={loading}
                        style={{ flex: 1 }}
                    />
                    {ingredients.length > 1 && ( // Allow removal only if more than one ingredient exists
                        <button
                            type="button"
                            onClick={() => removeIngredientRow(index)}
                            disabled={loading}
                            style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}
            <button type="button" onClick={addIngredientRow} disabled={loading} style={{ marginBottom: '20px' }}>
                Add Another Ingredient
            </button>

            <div>
                <label htmlFor="instructions">Instructions:</label>
                <textarea
                    id="instructions"
                    onChange={(e) => handleStepsChange(e.target.value)}
                    required
                    rows={7}
                    disabled={loading}
                ></textarea>
            </div>

            <button type="submit" disabled={loading}>
                {loading ? 'Adding...' : 'Add Recipe'}
            </button>
        </form>
    );
}

export default AddRecipeForm;

