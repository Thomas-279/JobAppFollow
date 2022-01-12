import React, { useState, useContext } from "react";

import { DemoContext } from "../Context/DemoContext";

const Demo = () => {
    const [openInput, setOpenInput] = useState(false);
    // const data = useFetch()
    const { data, setData } = useContext(DemoContext);

    return (
        <div className='w-full'>
            <div className="flex flex-col w-full bg-transparent white-glassmorphism">
                <button className="text-lg text-gray-200 m-5" onClick={() => setOpenInput(!openInput)}>Ajouter une recherche</button>
                {openInput && 
                    <div className="w-full flex flex-row justify-between">
                        <input type="date" placeholder="date" className="w-96 mx-2 bg-transparent white-glassmorphism text-white" />
                        <input type="text" placeholder="Société" className="w-96 mx-2 bg-transparent white-glassmorphism text-white" />
                        <input type="text" placeholder="Via plateforme" className="w-96 mx-2 bg-transparent white-glassmorphism text-white" />
                        <input type="text" placeholder="Poste" className="w-96 mx-2 bg-transparent white-glassmorphism text-white" />
                        <input type="text" placeholder="Commentaire" className="w-96 mx-2 bg-transparent white-glassmorphism text-white" />
                        <button className="bg-red-400 text-white mx-2">Sauvegarder</button>
                    </div>
                }
            </div>
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <div className="flex flex-col w-full h-full bg-transparent white-glassmorphism">
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col w-full h-1/6">
                        <div className="w-full flex flex-row justify-between p-2 text-white">
                            <p className='w-20 mx-2'>{item.id}</p>
                            <div className='w-64 mx-2'>{item.timestamp}</div>
                            <div className='w-64 mx-2'>{item.firm}</div>
                            <div className='w-64 mx-2'>{item.via}</div>
                            <div className='w-64 mx-2'>{item.job}</div>
                            <div className='w-64 mx-2'>{item.comment}</div>
                            {item.status === "waiting" && <p className='w-64 mx-2'>{item.status}</p>}
                            {item.status === "refused" && <p className='w-64 mx-2'>{item.status}</p>}
                            {item.status === "accepted" && <p className='w-64 mx-2'>{item.status}</p>}
                            <button className="text-red-600 text-white mx-2">Modifier</button>
                            <button className="text-red-600 text-white mx-2">Supprimer</button>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Demo;