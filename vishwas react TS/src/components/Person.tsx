import { PersonProps } from "./Person.types"

function Person(props: PersonProps) {
    const { fullname, occupation } = props
    return (
        <div>{fullname.firstname} {fullname.lastname} - {occupation}</div>
    )
}

export default Person