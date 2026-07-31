
interface TitleProps {
  title: string,
  isH1: boolean,
  mainClass: string,
}

const Title = (props: TitleProps) => {

  return (
    <>
      {
        props.isH1 ?
          <h1 className={`title-h1 {mainClass}__title`}>
            {props.title}
          </h1> :
          <h2 className={`title-h2 {mainClass}__title`}>
            {props.title}
          </h2>
      }
    </>
  )
}

export default Title