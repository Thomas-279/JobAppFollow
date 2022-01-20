import React, { useState, createContext } from 'react';

import dummyData from '../components/utils/dummyData';

import { objectValueProps } from '../components/utils/types';

export const DemoContext = createContext({});

export const DemoProvider = ({ children }: any) => {
    const [data, setData] = useState(dummyData);

    const [openInput, setOpenInput] = useState<Boolean>(false);
    const [objectValue, setObjectValue] = useState<objectValueProps>({
            id: '',
            firm: '',
            date: '',
            via: '',
            job: '',
            comment: '',
            status: 'waiting',
        },
    );

    return (
        <DemoContext.Provider value={{ data, setData, openInput, setOpenInput, objectValue, setObjectValue }}>
            {children}
        </DemoContext.Provider>
    )
}