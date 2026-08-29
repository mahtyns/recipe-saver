"use client"

import { useGetRecipes } from "@/app/hooks/useGetRecipes";
import { RECIPES_CLASS } from "@/app/lib/content/classes.constants"
import { ListContent } from "../../shared/list-content/ListContent";
import Title from "../../shared/titles/Title";
import { RecipeCard } from "@/app/components/recipes/recipes-card/RecipeCard"
import { RecipeWithLabels } from "@/app/models/recipes/recipes.models";
import { Button } from "../../shared/button/Button";

export const RecipeList = () => {
    const { isPending, error, data: recipes } = useGetRecipes()

    const renderItem = (recipe: RecipeWithLabels) => <RecipeCard key={recipe.id} {...recipe} />

    return (
        <div className={`${RECIPES_CLASS}__wrapper`}>
            <div className={`${RECIPES_CLASS}__topbar`}>
                <Title isH1={true} title="Browse your recipes" mainClass={RECIPES_CLASS} />
                <Button variant="primary" text="Add new" handleClick={() => window.location.assign('/new-recipe/')} />
            </div>
            <div className="">
                <ListContent isPending={isPending} error={error} data={recipes} mainClass={RECIPES_CLASS} renderItem={renderItem} />
            </div>
        </div>
    )
}
