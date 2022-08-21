import React from "react";

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Td = styled.td`
    padding: 15px 120px;
    border-right: 1px solid #cecece;
`

const Tr = styled.tr`
    &:nth-child(odd){
        background-color: #ffffff;
    }
    &:nth-child(even){
        background-color: #dddddd;
    }
`

export const TransactionItem = ({ type, amount, currency }) => {
    return (
        <Tr>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
        </Tr>
    );
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}