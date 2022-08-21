import React from "react";

import transactions from "../../assets/transactions.json";

import { TransactionItem } from "./TransactionItem";

import styles from "./TransactionHistory.module.css";

export const TransactionHistory = () => {
    return (
        <div className={styles.container}>
            <table className={styles.transactionHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(({ id, type, amount, currency }) => (
                        <TransactionItem
                            key={id}
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    ))}

                </tbody>
            </table>
        </div>

    );
};