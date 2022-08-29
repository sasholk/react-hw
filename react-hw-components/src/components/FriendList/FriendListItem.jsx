import React from "react";

import styled from "styled-components";

import PropTypes from 'prop-types';

// import styles from "./FriendList.module.css";

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

const Status = styled.span`
    background-color: ${props => (props.isOnline ? "green" : "red")};
    
    width: 10px;
    height: 10px;
    border-radius: 50%;
`


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Li>
            <Status isOnline={isOnline}></Status>
            <Img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </Li >
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}