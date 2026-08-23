'use client'

import { ReactNode } from "react";

interface MainPanelProps {
    content: ReactNode
}

export const MainPanel = (props: MainPanelProps) => {
    return (
        <div className={`main-panel`}>
            {props.content}
        </div>
    )
}
