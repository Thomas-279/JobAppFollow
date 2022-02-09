import React, { useState } from "react";

import dummyData from '../components/utils/dummyData';

import CustomInput from "./shared/CustomInput";
import CustomRow from './shared/CustomRow';
import { darkModeProps } from '../components/utils/types';

const Demo = ({ darkMode }: darkModeProps) => {
    const [data, setData] = useState(dummyData);

    const removeItem = (id: number) => {
        const removeIndex = data.filter((item: any) => {return item.id !== id});
        setData(removeIndex)
    };

    return (
        <div className={`w-11/12 min-h-96 ${darkMode ? 'darkbluebg' : 'darkbluebg'}`}>
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
        </div>
    )
}

export default Demo;