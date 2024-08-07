export interface PillProps{
    label: string;
    onDelete: (typeToRemove: string) => void
}

export interface PillListProps {
    collection: string[]
    handleDelete: (typeToRemove: string) => void
}