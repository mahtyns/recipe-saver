"use client"
import { ADD_NEW_CLASS } from "@/app/lib/content/classes.constants";
import Title from "../../shared/titles/Title";
import { Input } from "../../shared/input/Input";
import { useState } from "react";
import { LabelData } from "@/app/models/labels/labels.models";
import { useGetLabels } from "@/app/hooks/useGetLabels";
import { Label } from "../../shared/label/Label";


export const NewRecipeForm = () => {
    const [labelList, setLabelList] = useState<LabelData[]>([])
    const { isPending: labelPending, error: labelError, data: labels } = useGetLabels()

    const addLabelToList = (item: LabelData): void => {
        setLabelList([...labelList, item])
    }


    return (
        <div className={`${ADD_NEW_CLASS}__wrapper`}>
            <Title isH1={true} title="Add new recipe" mainClass={ADD_NEW_CLASS} />
            <Title isH1={false} title="Fill the fields to add a new recipe" mainClass={ADD_NEW_CLASS} />
            <form className={`${ADD_NEW_CLASS}__form`}>
                <Input label="Recipe name *" required={true} placeholder="Type the name" type="text" id="name" handleOnChange={() => null} />
                <Input label="Recipe description *" required={true} placeholder="Write the description" type="text" id="description" handleOnChange={() => null} />
                <Input label="Steps *" required={true} placeholder="Describe the steps" type="text" id="steps" handleOnChange={() => null} />
                <Input label="Image URL (optional)" required={false} placeholder="Paste the image URL" type="image-url" id="name" handleOnChange={() => null} />
                <div className={`${ADD_NEW_CLASS}__form__list`}>
                    <p>Choose the labels</p>
                    {
                        labelPending && <p>Loading labels</p>
                    }
                    {
                        labelError && <p>Error when loading labels</p>
                    }
                    {
                        labels && <select name="labels" onChange={(e) => {
                            const selected = labels.find(l => l.id === Number(e.target.value))
                            if (selected) addLabelToList(selected)
                        }}>
                            {labels.map(item => <option key={item.label} value={item.id}>{item.label}</option>)}
                        </select>
                    }
                    <div>
                        {labelList.map(item => <Label label={item.label} mainClass={ADD_NEW_CLASS} />)}
                    </div>
                </div>
                <div className={`${ADD_NEW_CLASS}__form__list`}>

                </div>
            </form>
        </div>
    )
}
