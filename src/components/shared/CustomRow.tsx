import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { ImCross } from 'react-icons/im';
import { BsHourglass } from 'react-icons/bs';
import { FiTrash } from 'react-icons/fi';

const CustomRow = ({ item, onRemove }: any) => {
    return (
        <td className="w-full flex flex-row justify-between text-sm md:text-base">
            <div className='w-1/12 flex justify-center items-center'>{item.id}</div>
            <div className='w-1/12 flex justify-center items-center'>{item.date}</div>
            <div className='w-1/12 flex justify-center items-center'>{item.firm}</div>
            <div className='w-2/12 flex justify-center items-center'>{item.via}</div>
            <div className='w-2/12 flex justify-center items-center'>{item.job}</div>
            <div className='w-2/12 flex justify-center items-center'>{item.comment}</div>
            <div className='w-1/12 flex justify-center items-center'>
                {item.status === "waiting" && <BsHourglass size={20} color="orange" />}
                {item.status === "refused" && <ImCross size={20} color="red"/>}
                {item.status === "accepted" && <FcCheckmark size={20}/>}
            </div>
            <div  className='w-1/12 flex justify-center items-center'>
                <FiTrash size={18} onClick={() => onRemove(item.id)} />
            </div>
        </td>
    )
};

export default CustomRow;