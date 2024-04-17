import { ComponentProps } from "react";

/*
Table() => Componente que engloba todos os elementos da tabela

*/

interface TableProps extends ComponentProps<'table'> {}

export function Table(props: TableProps) {
    return (
        <div className='border border-white/10 rounded-lg'>
            <table className='w-full' {...props}/> {/* Enviando props como children */}
        </div>
    )
}