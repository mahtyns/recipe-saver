interface InputProps {
    label: string,
    placeholder: string,
    type: string,
    required: boolean,
    id: string,
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    return (
        <div className="form__input">
            <label className="form__label">
                {props.label}
            </label>
            <input id={props.id} placeholder={props.placeholder} required={props.required} type={props.type} onChange={props.handleOnChange} />
        </div>
    )
}
