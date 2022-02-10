import React, { useState, useContext } from 'react';
import { objectValueProps } from '../utils/types';
import { CurrentUserContext } from '../../Context/CurrentUserContext';
import api from '../utils/api';
import Loader from '../shared/Loader';

const CustomInput = ({ data, setData, darkMode }: any) => {
    const { currentUser } = useContext(CurrentUserContext);
    const [openInput, setOpenInput] = useState<Boolean>(false);
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [objectValue, setObjectValue] = useState<objectValueProps>({
            id: null,
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
        setIsLoading(true);
        setData([
            ...data,
            {...objectValue}
        ]);
        const token = localStorage.getItem('auth-token');
        if (token && currentUser?.isAuthenticated) {
            const config = { headers: { 'auth-token': token}}
            api.post('api/rows/addone/', objectValue, config)
            .then((response) => {
                console.log('well done, job added')
            })
            .catch((error) => console.log(error))
        }


        setObjectValue({
            id: null,
            firm: '',
            date: '',
            via: '',
            job: '',
            comment: '',
            status: 'waiting',
        })
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col w-full mb-5 max-w-full">
            <div className="w-full flex justify-center items-center">
                <button className="w-3/12 text-lg m-5 orangebg rounded-lg py-1" onClick={() => setOpenInput(!openInput)}>Ajouter une recherche</button>
            </div>
            {openInput && 
                <form className="w-full flex flex-wrap justify-between max-w-full" onSubmit={handleSubmit} >
                    <input type="date" placeholder="date" className={`w-3/12 mx-4 my-1 px-2 rounded-lg ${darkMode ? 'darkbg':'lightbg text-gray-900'}`} name="date" value={objectValue.date} onChange={handleChange} required />
                    <input type="text" placeholder="Société" className={`w-3/12 mx-4 my-1 px-2 rounded-lg ${darkMode ? 'darkbg':'lightbg text-gray-900'}`} name="firm" value={objectValue.firm} onChange={handleChange} required />
                    <input type="text" placeholder="Via plateforme" className={`w-3/12 mx-4 my-1 px-2 rounded-lg ${darkMode ? 'darkbg':'lightbg text-gray-900'}`} name="via" value={objectValue.via} onChange={handleChange} required />
                    <input type="text" placeholder="Job" className={`w-3/12 mx-4 my-1 px-2 rounded-lg ${darkMode ? 'darkbg':'lightbg text-gray-900'}`} name="job" value={objectValue.job} onChange={handleChange} required />
                    <select name="status" id="status" className={`w-3/12 mx-4 my-1 px-2 rounded-lg ${darkMode ? 'darkbg':'lightbg text-gray-900'}`} value={objectValue.status} onChange={handleChange} required>
                        <option value="accepted">Acceptée</option>
                        <option value="refused">Refusée</option>
                        <option value="waiting">En attente</option>
                    </select>
                    <input type="text" placeholder="Commentaire" className={`w-3/12 mx-4 my-1 px-2 rounded-lg ${darkMode ? 'darkbg':'lightbg text-gray-900'}`} name="comment" value={objectValue.comment} onChange={handleChange} />
                    <div className="w-full flex justify-center items-center my-3">
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button type="submit" className='w-3/12 mx-4 rounded-lg py-1 bg-green-600'>Sauvegarder</button>
                        )}
                    </div>
                    
                </form>
            }
        </div>
    )
};

export default CustomInput;