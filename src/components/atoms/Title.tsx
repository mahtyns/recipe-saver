import React from 'react'

type TitleProps = {
    title: string;
    isPageTitle: boolean;
}

const Title: React.FC<TitleProps>  = (props) => {
    return props.isPageTitle ? <h1 className='title title--h1'>{props.title}</h1> : <h2 className='title title--h2'>{props.title}</h2>;
}

export default Title