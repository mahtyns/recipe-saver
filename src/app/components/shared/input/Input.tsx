interface InputProps {
    label: string,
    placeholder: string,
    type: string,
    required: boolean,
    id: string,
}

export const Input = (props: InputProps) => {
    return (
        <div className="form__input">
            <label className="form__label">
                {props.label}
            </label>
            <input id={props.id} placeholder={props.placeholder} required={props.required} type={props.type} value={ } onChange={ } />
        </div>
    )
}
