type HeadingProps = { // even if props passed is children of element
    children: string
}

function Heading(props: HeadingProps) {
    return (
        <div>{props.children}</div>
    )
}

export default Heading