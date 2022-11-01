import React from 'react';
import './TrendCard.scss';

import { TrendData } from '../../Data/TrendData';

const TrendCard = () => {
    return (
        <div className="TrendCard">
            {TrendData.map((trend) => {
                return (
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                );
            })}
        </div>
    );
};

export default TrendCard;
