import React from 'react';
import List from '../../components/List';
import { Container } from './styles';

const transactions = [
    {},
    {}
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