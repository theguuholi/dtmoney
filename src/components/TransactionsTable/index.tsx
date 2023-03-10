import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable(){
    useEffect(() => {
        // precisa sempre adicionar todo o endereco, e melhor usar uma biblioteca http
        // fetch("http://localhost:3000/api/transactions")
        api.get("transactions")
        // .then(reponse => reponse.json())
        .then(response => console.log(response.data))
    }, [])
    
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
                        <td className='income'>R$ 12.000,00</td>
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