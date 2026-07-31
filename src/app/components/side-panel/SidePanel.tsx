interface Props {
    mainClass: string,
}

export const SidePanel = (props: Props) => {
    return (
        <div className={`${props.mainClass} side-panel`}>SidePanel</div>
    )
}
