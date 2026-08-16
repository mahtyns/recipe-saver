'use client'

import Title from "../shared/titles/Title"
import { useGetRecipes } from "@/app/hooks/useGetRecipes"
import { RecipeCard } from "../recipes/recipes-card/RecipeCard"
import { IngredientList } from "../ingredients/ingredient-list/IngredientList";
interface Props {
    mainClass: string,
}

export const MainPanel = (props: Props) => {
    const { error, isPending, data: recipes } = useGetRecipes();

    return (
        <div className={`${props.mainClass} main-panel`}>
            <div className={`main-panel__title__wrapper`}>
                <Title isH1={true} title="Browse your recipes" mainClass={props.mainClass} />
            </div>
            <div className={`main-panel__content`}>
                {
                    isPending && <p>Loading your recipes</p>
                }
                {
                    error && <p>{error.message}</p>
                }
                {
                    recipes && (
                        recipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)
                    )
                }
            </div>
        </div>
    )
}
