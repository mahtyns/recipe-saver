import React from 'react'

interface FormProps {
    mainClass: string,
    formLabel: string,
    inputType: string,
    inputId: string,
    required?: boolean,
    inputPlaceholder: string,
    inputOnchange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue?: string
}

export const FormInput = (props: FormProps) => {
    return (
        <>
            <div className={`${props.mainClass}__form-item form-item`}>
                <label className={`${props.mainClass}__form-item--label form-label`} htmlFor={props.inputId}>{props.formLabel}</label>
                <input className={`${props.mainClass}__form-item--input form-input`} type={props.inputType} id={props.inputId} required={props.required} value={props.inputValue} placeholder={props.inputPlaceholder} onChange={props.inputOnchange} />
            </div>
        </>
    )
}
