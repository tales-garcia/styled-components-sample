import React from 'react';
import TransactionCard from '../TransactionCard';
import { Container } from './styles';

interface ListProps {
    transactions: TransactionData[];
}

interface TransactionData {
    title: string;
    type: string;
}

const List: React.FC<ListProps> = ({ transactions }) => {
    return (
        <Container>
            {transactions.map(transaction => (
                <TransactionCard transaction={transaction} />
            ))}
        </Container>
    );
}

export default List;