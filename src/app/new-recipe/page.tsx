import { NewRecipeForm } from "../components/recipes/new-recipe-form/NewRecipeForm";
import { MainContainer } from "../layouts/components/MainContainer";
import { ADD_NEW_CLASS } from "../lib/content/classes.constants";



export default function AddNewRecipe() {
    return (
        <div>
            <main>
                <MainContainer mainClass={ADD_NEW_CLASS} content={<NewRecipeForm />} />
            </main>
        </div>
    );
}
