import React, { useEffect, useState } from 'react';

import dummyData from '../components/utils/dummyData';

export const DemoContext = React.createContext();

export const DemoProvider = ({ children }: any) => {
    const [data, setData] = useState(dummyData);

    return (
        <DemoContext.Provider value={{data, setData}}>
            {children}
        </DemoContext.Provider>
    )
}