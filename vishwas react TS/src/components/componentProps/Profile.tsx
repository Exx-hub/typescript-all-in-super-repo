export type ProfileProps = {
    name: string
    age: number
}

export const Profile = ({ name, age }: ProfileProps) => <div>Private Profile Component. Name: {name} Age: {age}</div>