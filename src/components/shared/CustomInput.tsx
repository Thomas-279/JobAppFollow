import React, { useState, useContext} from 'react';
import { DemoContext } from "../../Context/DemoContext";

const CustomInput = () => {
    const { data, setData } = useContext(DemoContext);
    const [openInput, setOpenInput] = useState(false);
    const [value, setValue] = useState({
            id: '',
            firm: '',
            timestamp: '',
            via: '',
            job: '',
            comment: '',
            status: '',
        },
    );

    function handleChange(evt: any) {
        const value = evt.target.value;
        setValue({
            ...value,
            [evt.target.name]: value
        });
        console.log(value)
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();

        // setData({
        //     ...data,
        //     ...value
        // })
    }

    return (
        <div className="flex flex-col w-full mb-10">
            <button className="text-lg text-gray-200 m-5" onClick={() => setOpenInput(!openInput)}>Ajouter une recherche</button>
            {openInput && 
                <form className="w-full flex flex-row justify-between" onSubmit={handleSubmit} >
                    <input type="date" placeholder="date" className="w-96 mx-2 white-glassmorphism text-white" name="timestamp" value={value.timestamp} onChange={handleChange} />
                    <input type="text" placeholder="Société" className="w-96 mx-2 white-glassmorphism text-white" name="firm" value={value.firm} onChange={handleChange} />
                    <input type="text" placeholder="Via plateforme" className="w-96 mx-2 white-glassmorphism text-white" name="via" value={value.via} onChange={handleChange} />
                    <input type="text" placeholder="Job" className="w-96 mx-2 white-glassmorphism text-white" name="job" value={value.job} onChange={handleChange} />
                    <input type="text" placeholder="Commentaire" className="w-96 mx-2 white-glassmorphism text-white" name="comment" value={value.comment} onChange={handleChange} />
                    <button type="submit" className="w-96 mx-2 white-glassmorphism text-white">Sauvegarder</button>
                </form>
            }
        </div>
    )
};

export default CustomInput;