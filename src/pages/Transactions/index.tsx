import React from 'react';
import List from '../../components/List';

const transactions = [
    {},
    {}
];

const Transactions: React.FC = () => {
    return (
        <List transactions={transactions} />
    );
}

export default Transactions;