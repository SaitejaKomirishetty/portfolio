import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import ThemeToggle from './ThemeSwitcher/ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div>
            <div className='flex items-center justify-between'>
                <img src='./saitejaIcon.svg' />
                <div>
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
                    <div className='dark:bg-[#34353a] h-full'>Hello World</div>
                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;
