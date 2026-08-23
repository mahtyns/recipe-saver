import { IngredientList } from "../components/ingredients/ingredient-list/IngredientList";
import { MainContainer } from "../layouts/components/MainContainer";
import { INGREDIENTS_CLASS } from "@/app/lib/content/classes.constants"

export default function Ingredients() {
    return (
        <div>
            <main>
                <MainContainer mainClass={INGREDIENTS_CLASS} content={<IngredientList mainClass={INGREDIENTS_CLASS} />} />
            </main>
        </div>
    );
}
