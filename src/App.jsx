import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
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
    return (
        <div className='p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12'>
            <NavBar />
            <HeroSection />
            asdfasdfasdf
            <div className=''>
                <FloatingDock
                    items={links}
                    desktopClassName={
                        'fixed bottom-5 left-1/2 transform -translate-x-1/2'
                    }
                    mobileClassName={'fixed bottom-5 right-5'}
                />
            </div>
        </div>
    );
}

export default App;
