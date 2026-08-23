"use client"

import { useGetLabels } from "@/app/hooks/useGetLabels";
import Title from "../../shared/titles/Title";
import { ListContent } from "../../shared/list-content/ListContent";
import { LabelData } from "@/app/models/labels/labels.models";
import { Label } from "../../shared/label/Label";
import { Input } from "../../shared/input/Input";
import { labelsPageContent } from "@/app/lib/content/en/labels-page"
import { Button } from "../../shared/button/Button";
import { useState } from "react";

interface LabelListProps {
    mainClass: string
}

const LabelList = (props: LabelListProps) => {
    const { isPending, error, data: labels } = useGetLabels()
    const [newLabel, setNewLabel] = useState<string>('')

    const defaultLabels = labels && labels.filter(label => label.created_by === 'default')
    const renderDefault = (label: LabelData) => <Label mainClass={props.mainClass} label={label.label} />
    return (
        <div>
            <Title isH1={true} mainClass={props.mainClass} title={labelsPageContent.h1Title} />
            <div className={`${props.mainClass}__default`}>
                <Title isH1={false} mainClass={props.mainClass} title={labelsPageContent.default} />
                <div className={`${props.mainClass}__default__wrapper`}>
                    <ListContent mainClass={props.mainClass} isPending={isPending} error={error} data={defaultLabels} renderItem={renderDefault} />
                </div>
            </div>
            <div className={`${props.mainClass}__custom`}>
                <Title isH1={false} mainClass={props.mainClass} title={labelsPageContent.custom} />
                <div className={`${props.mainClass}__custom__wrapper`}>

                </div>
            </div>
            <div className={`${props.mainClass}__add`}>
                <Title isH1={false} mainClass={props.mainClass} title={labelsPageContent.add} />
                <div className={`${props.mainClass}__add__wrapper`}>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <Input type="text" id="add-label" label={labelsPageContent.input.label} placeholder={labelsPageContent.input.placeholder} required={true} />
                        <Button variant="primary" text={labelsPageContent.input.button} handleClick={() => null} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LabelList