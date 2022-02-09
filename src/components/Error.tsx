import React from 'react';
import { darkModeProps } from '../components/utils/types';
import Layout from '../components/shared/Layout';

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