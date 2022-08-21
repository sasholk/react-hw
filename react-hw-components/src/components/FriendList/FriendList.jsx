import React from "react";

import friends from "../../assets/friends.json";

import { FriendListItem } from "./FriendListItem";

import styles from "./FriendList.module.css";

export const FriendList = () => {
    return (
        <section className={styles.Friends}>
            <ul className={styles.friendList}>
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                ))}
            </ul>
        </section>
    );
};