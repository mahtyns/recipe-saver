import { RecipeList } from "./components/recipes/recipe-list/RecipeList";
import { MainContainer } from "./layouts/components/MainContainer";

const mainClass = "recipes"

export default function Home() {
  return (
    <div>
      <main>
        <MainContainer mainClass={mainClass} content={<RecipeList />} />
      </main>
    </div>
  );
}
