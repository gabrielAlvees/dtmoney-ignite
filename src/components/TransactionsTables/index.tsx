import { useEffect } from 'react';
import { api } from '../Services/api';
import { Container } from './styles';

export const TransactionsTables = ()=>{
    
    /*useEffect(()=>{
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data))
    },[]);*/

    useEffect(()=>{
        api.get('/transactions').then(response => console.log(response.data))
    },[]);

    return(
        <>
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
                        <td>Desenvolvimento Web</td>
                        <td className="deposit">R$1200.00</td>
                        <td>Desenvolvimento</td>
                        <td>07/07/2022</td>
                    </tr>

                    <tr>
                        <td>Alugel</td>
                        <td className="withdraw">- R$1.100.00</td>
                        <td>Casa</td>
                        <td>17/06/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
        </>
    );
}