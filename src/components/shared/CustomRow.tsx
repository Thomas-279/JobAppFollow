import React from 'react';
import moment from 'moment';
import 'moment/locale/fr'
import { FcCheckmark } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';
import { BsHourglass } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';

const CustomRow = ({ item, onRemove }: any) => {
    return (
        <div className="w-full h-28 flex flex-row justify-between text-sm md:text-base">
            <div className="w-1/12 flex flex-col justify-around items-center p-4">
                <div className='flex justify-center items-center'>{item.id}</div>
                <div className='flex justify-center items-center'>
                        {item.status === "waiting" && <BsHourglass size={25} color="orange" />}
                        {item.status === "refused" && <AiOutlineClose size={25} color="red"/>}
                        {item.status === "accepted" && <FcCheckmark size={25}/>}
                </div>
            </div>
            <div className="w-10/12 flex flex-col justify-center items-center">
                <div className="w-11/12 flex flex-row justify-around">
                    <div className="w-5/12 flex flex-row">
                        <div className='w-full flex items-center text-lg font-bold'>{item.job}</div>
                    </div>
                    <div className="w-5/12 flex flex-row">
                        <div className='w-6/12 flex justify-start items-center'>{item.firm}</div>
                        <div className='w-6/12 flex justify-start items-center'>via : {item.via}</div>
                    </div>
                    <div className="w-2/12 flex flex-row">
                        <div className='w-full flex justify-center items-center'>{moment(item.date).format('DD/MM/YYYY')}</div>
                    </div>
                </div>
                <div className="w-full flex flex-row px-20 mt-5">
                    <div className='flex justify-center items-center italic'>{item.comment}</div>
                </div>
            </div>
            <div className="w-1/12 flex justify-center items-center">
                <FaTrash color={'#840032'} size={28} onClick={() => onRemove(item.id)} />
            </div>
        </div>
    )
};

export default CustomRow;