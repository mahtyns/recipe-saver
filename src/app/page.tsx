import { Recipe } from "@/utils/models/recipes.models";

import { fetchCollectionData } from "@/services/get-data";

export default async function Home() {

  let recipes: Recipe[] = [];
  try {
    const fetchedData = await fetchCollectionData('recipes');
    recipes = fetchedData.map(doc => ({
      id: doc.id,
      title: doc.title,
      ingredients: doc.ingredients,
      steps: doc.steps

    })) as Recipe[]
  } catch (error) {
    console.error("Failed to load recipes:", error);
  }

  return (
    <div>
      <main>
        <h1> Recipes </h1>
        {recipes.map(recipe => 
          (<h2 key={recipe.id}>{recipe.title}</h2>)
        )}
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
