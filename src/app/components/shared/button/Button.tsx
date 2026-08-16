interface ButtonProps {
    text: string,
    variant: 'primary' | 'secondary' | 'warning' | 'underline'
    handleClick: () => void | null;
}

const variantClasses: Record<ButtonProps['variant'], string> = {
    primary: 'button--primary',
    secondary: 'button--secondary',
    warning: 'button--warning',
    underline: 'button--underline',
};

export const Button = (props: ButtonProps) => {
    return (
        <button
            className={`button ${variantClasses[props.variant]}`}
            onClick={props.handleClick}
        >
            {props.text}
        </button>
    );
};
