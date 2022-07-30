type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type Zero = RandomNumberType & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

// props can be a number value and either one of isPositive, isNegative or isZero

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
        </div>
    )

}