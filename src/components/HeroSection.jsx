import React from 'react';
import saiteja from '/DSC_9370-removebg 1.png';
import { FlipWords } from './ui/flip-words';
const words = ['front end developer', 'web developer', 'software engineer'];

const HeroSection = () => {
    return (
        <div className='w-full my-16 lg:my-32 lg:gap-60 flex flex-col lg:flex-row items-center justify-center'>
            <div>
                <p>
                    I'm
                    <span className='dark:text-amber-500 font-bold text-7xl lg:text-8xl'>
                        SAITEJA
                    </span>
                </p>
                i'm a
                <FlipWords words={words} duration={2000} className={'-z-10'}/>
            </div>
            <img src={saiteja} alt='my photo' className=' mt-0' />
        </div>
    );
};

export default HeroSection;
