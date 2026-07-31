'use client'

interface Props {
    mainClass: string,
}

export const MainPanel = (props: Props) => {
    return (
        <div className={`${props.mainClass} main-panel`}>MainPanel</div>
    )
}
