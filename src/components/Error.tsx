import React from 'react';
import { darkModeProps } from '../components/utils/types';

const Error = ({ darkMode }: darkModeProps) => {
    return (
        <div className={`w-11/12 h-96 flex flex-col justify-center items-center ${darkMode ? 'darkbluebg' : 'lightbluebg'}`}>
            <div className="flex flex-col justify-between items-center mt-4">
                <p className="text-2xl">ERROR - Not Found</p>
            </div>
        </div>
    )
}

export default Error;