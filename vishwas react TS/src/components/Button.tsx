import React from "react"

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function Button({ handleClick }: ButtonProps) {
    // const { handleClick } = props
    return (
        <button onClick={(e) => handleClick(e, 1)}>Click</button>
    )
}

export default Button