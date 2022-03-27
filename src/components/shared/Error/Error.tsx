import React from 'react';
import { darkModeProps } from '../../utilities/types';
import Layout from '../ui/Layout';

const Error = ({ darkMode }: darkModeProps) => {
    return (
        <Layout>
            <div className="flex flex-col justify-between items-center mt-4">
                <p className="text-2xl">ERROR - Not Found</p>
            </div>
        </Layout>
    )
}

export default Error;