import React from "react";

import styles from "./ProfileItem.module.css";

import PropTypes from 'prop-types';

export const ProfileItem = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.description} >
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.location}>{location}</p>
            </div >
            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers <br /></span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views <br /></span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes <br /></span>
                    <span className={styles.quantity}>{likes}</span>
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
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired
}