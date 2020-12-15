import React from 'react';
import { Container } from './styles';

interface TransactionData {
    title: string;
    type: keyof typeof TransactionTypeVariant;
}

interface TransactionCardProps {
    transaction: TransactionData;
}

enum TransactionTypeVariant {
    OPEN = 'adiado',
    PAID = 'pago'
}

const colors = {
    success: '#297001',
    error: '#c53030',
    neutral: '#adadad'
};

type TTransactionTypeToColorVariant = {
    [key in keyof typeof TransactionTypeVariant ]: keyof typeof colors;
}

const TransactionTypeToColor: TTransactionTypeToColorVariant = {
    OPEN: 'neutral',
    PAID: 'success'
};

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
    return (
        <Container status={colors[TransactionTypeToColor[transaction.type]]}>
            <div>{transaction.title}</div>
            <div>{transaction.type}</div>
        </Container>
    );
}

export default TransactionCard;