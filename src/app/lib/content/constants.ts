export const constants = {
    siteName: "Chives"
}

export interface LabelColor {
    text: string,
    background: string
}

export const labelColors: Record<string, LabelColor> = {
    Breakfast: { text: "#6C5160", background: "#FFDEF2" },
    Vegetarian: { text: "#F1F8E8", background: "#466D12" },
    Vegan: { text: "#327321", background: "#E0FDD8" },
    Healthy: { text: "#DBFFEB", background: "#144D3F" },
    Protein: { text: "#FFF5F5", background: "#7C2E04" },
    Lunch: { text: "#FBEBFF", background: "#495B6F" },
    Dinner: { text: "4E3C53", background: "#D5D0F5" },
    Salad: { text: "#FBEBFF", background: "#AC0C2C" },
    Sweet: { text: "#FFFFFF", background: "#B81E70" },
    Beans: { text: "#350B03", background: "#DC7704" },
};

export const defaultLabelColor: LabelColor = {
    text: "#FFFFFF",
    background: "#6B665B",
};

export function getLabelColor(label: string): LabelColor {
    return labelColors[label] ?? defaultLabelColor;
}