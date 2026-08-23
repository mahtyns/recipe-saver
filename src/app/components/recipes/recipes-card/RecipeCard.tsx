import { RecipeWithLabels } from "@/app/models/recipes/recipes.models"
import { Button } from '../../shared/button/Button'
import { siteContent } from '@/app/lib/content/en/site-content'
import Title from "../../shared/titles/Title"
import { Label } from "../../shared/label/Label"

const mainClass = "recipe-card"

export const RecipeCard = (props: RecipeWithLabels) => {
    return (
        <div className="recipe-card">
            <img src={props.image_url} alt={props.name + " recipe image"} className="recipe-card__image" />
            <Title isH1={false} title={props.name} mainClass={mainClass} />
            <div className="recipe-card__labels">
                {props.labels.map(label => <Label label={label} key={label} mainClass={mainClass} />)}
            </div>
            <Button text={siteContent.recipes.button} variant="secondary" handleClick={() => null} />
        </div>
    )
}