import React, { useContext } from "react";
import { FiTrash } from 'react-icons/fi'

import { DemoContext } from "../Context/DemoContext";

import CustomInput from "./shared/CustomInput";
import CustomRow from './shared/CustomRow';

const Demo = () => {
    // const data = useFetch()
    const { data, setData } = useContext(DemoContext);

    const removeItem = (id: string) => {
        const removeIndex = data.filter((item: any) => {return item.id !== id});
        setData(removeIndex)
    }

    return (
        <div className='w-10/12 white-glassmorphism'>
            <CustomInput />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <div className="flex flex-col w-full h-full">
                <table className="flex flex-col w-full h-1/6 text-white">
                    <thead>
                        <tr className="w-full flex flex-row justify-between">
                            <th className='w-1/12 mx-2'>Numéro</th>
                            <th className='w-2/12 mx-2'>Date</th>
                            <th className='w-2/12 mx-2'>Société</th>
                            <th className='w-2/12 mx-2'>Via plateforme</th>
                            <th className='w-2/12 mx-2'>Job</th>
                            <th className='w-4/12 mx-2'>Commentaire</th>
                            <th className='w-2/12 mx-2'>Statut</th>
                            <th className='w-1/12 mx-2'>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col w-full h-1/6">
                        {data.map((item: any) => (
                            <tr key={item.id}>
                                <td className="w-full flex flex-row justify-between p-2 text-white">
                                    <CustomRow item={item}/>
                                    
                                    <FiTrash size={27} onClick={() => removeItem(item.id)} />
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Demo;