import { Recipe } from "@/utils/models/recipes.models";

import { fetchCollectionData } from "@/services/get-data";
import Title from "@/components/atoms/Title";

export default async function Home() {

  let recipes: Recipe[] = [];
  let data: Array<unknown> = [];
  try {
    const fetchedRecipes = await fetchCollectionData('recipes');
    const fetchedData = await fetchCollectionData('data-en');
    recipes = fetchedRecipes.map(doc => ({
      id: doc.id,
      title: doc.title,
      ingredients: doc.ingredients,
      steps: doc.steps

    })) as Recipe[]
    data = fetchedData;
  } catch (error) {
    console.error("Failed to load recipes:", error);
  }

  console.log(data[0]['recipes-page'])

  return (
    <div>
      <main>
        <Title isPageTitle={true} title={data[0]['main-page'][0].title} />
        {recipes.map(recipe => 
          (<h2 key={recipe.id}>{recipe.title}</h2>)
        )}
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
