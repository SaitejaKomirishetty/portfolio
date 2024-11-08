import React from 'react';

const AboutSection = () => {
    return (
        <div>
            <h1 className='text-2xl lg:text-base'>About Me</h1>
            <div className='flex items-start justify-center gap-2'>
                <div className='hidden md:block md:min-w-20 dark:border-amber-500 border-t-4 h-20 mt-3 '></div>
                <div>
                    <p>
                        As a passionate front-end developer, I'm passionate
                        about crafting elegant and user-centric web experiences.
                        My focus on creating intuitive and accessible interfaces
                        is driven by a desire to make a positive impact on
                        users' lives. My expertise lies in leveraging React,
                        HTML, and CSS to build dynamic, high-performance web
                        applications that captivate users.
                    </p>
                    <p>
                        I thrive on challenges and enjoy collaborating with
                        cross-functional teams to deliver innovative solutions.
                        My problem-solving mindset, combined with a keen eye for
                        detail, ensures that every project meets the highest
                        standards of quality and usability.
                    </p>
                    <p>
                        Beyond coding, I'm a huge Formula 1 fan. The thrill of
                        the race, the strategic mind games, and the cutting-edge
                        tech are just mind-blowing. When I'm not geeking out
                        over code, you'll find me out on a bike ride, clearing
                        my head. It's a great way to recharge and come back to
                        my work with a fresh perspective.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
