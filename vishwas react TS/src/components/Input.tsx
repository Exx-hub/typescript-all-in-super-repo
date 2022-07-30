import React from "react"

type InputProps = {
    inputValue: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ handleChange, inputValue }: InputProps) {
    return (
        <input onChange={handleChange} value={inputValue} type='text' />
    )
}

export default Input