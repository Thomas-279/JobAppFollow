import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { ImCross } from 'react-icons/im';
import { BsHourglass } from 'react-icons/bs';

const CustomRow = ({ item }: any) => {
    return (
        <>
            <div className='w-1/12 mx-2'>{item.id}</div>
            <div className='w-2/12 mx-2'>{item.date}</div>
            <div className='w-2/12 mx-2'>{item.firm}</div>
            <div className='w-2/12 mx-2'>{item.via}</div>
            <div className='w-2/12 mx-2'>{item.job}</div>
            <div className='w-4/12 mx-2'>{item.comment}</div>
            <div className='w-2/12 mx-2'>
                {item.status === "waiting" && <BsHourglass size={27} color="orange" />}
                {item.status === "refused" && <ImCross size={24} color="red"/>}
                {item.status === "accepted" && <FcCheckmark size={27}/>}
            </div>
        </>
    )
};

export default CustomRow;