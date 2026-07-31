export interface Recipe {
    id: number,
    name: string,
    description: string,
    steps: string,
    labels: string[],
    cooking_time: number
}