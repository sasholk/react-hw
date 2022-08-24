import React from "react";

import PropTypes from 'prop-types';

import styles from "./Statistics.module.css";

const getRandomColor = () => {
    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 255);
    const b = Math.ceil(Math.random() * 255);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

export const StatisticsItem = ({ label, percentage }) => {
    return (
        <li className={styles.item} style={{ backgroundColor: getRandomColor() }}>
            <span className="label">{label} <br /></span>
            <span className="percentage">{percentage}%</span>
        </li>
    );
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}