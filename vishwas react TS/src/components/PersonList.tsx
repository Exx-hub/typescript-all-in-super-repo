// interface Person {
//     firstname: string;
//     lastname: string
// }

// type PersonListProps = {
//     siblings: Person[]
// }

import { Username } from './Person.types'

type PersonListProps = {
    siblings: Username[]
}

// type PersonListProps = {
//     siblings: {
//         firstname: string;
//         lastname: string
//     }[]
// }

function PersonList(props: PersonListProps) {
    const { siblings } = props

    console.log(siblings)

    return (
        <div>
            {siblings.map((item, i) => (
                <h1 key={i}>{item.firstname} {item.lastname}</h1>
            ))}
        </div>
    )
}

export default PersonList