import { useEffect, useRef, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { FloatingDock } from './components/ui/floating-dock';
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX,
} from '@tabler/icons-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const links = [
    {
        title: 'LinkedIn',
        icon: (
            <IconBrandLinkedin className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: 'https://www.linkedin.com/in/saiteja-komirishetty',
    },
    {
        title: 'Twitter',
        icon: (
            <IconBrandX className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: 'https://x.com/SAITEJAKOMIRIS1',
    },
    {
        title: 'GitHub',
        icon: (
            <IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: 'https://github.com/SaitejaKomirishetty',
    },
    {
        title: 'Instagram',
        icon: (
            <IconBrandInstagram className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: 'https://www.instagram.com/saitejakomirishetty/',
    },
];

function App() {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDeviceType = () => {
            const userAgent = navigator.userAgent;
            const isDesktopDevice = /windows|macintosh/i.test(userAgent);
            setIsDesktop(isDesktopDevice);
        };
        checkDeviceType();
        const handleResize = () => {
            checkDeviceType();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className='fixed top-0 bg-opacity-28 backdrop-blur-[7.6px] w-full z-50'>
                <NavBar
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    experienceRef={experienceRef}
                    projectsRef={projectsRef}
                    contactRef={contactRef}
                />
            </div>
            {isDesktop ? <CustomCursor /> : null}
            <div className='p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 mx-5 md:mx-10 lg:mx-20 space-y-5  md:space-y-10 lg:space-y-16 xl:space-y-20 2xl:space-y-32'>
                <HeroSection />
                <section ref={aboutRef} id='about'>
                    <AboutSection />
                </section>
                <section ref={skillsRef} id='skills'>
                    <SkillsSection />
                </section>
                <section ref={experienceRef} id='experience'>
                    <Experience isDesktop={isDesktop} />
                </section>
                <section ref={projectsRef} id='projects'>
                    <Projects />
                </section>
                <section ref={contactRef} id='contact'>
                    <Contact />
                </section>
                <Footer />
                <div className=''>
                    <FloatingDock
                        items={links}
                        desktopClassName={
                            'fixed bottom-5 left-1/2 transform -translate-x-1/2'
                        }
                        mobileClassName={'!fixed bottom-5 right-5'}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
