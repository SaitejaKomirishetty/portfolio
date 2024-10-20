import React from 'react';
import BadgeComponent from './BadgeComponent';

const Experience = () => {
    return (
        <div className='text-center space-y-7'>
            <h2 className='text-5xl font-bold '>Experience</h2>
            <div className='h-[600px] flex justify-between '>
                <div>Torry harris</div>
                <BadgeComponent />
            </div>
        </div>
    );
};

export default Experience;
