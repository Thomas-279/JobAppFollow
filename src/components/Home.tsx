import React, { useContext } from 'react';
import { darkModeProps } from '../components/utils/types';
import { CurrentUserContext } from '../Context/CurrentUserContext';
import Layout from '../components/shared/Layout';

const Home = ({ darkMode }: darkModeProps) => {
    const { currentUser } = useContext(CurrentUserContext);
    return (
        <Layout darkMode={darkMode}>
            {/* <div className={`w-11/12 h-96 flex flex-col justify-center items-center p-5 ${darkMode ? 'darkbluebg' : 'darkbluebg'}`}> */}
                <div className="flex flex-col justify-between items-center mt-4">
                    <p className="text-2xl">Bienvenue sur l'application de suivi de recherche de jobs</p>
                    {currentUser != null && <p>Bienvenu {currentUser.name}</p>}
                </div>
                <div className="flex flex-col justify-between items-center mt-4">
                    <p className="text-base">Sur cet outil, vous aurez la possibilité d'ajouter et supprimer vos différentes recherches actuelles ou passées, ce afin de suivre votre recherche d'emploi.</p>
                </div>
            {/* </div> */}
        </Layout>
    )
}

export default Home;