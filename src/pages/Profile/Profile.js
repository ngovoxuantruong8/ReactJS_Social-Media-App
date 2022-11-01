import React from 'react';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import PostSide from '../../components/PostSide/PostSide';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import RightSide from '../../components/RightSide/RightSide';

import './Profile.scss';

const Profile = () => {
    return (
        <div>
            <h2 className="mobileResponsive">The mobile app responsive is updating...</h2>;
            <div className="Profile">
                <ProfileLeft />

                <div className="Profile-center">
                    <ProfileCard />
                    <PostSide />
                </div>

                <RightSide />
            </div>
        </div>
    );
};

export default Profile;
