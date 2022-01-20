import React, { useContext} from 'react';
import { DemoContext } from "../../Context/DemoContext";
import { darkModeProps } from '../utils/types';

const CustomInput = ({ darkMode }: darkModeProps) => {
    const { data, setData, openInput, setOpenInput, objectValue, setObjectValue } = useContext(DemoContext);

    function handleChange(e: any) {
        const value = e.target.value;
        setObjectValue({
            ...objectValue,
            id: data.slice(-1).pop().id +1,
            [e.target.name]: value
        })
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setData([
            ...data,
            {...objectValue}
        ])
    };

    return (
        <div className="flex flex-col w-full mb-10 max-w-full">
            <div className="w-full flex justify-center items-center">
                <button className="w-1/2 text-lg m-5 blue-glassmorphism" onClick={() => setOpenInput(!openInput)}>Ajouter une recherche</button>
            </div>
            {openInput && 
                <form className="w-full flex flex-wrap justify-between max-w-full" onSubmit={handleSubmit} >
                    <input type="date" placeholder="date" className={`w-3/12 mx-4 my-1 px-2 ${darkMode ? "blue-glassmorphism":'white-glassmorphism'}`} name="date" value={objectValue.date} onChange={handleChange} />
                    <input type="text" placeholder="Société" className={`w-3/12 mx-4 my-1 px-2 ${darkMode ? "blue-glassmorphism":'white-glassmorphism'}`} name="firm" value={objectValue.firm} onChange={handleChange} />
                    <input type="text" placeholder="Via plateforme" className={`w-3/12 mx-4 my-1 px-2 ${darkMode ? "blue-glassmorphism":'white-glassmorphism'}`} name="via" value={objectValue.via} onChange={handleChange} />
                    <input type="text" placeholder="Job" className={`w-3/12 mx-4 my-1 px-2 ${darkMode ? "blue-glassmorphism":'white-glassmorphism'}`} name="job" value={objectValue.job} onChange={handleChange} />
                    <select name="status" id="status" className={`w-3/12 mx-4 my-1 px-2 ${darkMode ? "blue-glassmorphism":'white-glassmorphism'}`} value={objectValue.status} onChange={handleChange}>
                        <option value="accepted">Accepted</option>
                        <option value="refused">Refused</option>
                        <option value="waiting">Waiting</option>
                    </select>
                    <input type="text" placeholder="Commentaire" className={`w-3/12 mx-4 my-1 px-2 ${darkMode ? "blue-glassmorphism":'white-glassmorphism'}`} name="comment" value={objectValue.comment} onChange={handleChange} />
                    <div className="w-full flex justify-center items-center">
                        <button type="submit" className={`w-3/12 mx-4 my-1 px-2 ${darkMode ? 'white-glassmorphism' : 'blue-glassmorphism'}`}>Sauvegarder</button>
                    </div>
                    
                </form>
            }
        </div>
    )
};

export default CustomInput;