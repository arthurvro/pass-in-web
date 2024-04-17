import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> { //extendendo um elemento nativo para o NavLink receber todas as propriedades de uma ancora <a/>
    children: string
    //href: string --> nao precisa ser incluso pois o ComponentsProps ja recupera todos os atributos de uma ancora
}

export function NavLink(props: NavLinkProps) {
    return (
        <a {...props} className='font-medium text-sm'>{props.children}</a> /* {...props} = puxar todos os atributos */
    )
}