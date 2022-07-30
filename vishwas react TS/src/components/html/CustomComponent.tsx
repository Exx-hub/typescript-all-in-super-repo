import React from 'react'
import Greet, { GreetProps } from '../Greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => { // or props: GreetProps
    return (
        <div>{props.name}</div>
    )
}
