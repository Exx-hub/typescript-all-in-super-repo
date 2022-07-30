type ListProps<T> = { // generic props T
    items: T[]
    onClick: (value: T) => void
}

type Obj = {
    first: string
    last: string
}

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List Of Items</h2>
            {items.map((item, index) => (
                <div key={index} onClick={() => onClick(item)}>
                    {/* {item} */}
                </div>
            ))}
        </div>
    )
}