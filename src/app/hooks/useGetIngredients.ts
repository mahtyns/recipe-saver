import { Ingredient } from "../models/ingredients/ingredients.models";
import { useQuery } from "@tanstack/react-query";
import { INGREDIENTS_API } from "../utils/databases";

export function useGetIngredients() {
    const { isPending, error, data } = useQuery<Ingredient[]>(
        {
            queryKey: ['ingredients'],
            queryFn: async () => {
                const response = await fetch(INGREDIENTS_API);

                if (!response.ok) {
                    throw new Error("Failed to fetch ingredients");
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