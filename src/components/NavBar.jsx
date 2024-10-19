import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { MenuIcon } from 'lucide-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../hooks/ThemeContext';
import SaitejaIcon from './SaitejaIcon';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { theme, toggleTheme } = useTheme();
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
            <div className='sm:hidden grid grid-cols-2 grid-rows-1'>
                <SaitejaIcon />
                <div className='flex items-center justify-end gap-2'>
                    <div
                        className='p-2 cursor-pointer bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg dark:hover:bg-[#27272a] hover:bg-[#f4f4f5] transition-shadow duration-200 hover:scale-110'
                        onClick={toggleTheme}
                    >
                        <DarkModeSwitch
                            checked={theme === 'light'}
                            moonColor='black'
                            sunColor='#fde047'
                            size={20}
                        />
                    </div>
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
            <div className='hidden sm:flex items-center justify-between sticky top-0 left-0'>
                <div className='flex items-center gap-2'>
                    <SaitejaIcon />
                    <p>Saiteja Komirishetty</p>
                </div>
                <div className='flex items-center justify-evenly w-full'>
                    {links.map((link) => {
                        return <div>{link.title}</div>;
                    })}
                </div>
                <div
                    className='p-2 cursor-pointer bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg dark:hover:bg-[#27272a] hover:bg-[#f4f4f5] transition-shadow duration-200 hover:scale-110'
                    onClick={toggleTheme}
                >
                    <DarkModeSwitch
                        checked={theme === 'light'}
                        moonColor='black'
                        sunColor='#fde047'
                        size={25}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
