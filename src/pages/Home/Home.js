import React from 'react';

import ProfileSide from '../../components/ProfileSide/ProfileSide';
import PostSide from '../../components/PostSide/PostSide';
import './Home.scss';
import RightSide from '../../components/RightSide/RightSide';

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    );
};

export default Home;
