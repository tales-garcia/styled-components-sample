import React from 'react';
import List from '../../components/List';
import { Container } from './styles';

interface TransactionData {
    title: string;
    type: keyof typeof TransactionTypeVariant;
}

enum TransactionTypeVariant {
    OPEN = 'adiado',
    PAID = 'pago'
}

const transactions: TransactionData[] = [
    {
        type: 'OPEN',
        title: 'Novo brinquedo'
    },
    {
        type: 'PAID',
        title: 'Aluguel'
    }
];

const Transactions: React.FC = () => {
    return (
        <Container>
            <h1>Suas transações:</h1>
            <List transactions={transactions} />
        </Container>
    );
}

export default Transactions;