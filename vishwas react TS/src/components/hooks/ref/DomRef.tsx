import { useEffect, useRef } from "react"


function DomRef() {
    const inputRef = useRef<HTMLInputElement>(null!)
    // const inputRef = useRef<HTMLInputElement>(null)
    console.log(inputRef.current)

    useEffect(() => {
        inputRef.current.focus()
        // inputRef.current?.focus()
    }, [])

    return (
        <>
            <div>Focus</div>
            <input ref={inputRef} placeholder="enter username" />
        </>
    )
}

export default DomRef