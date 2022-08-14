import React from "react";



export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className="listItem">
            <span className={isOnline ? 'online' : 'offline'}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li >
    );
};