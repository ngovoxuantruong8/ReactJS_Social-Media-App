import React from 'react';
import './InfoCard.scss';
import { UilPen } from '@iconscout/react-unicons';
import { useState } from 'react';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your info</h4>
                <div>
                    <UilPen onClick={() => setModalOpened(true)} width="2rem" height="1.2rem" />
                </div>
                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>In relationship</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Thủ Đức</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>F8 Fullstack.edu</span>
            </div>

            <button className="button logout-button">Logout</button>
        </div>
    );
};

export default InfoCard;
