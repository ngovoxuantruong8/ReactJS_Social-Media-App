import React from 'react';
import './ProfileCard.scss';

import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';

const ProfileCard = () => {
    const ProfilePage = true;

    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt="Cover" />
                <img src={Profile} alt="Profile" />
            </div>

            <div className="ProfileName">
                <span>Charlie</span>
                <span>Fresher Front-end</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>427</span>
                        <span>Following</span>
                    </div>

                    <div className="vl"></div>
                    <div className="follow">
                        <span>15</span>
                        <span>Followers</span>
                    </div>

                    {ProfilePage && (
                        <>
                            <div className="vl"></div>

                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {ProfilePage ? '' : <span>My Profile</span>}
        </div>
    );
};

export default ProfileCard;
