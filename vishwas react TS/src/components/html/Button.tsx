type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    console.log(children)
    return (

        <button className={variant} {...rest}>{children}</button>

    )
}
