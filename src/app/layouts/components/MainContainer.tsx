"use client"

import { MainPanel } from "@/app/components/main-panel/MainPanel"
import { SidePanel } from "@/app/components/side-panel/SidePanel"
import { ReactNode } from "react";
interface Props {
    mainClass: string,
    content: ReactNode
}

export const MainContainer = (props: Props) => {
    return (
        <section className={props.mainClass}>
            <div className={`${props.mainClass}__wrapper main-container`}>
                <SidePanel mainClass={props.mainClass} />
                <MainPanel content={props.content} />
            </div>
        </section>
    )
}
