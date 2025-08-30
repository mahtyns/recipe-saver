"use client"

import Button from "../atoms/Button"
import { FormInput } from "../atoms/FormInput"

import { handleAddNewRecipe } from "@/hooks/recipes-hooks/HandleAddNewRecipe"

export const AddNewRecipe = () => {
    const mainClass = 'new-recipe'

    const {
        recipeName,
        handleNameChange,
        handleSubmit
    } = handleAddNewRecipe();

    return (
        <div className={mainClass}>
            <form className="new-recipe__container">
                <FormInput formLabel="Recipe name" inputId="recipe-name" mainClass={mainClass} inputType="text" inputPlaceholder={'Add new recipe name here'} inputValue={recipeName} inputOnchange={handleNameChange} />
                <Button buttonText='Add new recipe' buttonClass='primary' handleClick={() => handleSubmit} buttonType="submit" />
            </form>
        </div>
    )
}
