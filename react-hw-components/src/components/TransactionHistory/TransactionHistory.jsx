import React from "react";

import transactions from "../../assets/transactions.json";

import { TransactionItem } from "./TransactionItem";

import "./TransactionHistory.css";

export const TransactionHistory = () => {
    return (
        <div className="container">
            <table className="transaction-history">
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