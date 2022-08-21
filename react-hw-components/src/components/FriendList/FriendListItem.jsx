import React from "react";

import styled from "styled-components";

import PropTypes from 'prop-types';

import styles from "./FriendList.module.css";

const Li = styled.li`
    background-color: #fff;
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding: 0 20px;
    border: solid 1px rgb(201, 201, 201);
    box-shadow: 1px 3px 5px black;
    border-radius: 1%;
`

const Img = styled.img`
    width: 80px;
`


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Li>
            <span className={isOnline ? styles.online : styles.offline}></span>
            <Img src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </Li >
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}