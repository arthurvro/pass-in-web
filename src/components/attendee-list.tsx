import { Search } from 'lucide-react'

export function AttendeeList() {
    return (
        <div>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className='size-4 text-emerald-300'/>  {/*o mesmo que w-4 h-4*/} 
                    <input className="bg-transparent flex-1 outline-none" placeholder="Buscar participantes ..." />
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Código</th>
                        <th>Participantes</th>
                        <th>Data de inscrição</th>
                        <th>Data do check-in</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>12312</td>
                        <td>
                            <div>
                                <span>Arthur Vieira Ribeiro</span>
                                <span>arthurvieira@gmail.com</span>
                            </div>
                        </td>
                        <td>7 dias atrás</td>
                        <td>7 dias atrás</td>
                        <td></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            Mostrando 10 de 228 itens
                        </td>
                        <td colSpan={3}>
                            Página 1 de 23
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )

}