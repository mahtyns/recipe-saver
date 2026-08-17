import { getLabelColor } from '@/app/lib/content/constants';

interface LabelProps {
    mainClass: string,
    label: string
}

export const Label = (props: LabelProps) => {

    const { text, background } = getLabelColor(props.label)

    return (
        <span
            className={`${props.mainClass}__label`}
            style={{ color: text, backgroundColor: background }}>
            {props.label}
        </span>
    )
}
