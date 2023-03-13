import { Container } from './styles';

export function TransactionsTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className='deposit'>R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2023</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className='withdraw'>-R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}