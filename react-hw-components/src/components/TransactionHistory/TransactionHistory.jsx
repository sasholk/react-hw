import React from "react";

import styled from 'styled-components';

import transactions from "../../assets/transactions.json";

import { TransactionItem } from "./TransactionItem";

// import styles from "./TransactionHistory.module.css";

const Container = styled.div`
    max-width: 1320px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
`;

const Table = styled.table`
    margin: 40px auto;
    background-color: #fff;
    border-radius: 1%;
    table-layout: fixed;
    width: 70%;
    border-collapse: collapse;
    border: 2px solid rgb(221, 221, 221);
`;

const Thead = styled.thead`
    background: rgb(73, 197, 255);
    padding: 50px;
`;

const Th = styled.th`
    text-transform: uppercase;
    color: #fff;
    padding: 15px 120px;
    border-right: 1px solid #cecece;
`;

const Tbody = styled.tbody`
    background-color: #ffffff;
`

export const TransactionHistory = () => {
    return (
        <Container>
            <Table>
                <Thead>
                    <tr>
                        <Th>Type</Th>
                        <Th>Amount</Th>
                        <Th>Currency</Th>
                    </tr>
                </Thead>

                <Tbody>
                    {transactions.map(({ id, type, amount, currency }) => (
                        <TransactionItem
                            key={id}
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    ))}

                </Tbody>
            </Table>
        </Container>

    );
};