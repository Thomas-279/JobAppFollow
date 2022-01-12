import { useState } from 'react';

import dummyData from '../components/utils/dummyData';

const useFetch = () => {
    const [data, setData] = useState(dummyData);

    return data
}

export default useFetch;