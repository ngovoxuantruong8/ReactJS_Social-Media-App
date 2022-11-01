import React from 'react';

import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import './Post.scss';

const Post = ({ data, id }) => {
    return (
        <div className="Post" key={id}>
            <img src={data.img} alt="Image" />

            <div className="postReact">
                <img src={data.liked ? Heart : NotLike} alt="Like" />
                <img src={Comment} alt="Comment" />
                <img src={Share} alt="Share" />
            </div>

            <span style={{ color: 'var(--grey)', fontSize: '13px' }}>{data.likes} Likes</span>

            <div className="detail">
                <span>
                    <b>{data.name}</b>
                </span>
                <span>{data.desc}</span>
            </div>
        </div>
    );
};

export default Post;
