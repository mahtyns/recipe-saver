import { RECIPES_API } from "../utils/databases";
import { Recipe } from "../models/ingredients/recipes.models";

import { useQuery } from "@tanstack/react-query";

export const useGetRecipes = () => {

    const { isPending, error, data } = useQuery<Recipe[]>(
        {
            queryKey: ['recipes'],
            queryFn: async () => {
                const response = await fetch(RECIPES_API)

                if (!response.ok) {
                    throw new Error("Failed to fetch recipes");
                }

                return response.json();
            }
        }
    )
    return {
        error,
        isPending,
        data
    }
}