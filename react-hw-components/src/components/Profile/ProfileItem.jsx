import React from "react";

import "./ProfileItem.css";

import PropTypes from 'prop-types';

export const ProfileItem = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <div className="profile">
            <div className="description" >
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div >
            <ul className="stats">
                <li>
                    <span className="label">Followers <br /></span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views <br /></span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes <br /></span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div >
    );
};

ProfileItem.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired
}