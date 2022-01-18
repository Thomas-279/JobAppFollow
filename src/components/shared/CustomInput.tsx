import React, { useState, useContext} from 'react';
import { DemoContext } from "../../Context/DemoContext";

const CustomInput = () => {
    const { data, setData } = useContext(DemoContext);
    const [openInput, setOpenInput] = useState(false);
    const [objectValue, setObjectValue] = useState({
            id: '',
            firm: '',
            date: '',
            via: '',
            job: '',
            comment: '',
            status: 'waiting',
        },
    );

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

    console.log(data)

    return (
        <div className="flex flex-col w-full mb-10">
            <button className="text-lg text-gray-200 m-5" onClick={() => setOpenInput(!openInput)}>Ajouter une recherche</button>
            {openInput && 
                <form className="w-full flex flex-row justify-between" onSubmit={handleSubmit} >
                    <input type="date" placeholder="date" className="w-3/12 mx-2 white-glassmorphism text-white p-2" name="date" value={objectValue.date} onChange={handleChange} />
                    <input type="text" placeholder="Société" className="w-96 mx-2 white-glassmorphism text-white p-2" name="firm" value={objectValue.firm} onChange={handleChange} />
                    <input type="text" placeholder="Via plateforme" className="w-96 mx-2 white-glassmorphism text-white p-2" name="via" value={objectValue.via} onChange={handleChange} />
                    <input type="text" placeholder="Job" className="w-96 mx-2 white-glassmorphism text-white p-2" name="job" value={objectValue.job} onChange={handleChange} />
                    <select name="status" id="status" className="w-96 mx-2 white-glassmorphism text-white p-2" value={objectValue.status} onChange={handleChange}>
                        <option value="accepted">Accepted</option>
                        <option value="refused">Refused</option>
                        <option value="waiting">Waiting</option>
                    </select>
                    <input type="text" placeholder="Commentaire" className="w-96 mx-2 white-glassmorphism text-white p-2" name="comment" value={objectValue.comment} onChange={handleChange} />

                    <button type="submit" className="w-96 mx-2 blue-glassmorphism text-white">Sauvegarder</button>
                </form>
            }
        </div>
    )
};

export default CustomInput;