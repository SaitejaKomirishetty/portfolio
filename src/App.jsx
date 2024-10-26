import { useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { FloatingDock } from './components/ui/floating-dock';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from '@tabler/icons-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const links = [
    {
        title: 'LinkedIn',
        icon: (
            <IconBrandLinkedin className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: 'https://www.linkedin.com/in/saiteja-komirishetty',
    },
    {
        title: 'Home',
        icon: (
            <IconHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: '#',
    },

    {
        title: 'Products',
        icon: (
            <IconTerminal2 className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: '#',
    },
    {
        title: 'Components',
        icon: (
            <IconNewSection className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: '#',
    },
    {
        title: 'Aceternity UI',
        icon: (
            <img
                src='https://assets.aceternity.com/logo-dark.png'
                alt='Aceternity Logo'
            />
        ),
        href: '#',
    },
    {
        title: 'Changelog',
        icon: (
            <IconExchange className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: '#',
    },

    {
        title: 'Twitter',
        icon: (
            <IconBrandX className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: '#',
    },
    {
        title: 'GitHub',
        icon: (
            <IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
        ),
        href: '#',
    },
];

function App() {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    return (
        <div>
            <div className='fixed top-0 bg-opacity-28 backdrop-blur-[7.6px] p-2 w-full z-50'>
                <NavBar
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    experienceRef={experienceRef}
                    projectsRef={projectsRef}
                />
            </div>
            <div className='p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12'>
                <HeroSection />
                <section ref={aboutRef} id='about'>
                    <AboutSection />
                </section>
                <section ref={skillsRef} id='skills'>
                    <SkillsSection />
                </section>
                <section ref={experienceRef} id='experience'>
                    <Experience />
                </section>
                <section ref={projectsRef} id='projects'>
                    <Projects />
                </section>
                <Contact />
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
