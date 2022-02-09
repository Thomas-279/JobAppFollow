import React, { useEffect, useState } from 'react';
import { darkModeProps } from '../components/utils/types';
import api from './utils/api';

import CustomInput from "./shared/CustomInput";
import CustomRow from './shared/CustomRow';
import Layout from '../components/shared/Layout';

const JobSearch = ({ darkMode }: darkModeProps) => {
    const [data, setData] = useState([]);
    const ApiData = () => {
        const token = localStorage.getItem('auth-token');
        if (token) {
            const config = { headers: { 'auth-token': token}}
            api.get('api/rows/allrows', config)
                .then((response) => {
                    setData(response.data.rows);
                })
                .catch((error) => console.log(error))
        } else {
            console.log('no token present, please login');
        }
    };

    const removeItem = (id: number) => {
        const token = localStorage.getItem('auth-token');
        if (data) {
            const removeIndex = data.filter((item: any) => {return item.id !== id});
            setData(removeIndex);
            if (token) {
                const config = { headers: { 'auth-token': token}}
                api.delete('api/rows/one/' + id, config)
                .then((response) => {
                    console.log(response.data)
                    ApiData();
                })
                .catch((error) => console.log(error))
            }
        } else {
            console.log('no data in state');
        }
    };

    useEffect(() => {
        ApiData()
    }, [])

    return (
        <Layout>
            <CustomInput darkMode={darkMode} data={data} setData={setData} />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-col w-full h-1/6">
                    <div className="flex flex-col w-full h-1/6 mt-5 mb-5">
                    {data.map((item: any) => (
                            <div key={item.id} className="w-full flex flex-col justify-between">
                                <CustomRow item={item} onRemove={removeItem} />
                                <div className="h-[1px] w-full bg-gray-400 my-2"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default JobSearch;