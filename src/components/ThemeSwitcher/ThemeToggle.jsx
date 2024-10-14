import './ThemeSwitcher.css';
import { useTheme } from '../../hooks/ThemeContext';
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <button
                className='theme-toggle p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg dark:hover:bg-[#27272a] hover:bg-[#f4f4f5] transition-shadow duration-200 hover:scale-110'
                onClick={() => toggleTheme()}
                title='Toggles light & dark'
                aria-label={theme}
                aria-live='polite'
            >
                <svg
                    className='sun-and-moon dark:text-yellow-300 text-gray-400'
                    aria-hidden='true'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                >
                    <mask className='moon' id='moon-mask'>
                        <rect
                            x='0'
                            y='0'
                            width='100%'
                            height='100%'
                            fill='white'
                        />
                        <circle cx='24' cy='10' r='6' fill='black' />
                    </mask>
                    <circle
                        className='sun'
                        cx='12'
                        cy='12'
                        r='6'
                        mask='url(#moon-mask)'
                        fill='currentColor'
                    />
                    <g className='sun-beams' stroke='currentColor'>
                        <line x1='12' y1='0' x2='12' y2='4' />
                        <line x1='12' y1='20' x2='12' y2='24' />
                        <line x1='3.5' y1='3.5' x2='6.4' y2='6.4' />
                        <line x1='17.6' y1='17.6' x2='20.5' y2='20.5' />
                        <line x1='0' y1='12' x2='4' y2='12' />
                        <line x1='20' y1='12' x2='24' y2='12' />
                        <line x1='3.5' y1='20.5' x2='6.4' y2='17.6' />
                        <line x1='17.6' y1='6.4' x2='20.5' y2='3.5' />
                    </g>
                </svg>
            </button>
        </>
    );
};

export default ThemeToggle;
