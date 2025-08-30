import Title from "@/components/atoms/Title";
import { AddNewRecipe } from "@/components/systems/AddNewRecipe";

export default function Page() {
    return (
        <>
            <header>
                <Title isPageTitle={true} title="Add new recipe" />
                <Title isPageTitle={false} title="Set the name, ingredients and steps of your recipe" />
            </header>
            <AddNewRecipe />
        </>
    )
}