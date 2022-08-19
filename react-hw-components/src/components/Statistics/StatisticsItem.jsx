import React from "react";

import PropTypes from 'prop-types';

export const StatisticsItem = ({ label, percentage }) => {
    return (
        <li className="item">
            <span className="label">{label} <br /></span>
            <span className="percentage">{percentage}%</span>
        </li>
    );
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}