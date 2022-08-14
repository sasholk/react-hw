import React from "react";

import friends from "../../assets/friends.json";

import { FriendListItem } from "./FriendListItem";

export const FriendList = () => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, avatar, name }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                />
            ))}
        </ul>
    );
};