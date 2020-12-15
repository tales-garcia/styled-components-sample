import React from 'react';
import TransactionCard from '../TransactionCard';
import { Container } from './styles';

interface ListProps {
    transactions: object[];
}

const List: React.FC<ListProps> = ({ transactions }) => {
    return (
        <Container>
            {transactions.map(transaction => (
                <TransactionCard />
            ))}
        </Container>
    );
}

export default List;