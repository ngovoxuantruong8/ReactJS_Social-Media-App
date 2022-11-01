import React from 'react';
import './FollowersCard.scss';

import { Followers } from '../../Data/FollowersData';

const FollowCard = () => {
    return (
        <div className="FollowCard">
            <h3>Who is following you</h3>
            {Followers.map((follower, id) => {
                return (
                    <div className="follower" key={id}>
                        <div>
                            <img src={follower.img} alt="Avatar" className="followerImg" />
                            <div className="name">
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className="button fc-button">Follow</button>
                    </div>
                );
            })}
        </div>
    );
};

export default FollowCard;
