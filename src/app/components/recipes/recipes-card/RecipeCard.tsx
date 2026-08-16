import { Recipe } from "@/app/models/recipes/recipes.models"
import Title from "../../shared/titles/Title"

export const RecipeCard = (props: Recipe) => {
    return (
        <div>
            <Title isH1={false} title={props.name} mainClass="recipe-card" />
        </div>
    )
}
