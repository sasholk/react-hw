import React from "react";

import styled from "styled-components";

import friends from "../../assets/friends.json";

import { FriendListItem } from "./FriendListItem";

// import styles from "./FriendList.module.css";

const Section = styled.section`
    margin: 0 auto; 
    width: 350px;
`

const Ul = styled.ul`
    padding: 0;
    list-style: none;
    background-color: rgb(199, 199, 199);
`

export const FriendList = () => {
    return (
        <Section>
            <Ul>
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                ))}
            </Ul>
        </Section>
    );
};