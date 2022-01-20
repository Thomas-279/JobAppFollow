import React from 'react';
import { darkModeProps } from '../components/utils/types';

const Home = ({ darkMode }: darkModeProps) => {

    return (
        <div className={`w-10/12 h-1/2 flex flex-col justify-center items-center ${darkMode ? 'white-glassmorphism' : 'blue-glassmorphism'}`}>
            <div className="flex flex-col justify-between items-center mt-4">
                <p className="text-2xl">Bienvenu sur l'outil de suivi de recherche de jobs</p>
            </div>
        </div>
    )
}

export default Home;