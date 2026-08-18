import ProfilePicture from "../shared/profile-picture/ProfilePicture";

interface Props {
    mainClass: string,
}

export const SidePanel = (props: Props) => {
    return (
        <div className={`${props.mainClass} side-panel`}>
            <div className={`side-panel__topbar`} >
                <strong>Hi, Marty!</strong>
                What are we cooking today?
                <ProfilePicture />
            </div>
            <div className={`side-panel__browse`} >
                <div className={`side-panel__section-title`}>
                    Browse
                </div>
                <ul className={`side-panel__section-content`}>
                    <li>Your recipes</li>
                    <li>Ingredient list</li>
                    <li>Pantry</li>
                    <li>Add labels</li>
                </ul>
            </div>
            <div className={`side-panel__filters`} >
                <div className={`side-panel__section-title`}>
                    Filter
                </div>
                <ul className={`side-panel__section-content`}>
                    <li>Filter by type</li>
                </ul>
            </div>
            <div className={`side-panel__search`} >
                <div className={`side-panel__section-title`}>
                    Search by ingredient
                </div>
                <div className={`side-panel__section-content`}>

                </div>
            </div>
            <div className={`side-panel__footer`} >
                <strong>Chives</strong>
                Keep your recipes & pantry organised.
            </div>
        </div>
    )
}
