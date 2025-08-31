"use client"

import Button from "../atoms/Button"
import { FormInput } from "../atoms/FormInput"
import { AddNewIngredient } from '../molecules/AddNewIngredient'
import { useState } from "react"

import { handleAddNewRecipe } from "@/hooks/recipes-hooks/HandleAddNewRecipe"

export const AddNewRecipe = () => {
    const mainClass = 'new-recipe'
    const [addNewIngredientFlag, setAddNewIngredientFlag] = useState<boolean>(false)

    const {
        recipeName,
        handleNameChange,
        handleSubmit,
        ingredients,
        setIngredients
    } = handleAddNewRecipe();

    return (
        <div className={mainClass}>
            <form className="new-recipe__container" onSubmit={handleSubmit}>
                <div className="new-recipe__row">
                    <FormInput formLabel="Recipe name" inputId="recipe-name" mainClass={mainClass} inputType="text" inputPlaceholder={'Add new recipe name here'} inputValue={recipeName} inputOnchange={handleNameChange} />
                </div>
                <div className="new-recipe__row new-recipe__row--list">
                    <ul>
                        {ingredients && ingredients.map((ingredient, id) => <li key={id}>
                            {ingredient.name} {ingredient.quantity}
                        </li>)}
                    </ul>
                </div>
                <div className="new-recipe__row">
                    <button onClick={() => setAddNewIngredientFlag(true)}>Add new ingredient</button>
                    {
                        addNewIngredientFlag && <AddNewIngredient mainClass={mainClass} setAddNewIngredientFlag={setAddNewIngredientFlag} setIngredients={setIngredients} />
                    }
                </div>
                <Button buttonText='Add new recipe' buttonClass='primary' buttonType="submit" />
            </form>
        </div>
    )
}
