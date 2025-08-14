interface ButtonProps {
    handleClick: () => void,
    buttonText: string,
    buttonType: 'primary' | 'secondary' | 'outline' | 'danger'
}

const Button = (props: ButtonProps) => {
  const buttonClass = `button button--${props.buttonType}`

  return (
    <button className={buttonClass} onClick={()=>props.handleClick()}>{props.buttonText}</button>
  )
}

export default Button