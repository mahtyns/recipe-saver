import { MainPanel } from "@/app/components/main-panel/MainPanel"
import { SidePanel } from "@/app/components/side-panel/SidePanel"

interface Props {
    mainClass: string,
}

export const MainContainer = (props: Props) => {
    return (
        <section className={props.mainClass}>
            <div className={`${props.mainClass}__wrapper main-container`}>
                <SidePanel />
                <MainPanel />
            </div>
        </section>
    )
}
