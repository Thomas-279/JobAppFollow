import React, { useEffect, useState } from 'react';
import { darkModeProps } from '../components/utils/types';
import api from './utils/api';

import CustomInput from "./shared/CustomInput";
import CustomRow from './shared/CustomRow';

const JobSearch = ({ darkMode }: darkModeProps) => {
    const [data, setData] = useState([]);
    const ApiData = () => {
        api.get('api/rows/allrows')
            .then((response) => {
                setData(response.data.rows);
            })
            .catch((error) => console.log(error))
    };

    const removeItem = (id: string) => {
    if (data) {
        const removeIndex = data.filter((item: any) => {return item.id !== id});
        setData(removeIndex)
    } else {
        console.log('no data in state');
    }
    }

    useEffect(() => {
        ApiData()
    }, [])

    return (
        <div className={`w-11/12 ${darkMode ? 'white-glassmorphism' : 'blue-glassmorphism'}`}>
            <CustomInput darkMode={darkMode} data={data} setData={setData} />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <div className="flex flex-col w-full h-full">
                <table className="flex flex-col w-full h-1/6">
                    <thead className="flex flex-col w-full">
                        <tr className="w-full flex flex-row justify-between items-center text-sm md:text-base">
                            <th className='w-1/12'>Numéro</th>
                            <th className='w-1/12'>Date</th>
                            <th className='w-1/12'>Société</th>
                            <th className='w-2/12'>Via plateforme</th>
                            <th className='w-2/12'>Job</th>
                            <th className='w-2/12'>Commentaire</th>
                            <th className='w-1/12'>Statut</th>
                            <th className='w-1/12'>Actions</th>
                        </tr>
                        <tr className="h-[1px] w-full bg-gray-400 my-2" />
                    </thead>
                    <tbody className="flex flex-col w-full h-1/6 mt-5 mb-5">
                        {data.map((item: any) => (
                            <tr key={item.id} className="w-full flex flex-row justify-between">
                                <CustomRow item={item} onRemove={removeItem} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default JobSearch;