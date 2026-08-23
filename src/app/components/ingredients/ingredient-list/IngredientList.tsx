"use client"

import { useGetIngredients } from "@/app/hooks/useGetIngredients"
import { IngredientCard } from "../ingredient-card/IngredientCard";
import Title from "../../shared/titles/Title";
import { ingredientsPageContent } from "@/app/lib/content/en/ingredients-page"
import { ListContent } from "../../shared/list-content/ListContent";
import { Ingredient } from "@/app/models/ingredients/ingredients.models";

interface IngredientListProps {
    mainClass: string;
}


export const IngredientList = (props: IngredientListProps) => {
    const { error, isPending, data: ingredients } = useGetIngredients();

    const renderItem = (ingredient: Ingredient) => <IngredientCard key={ingredient.id} ingredient={ingredient} mainClass={props.mainClass} />


    return (
        <section className={`${props.mainClass}`}>
            <Title mainClass={props.mainClass} isH1={true} title={ingredientsPageContent.h1Title} />
            <div className={`${props.mainClass}__wrapper`}>
                <Title mainClass={props.mainClass} isH1={false} title={ingredientsPageContent.available} />
                <ListContent isPending={isPending} error={error} data={ingredients} renderItem={renderItem} mainClass={props.mainClass} />
            </div>
        </section>
    )
}
