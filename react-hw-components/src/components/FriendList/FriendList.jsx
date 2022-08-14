import React from "react";

import friends from "../../assets/friends.json";

import { FriendListItem } from "./FriendListItem";

import "./FriendList.css";

export const FriendList = () => {
    return (
        <section className="Friends">
            <ul className="friend-list">
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