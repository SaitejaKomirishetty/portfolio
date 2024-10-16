import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import ThemeToggle from './ThemeSwitcher/ThemeToggle';
import { MenuIcon } from 'lucide-react';
import SaitejaIcon from '../assets/saitejaIcon';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    const links = [
        {
            title: 'About',
        },
        {
            title: 'Skills',
        },
        {
            title: 'Projects',
        },
    ];

    return (
        <div>
            <div className='lg:hidden grid grid-cols-2 grid-rows-1'>
                <SaitejaIcon />
                <div className='flex items-center justify-end gap-2'>
                    <ThemeToggle />
                    <button onClick={toggleDrawer}>
                        <MenuIcon />
                    </button>
                </div>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className=''
                >
                    <div className='dark:bg-[#34353a] h-full'></div>
                </Drawer>
            </div>
            <div className='hidden lg:flex items-center justify-between sticky top-0 left-0'>
                <div className='flex items-center gap-2'>
                    <SaitejaIcon />
                    <p>Saiteja Komirishetty</p>
                </div>
                <div className='flex items-center justify-evenly w-full'>
                    {links.map((link) => {
                        return <div>{link.title}</div>;
                    })}
                </div>

                <ThemeToggle />
            </div>
        </div>
    );
};

export default Navbar;
