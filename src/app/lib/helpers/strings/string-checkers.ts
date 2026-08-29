export function isNonEmptyString(value: unknown): value is string {
    return typeof value === "string" && value.trim().length > 0;
}

export function isCorrectURL(value: string): boolean {
    return value.startsWith('https://')
}