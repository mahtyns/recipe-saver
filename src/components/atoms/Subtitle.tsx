import React from 'react'

type SubitleProps = {
    subtitle: string;
    isH3: boolean;
}

const Subtitle: React.FC<SubitleProps> = (props) => {
    return props.isH3 ? <h3 className='subtitle subtitle--h3'>{props.subtitle}</h3> : <h4 className='subtitle subtitle--h4'>{props.subtitle}</h4>;
}

export default Subtitle