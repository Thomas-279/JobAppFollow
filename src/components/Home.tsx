import React, { useContext } from 'react';
import { darkModeProps } from '../components/utils/types';
import { CurrentUserContext } from '../Context/CurrentUserContext';
import { BsSearch } from 'react-icons/bs'
import Layout from '../components/shared/Layout';

const Home = ({ darkMode }: darkModeProps) => {
    const { currentUser } = useContext(CurrentUserContext);
    return (
        <Layout>
            <div className="h-96 flex flex-col justify-around items-center">
                <div className="mt-4 flex flex-col items-center">
                    <p className="font-bold text-2xl">Bienvenue sur l'application de suivi de recherche de jobs</p>
                    {currentUser ? <p className="text-center">Bienvenu {currentUser.name}</p> : null}
                </div>
                <div className="flex flex-col justify-center items-center mt-4 w-11/12 text-center">
                    <p className="text-base">Sur cet outil, vous aurez la possibilité d'ajouter et supprimer vos différentes recherches actuelles ou passées, ce afin de suivre votre recherche d'emploi.</p>
                </div>
                <div className='w-1/2 flex flex-row justify-around items-start'>
                    <BsSearch size={40} color='#e59500' className='rotate-90' />
                    <BsSearch size={40} color='#e59500' />
                </div>
            </div>
        </Layout>
    )
}

export default Home;