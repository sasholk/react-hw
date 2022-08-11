import React from "react";

import userList from "../../assets/user.json";

import { ProfileItem } from "./ProfileItem";

const { username, tag, location, avatar, stats } = userList;

export const Profile = () => {
    return (
        <ProfileItem
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
        />
    );
};