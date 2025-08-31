interface ButtonProps {
  handleClick?: () => void,
  buttonText: string,
  buttonClass: 'primary' | 'secondary' | 'outline' | 'danger',
  buttonType?: 'button' | 'submit' | 'reset';
}

const Button = (props: ButtonProps) => {
  const buttonClass = `button button--${props.buttonClass}`

  return (
    <button className={buttonClass} onClick={props.handleClick} type={props.buttonType}>{props.buttonText}</button>
  )
}

export default Button