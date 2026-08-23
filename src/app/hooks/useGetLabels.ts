import { LABELS_API } from "../utils/databases";
import { LabelData } from "../models/labels/labels.models";

import { useQuery } from "@tanstack/react-query";

export const useGetLabels = () => {

    const { isPending, error, data } = useQuery<LabelData[]>(
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