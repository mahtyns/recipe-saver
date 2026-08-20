export interface TimeFilter {
    slug: string;
    label: string;
    predicate: (cookingTime: number) => boolean;
}

export const timeFilters: TimeFilter[] = [
    { slug: "under-10", label: "Under 10 min", predicate: (t) => t < 10 },
    { slug: "under-30", label: "Under 30 min", predicate: (t) => t < 30 },
    { slug: "under-60", label: "Under 1h", predicate: (t) => t < 60 },
    { slug: "over-60", label: "1h+", predicate: (t) => t >= 60 },
];