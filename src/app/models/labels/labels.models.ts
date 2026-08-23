export interface LabelData {
    id: number,
    label: string,
    created_by: string
}

export interface NewLabel {
    label: string,
    created_by: 'custom'
}