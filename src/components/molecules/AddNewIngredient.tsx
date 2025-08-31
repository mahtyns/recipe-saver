import React, { Dispatch, SetStateAction, useState } from 'react'

import { FormInput } from '../atoms/FormInput'
import { Ingredient } from '@/utils/models/recipes.models'

interface NewIngredientProps {
    mainClass: string,
    setAddNewIngredientFlag: Dispatch<SetStateAction<boolean>>,
    setIngredients: Dispatch<SetStateAction<Ingredient[]>>
}

export const AddNewIngredient = (props: NewIngredientProps) => {

    const [ingredientName, setIngredientName] = useState<string>('')
    const [ingredientQuantity, setIngredientQuantity] = useState<string>('')

    const handleSetNewIngredient = () => {
        props.setAddNewIngredientFlag(false)
        props.setIngredients(prev => [
            ...prev,
            { name: ingredientName, quantity: ingredientQuantity }
        ]);
    }

    const handleIngredientNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIngredientName(event.target.value)
    }

    const handleIngredientQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIngredientQuantity(event.target.value)
    }

    return (
        <>
            <FormInput formLabel="Ingredient name" inputId="ingredient-name" mainClass={props.mainClass} inputType="text" inputPlaceholder={'Ingredient name'} inputOnchange={handleIngredientNameChange} />
            <FormInput formLabel="Ingredient quantity" inputId="ingredient-quantity" mainClass={props.mainClass} inputType="text" inputPlaceholder={'Ingredient quantity'} inputOnchange={handleIngredientQuantityChange} />
            <button onClick={() => handleSetNewIngredient()}>Add ingredient</button>
        </>
    )
}
