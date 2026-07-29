"use client"

import { useGetIngredients } from "@/app/hooks/useGetIngredients"
import { IngredientCard } from "../ingredient-card/IngredientCard";

interface IngredientListProps {
    mainClass: string;
}


export const IngredientList = (props: IngredientListProps) => {
    const { error, isPending, data: ingredients } = useGetIngredients();


    return (
        <section className={`${props.mainClass}`}>
            <div className={`${props.mainClass}__wrapper`}>
                <h2>Available ingredients:</h2>
                {
                    isPending && <p>Loading</p>
                }
                {
                    error && <p>{error.message}</p>
                }
                {
                    ingredients && ingredients.map(item => <IngredientCard key={item.id + '-' + item.name} ingredient={item} mainClass={props.mainClass} />)
                }
            </div>
        </section>
    )
}
