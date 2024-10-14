import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className='p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12'>
            <NavBar />
        </div>
    );
}

export default App;
