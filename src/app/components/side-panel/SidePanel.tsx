import { useState, useMemo } from "react";
import ProfilePicture from "../shared/profile-picture/ProfilePicture";
import { siteContent } from "@/app/lib/content/en/site-content";
import CheckboxFilter from "@/app/components/shared/checkbox-filter/CheckboxFilter";
import { constants } from "@/app/lib/content/constants"
import { useGetLabels } from "@/app/hooks/useGetLabels";
import type { FilterOption } from "@/app/models/filters/filters.models"
import { timeFilters } from "@/app/lib/helpers/filters/time-filters";
import { Input } from "../shared/input/Input";

interface Props {
    mainClass: string,
}

export const SidePanel = (props: Props) => {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

    const { data: labels } = useGetLabels();

    const filterOptions = siteContent.sidePanel.filterOptions;

    const typeOptions: FilterOption[] = useMemo(() => {
        return (labels ?? []).map(l => ({ slug: l.label, label: l.label }));
    }, [labels]);

    const toggleType = (slug: string) =>
        setSelectedTypes(prev => prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]);

    const toggleTime = (slug: string) =>
        setSelectedTimes(prev => prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]);

    return (
        <div className={`${props.mainClass} side-panel`}>
            <div className={`side-panel__topbar`} >
                <strong>{siteContent.sidePanel.topbar}</strong>
                {siteContent.sidePanel.topbarExtra}
                <ProfilePicture />
            </div>
            <div className={`side-panel__browse`} >
                <div className={`side-panel__section-title`}>
                    {siteContent.sidePanel.sectionNames[0].name}
                </div>
                <ul className={`side-panel__section-content`}>
                    {siteContent.sidePanel.links.map(link => <li key={link.linkName}><a href={link.linkUrl}>{link.linkName}</a></li>)}
                </ul>
            </div>
            <div className={`side-panel__filters`} >
                <div className={`side-panel__section-title`}>
                    {siteContent.sidePanel.sectionNames[1].name}
                </div>
                <ul className={`side-panel__section-content`}>
                    {filterOptions.map(option => {
                        if (option.slug === constants.filterByTypeSlug) {
                            return (
                                <div key={option.slug} className="side-panel__filters">
                                    <div className="side-panel__filters--title">{option.name}</div>
                                    <CheckboxFilter options={typeOptions} selected={selectedTypes} onChange={toggleType} />
                                </div>
                            );
                        }
                        if (option.slug === constants.filterByTimeSlug) {
                            return (
                                <div key={option.slug} className="side-panel__filters">
                                    <div className="side-panel__filters--title">{option.name}</div>
                                    <CheckboxFilter options={timeFilters} selected={selectedTimes} onChange={toggleTime} />
                                </div>
                            );
                        }
                        return null;
                    })}
                </ul>
            </div>
            <div className={`side-panel__search`} >
                <div className={`side-panel__section-title`}>
                    {siteContent.sidePanel.sectionNames[2].name}
                </div>
                <div className={`side-panel__section-content`}>
                    <Input />
                </div>
            </div>
            <div className={`side-panel__footer`} >
                <strong>Chives</strong>
                Keep your recipes & pantry organised.
            </div>
        </div>
    )
}
