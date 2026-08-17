export const constants = {
    siteName: "Chives"
}

export interface LabelColor {
    text: string,
    background: string
}

export const labelColors: Record<string, LabelColor> = {
    Breakfast: { text: "#f9d3f8", background: "#1b4e39" },
    Vegetarian: { text: "#ddf2b9", background: "#3a9e99" },
    Vegan: { text: "#4ca98e", background: "#f8ddf7" },
    Healthy: { text: "#038072", background: "#ffd596" },
    Protein: { text: "#f49625", background: "#fddbb0" },
    Lunch: { text: "#afced0", background: "#252c47" },
    Dinner: { text: "#f06546", background: "#d8fabb" },
    Salad: { text: "#dff2bc", background: "#422f0f" },
    Sweet: { text: "#fec4c2", background: "#e44f2f" },
};

export const defaultLabelColor: LabelColor = {
    text: "#333333",
    background: "#EAEAEA",
};

export function getLabelColor(label: string): LabelColor {
    return labelColors[label] ?? defaultLabelColor;
}