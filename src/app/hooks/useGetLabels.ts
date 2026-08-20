// src/app/hooks/useGetLabels.ts  (adjust path to match useGetRecipes.ts location)
import { LABELS_API } from "../utils/databases";
import { Label } from "../models/labels/labels.models";

import { useQuery } from "@tanstack/react-query";

export const useGetLabels = () => {

    const { isPending, error, data } = useQuery<Label[]>(
        {
            queryKey: ['labels'],
            queryFn: async () => {
                const response = await fetch(LABELS_API)

                if (!response.ok) {
                    throw new Error("Failed to fetch labels");
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