import React from "react";

import PropTypes from 'prop-types';

import styles from "./FriendList.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.listItem}>
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li >
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}