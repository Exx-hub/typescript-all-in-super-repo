type OscarProps = {
    children: React.ReactNode // used for children that are components
}

function Oscar(props: OscarProps) {
    return (
        <>
            {props.children}
        </>
    )
}

export default Oscar