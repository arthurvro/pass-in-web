import { ComponentProps } from "react";

/*
TableHeader() => Componente que engloba todos os elementos dos th's

*/

interface TableHeaderProps extends ComponentProps<'th'> {}

export function TableHeader(props: TableHeaderProps) {
    return (
        <th className='py-3 px-4 text-sm font-semibold text-left'{...props} />
    )
}