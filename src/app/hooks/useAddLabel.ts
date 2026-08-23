import { NewLabel, LabelData } from "../models/labels/labels.models";
import { LABELS_API } from "../utils/databases";
import { useMutation } from "@tanstack/react-query";

export const useAddLabel = () => {
    const { mutate, isPending, error, data } = useMutation<LabelData, Error, NewLabel>({
        mutationFn: async (newLabel: NewLabel) => {
            const response = await fetch(LABELS_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newLabel),
            });

            if (!response.ok) {
                throw new Error("Failed to add label");
            }

            return response.json();
        },
    });

    return { mutate, isPending, error, data };
};