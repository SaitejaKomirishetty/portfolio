import React from 'react';
import saiteja from '/DSC_9370-removebg 1.png';
import { FlipWords } from './ui/flip-words';
const words = [
    'FrontEnd Developer',
    'Web Developer',
    'Software Engineer',
    'F1 Enthusiast',
];

const HeroSection = () => {
    return (
        <div className='w-full lg:gap-60 flex flex-col lg:flex-row items-center justify-center mt-20'>
            <div>
                <p>
                    I'm
                    <span className='dark:text-amber-500 font-bold text-7xl lg:text-8xl'>
                        SAITEJA
                    </span>
                </p>
                <span className='text-3xl'>
                    I'm a
                    <FlipWords
                        words={words}
                        duration={2000}
                        className={'-z-10 text-3xl block md:inline'}
                    />
                </span>
            </div>
            <img src={saiteja} alt='my photo' className=' mt-0' />
        </div>
    );
};

export default HeroSection;
