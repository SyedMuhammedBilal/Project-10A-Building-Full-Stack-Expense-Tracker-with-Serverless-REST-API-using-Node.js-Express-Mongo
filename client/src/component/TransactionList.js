import React, { useContext, useEffect } from 'react'
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export default function TransactionList() {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
    }, []);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(transaction => (
                        <Transaction transaction={transaction} key={transaction.id} />
                    ))
                }
            </ul>
        </div>
    )
}
