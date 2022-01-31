import React, { useContext } from 'react';
import { darkModeProps } from '../components/utils/types';
import { CurrentUserContext } from '../Context/CurrentUserContext';

const Error = ({ darkMode }: darkModeProps) => {
    return (
        <div className={`w-11/12 h-1/2 flex flex-col justify-center items-center ${darkMode ? 'white-glassmorphism' : 'blue-glassmorphism'}`}>
            <div className="flex flex-col justify-between items-center mt-4">
                <p className="text-2xl">ERROR - Not Found</p>
            </div>
        </div>
    )
}

export default Error;