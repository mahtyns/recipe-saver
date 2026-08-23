import { Ingredient } from "@/app/models/ingredients/ingredients.models"

interface IngredientCardProps {
    mainClass: string,
    ingredient: Ingredient
}

export const IngredientCard = (props: IngredientCardProps) => {
    return (
        <div className={`${props.mainClass}__card`}>
            <div>{props.ingredient.category}</div>
            <h3>{props.ingredient.name}</h3>
            <div>
                <p>Nutritional value (100g):</p>
                <ul>
                    <li>{props.ingredient.calories} kcal</li>
                    <li><strong>Protein:</strong>{props.ingredient.protein}</li>
                    <li><strong>Carbohydrates:</strong>{props.ingredient.carbs}</li>
                    <li><strong>Fats:</strong>{props.ingredient.fats}</li>
                </ul>
            </div>
        </div>
    )
}
