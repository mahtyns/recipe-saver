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
import { useAddLabel } from "@/app/hooks/useAddLabel";
import { LABELS_CLASS } from "@/app/lib/content/classes.constants";

interface LabelListProps {
    mainClass: string
}

const LabelList = (props: LabelListProps) => {
    const { isPending, error, data: labels } = useGetLabels()
    const [newLabel, setNewLabel] = useState<string>('')
    const { mutate, isPending: loadingLabel, error: labelError } = useAddLabel()

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNewLabel(e.target.value)
    }

    const handleSubmit = () => {
        mutate({ label: newLabel, created_by: 'custom' });
    };

    const defaultLabels = labels && labels.filter(label => label.created_by === 'default')
    const customLabels = labels && labels.filter(label => label.created_by === 'custom')
    const renderLabels = (label: LabelData) => <Label key={label.label} mainClass={props.mainClass} label={label.label} />
    return (
        <div>
            <Title isH1={true} mainClass={props.mainClass} title={labelsPageContent.h1Title} />
            <div className={`${props.mainClass}__default`}>
                <Title isH1={false} mainClass={props.mainClass} title={labelsPageContent.default} />
                <div className={`${props.mainClass}__default__wrapper`}>
                    <ListContent mainClass={props.mainClass} isPending={isPending} error={error} data={defaultLabels} renderItem={renderLabels} />
                </div>
            </div>
            <div className={`${props.mainClass}__custom`}>
                <Title isH1={false} mainClass={props.mainClass} title={labelsPageContent.custom} />
                {
                    loadingLabel ? 'Loading...' : null
                }
                {
                    customLabels ? <div className={`${props.mainClass}__custom__wrapper`}>
                        <ListContent mainClass={props.mainClass} isPending={isPending} error={error} data={customLabels} renderItem={renderLabels} />
                    </div> : <p>You don't have any labels yet.</p>
                }
            </div>
            <div className={`${props.mainClass}__add`}>
                <Title isH1={false} mainClass={props.mainClass} title={labelsPageContent.add} />
                <div className={`${props.mainClass}__add__wrapper`}>
                    <form className={`${LABELS_CLASS}__form`} onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        <Input type="text" id="add-label" label={labelsPageContent.input.label} placeholder={labelsPageContent.input.placeholder} required={true} handleOnChange={handleOnChange} />
                        <Button variant="primary" text={labelsPageContent.input.button} type={'submit'} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LabelList