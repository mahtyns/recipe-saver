import React from 'react'

interface ErrorProps {
    message: string
}

export const Error = (props: ErrorProps) => {
    return (
        <div className="error-message">{props.message}</div>
    )
}
