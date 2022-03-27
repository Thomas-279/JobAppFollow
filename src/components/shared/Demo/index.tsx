import React, { useState } from "react";

import dummyData from '../../utilities/dummyData';

import CustomInput from "../ui/CustomInput";
import CustomRow from '../ui/CustomRow';
import { darkModeProps, Row } from '../../utilities/types';
import Layout from '../ui/Layout';

type DemoProps = {
    darkMode: darkModeProps;
}

const Demo = ({ darkMode }: DemoProps) => {
    const [data, setData] = useState<Row[]>(dummyData);

    const removeItem = (id: number) => {
        const removeIndex = data.filter((item: any) => {return item.id !== id});
        setData(removeIndex)
    };

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

export default Demo;