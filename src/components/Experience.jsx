import React, { useEffect, useState } from 'react';
import BadgeComponent from './BadgeComponent';

const Experience = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDeviceType = () => {
            const userAgent = navigator.userAgent;
            console.log('==>', userAgent);

            const isDesktopDevice = /windows|macintosh/i.test(userAgent);
            setIsDesktop(isDesktopDevice);
        };
        checkDeviceType();
    }, []);

    return (
        <div className=' space-y-9'>
            <h2 className='text-5xl font-bold text-center'>Experience</h2>
            <div
                className={`${
                    isDesktop ? 'h-[600px] justify-between items-center' : ''
                } flex justify-center`}
            >
                <div className='space-y-3 pl-10'>
                    <h3 className='text-3xl items-baseline gap-3 flex font-semibold'>
                        Torry Harris Integration Solutions -  
                        <span className='text-lg'> Associate Software Engineer</span>
                    </h3>
                    <p>
                        <em>Bangalore | August 2023 - Present</em>
                    </p>
                    <ul className='list-disc px-10'>
                        <li>
                            Developed and implemented user-friendly, responsive
                            interfaces compatible with various platforms and
                            devices.
                        </li>
                        <li>
                            Integrated applications with backend systems and
                            APIs to enhance user experience.
                        </li>
                        <li>
                            Actively participated in code reviews, promoting
                            adherence to coding standards within the team.
                        </li>
                        <li>
                            Utilized version control tools like Git for
                            effective collaboration during development cycles.
                        </li>
                        <li>
                            Diagnosed and resolved numerous issues by fixing
                            bugs and improving application functionality and
                            performance.
                        </li>
                        <li>
                            Researched various React packages to implement
                            features more effectively and efficiently.
                        </li>
                        <li>
                            Supervised a team of more than 5 in the development
                            of a marketplace portal.
                        </li>
                        <li>
                            Collaborated with a team of 30 to achieve project
                            goals.
                        </li>
                        <li>
                            Enhanced application performance through the
                            optimization of algorithms and data structures.
                        </li>
                        <li>
                            Streamlined development processes by implementing
                            Agile methodologies and organizing daily stand-up
                            meetings.
                        </li>
                        <li>
                            Assisted in troubleshooting and resolving production
                            issues promptly to minimize user downtime.
                        </li>
                        <li>
                            Mentored junior developers on best coding practices,
                            boosting overall team efficiency and skill levels.
                        </li>
                        <li>
                            Participated in sprint planning sessions, estimating
                            task complexity and prioritizing work items
                            effectively.
                        </li>
                        <li>
                            Identified opportunities for refactoring the legacy
                            codebase, improving maintainability and scalability
                            over time.
                        </li>
                    </ul>
                </div>
                <div className='w-1/2'>{isDesktop && <BadgeComponent />}</div>
            </div>
        </div>
    );
};

export default Experience;
