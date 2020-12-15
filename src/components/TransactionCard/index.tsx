import React from 'react';
import { Container } from './styles';

interface TransactionData {
    title: string;
    type: string;
}

interface TransactionCardProps {
    transaction: TransactionData;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
    return (
        <Container>
            <div>{transaction.title}</div>
            <div>{transaction.type}</div>
        </Container>
    );
}

export default TransactionCard;