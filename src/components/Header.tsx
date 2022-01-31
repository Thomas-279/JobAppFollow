import React, { useContext } from "react"
import { Link } from 'react-router-dom';
import { GiBookshelf } from 'react-icons/gi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeContext } from "../Context/ThemeContext";
import { CurrentUserContext } from '../Context/CurrentUserContext';

const Header = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const { currentUser, handleLogout } = useContext(CurrentUserContext);

    const onChangeMode = () => {
        if (darkMode) {
            theme.dispatch({ type: "LIGHTMODE" });
        } else {
            theme.dispatch({ type: "DARKMODE" });
        }
    };
    return (
        <div className="w-full flex flex-col">
            <div className='w-full flex md:justify-center justify-between items-center p-2'>
                <div className="md:flex-[0.5] flex-initial justify-center items-center">
                    <GiBookshelf size={50} color={darkMode ? 'F9FAFB' : '#111827'} className="w-32 cursor-pointer"/>
                    <h1 className={`text-xl ${darkMode ? 'text-gray-50' : 'text-gray-900'}`}>JobAppFollow</h1>
                </div>
                
                <ul className={`md:flex hidden list-none flex-row justify-between items-center flex-initial ${darkMode ? 'text-gray-50' : 'text-gray-900'}`}>
                    <li className='text-xl font-semibold mx-4 cursor-pointer hover:border-b hover:border-white'>
                        <Link to='/'>Accueil</Link>
                    </li>
                    {currentUser?.isAuthenticated ? (
                        <li className='text-xl font-semibold mx-4 cursor-pointer hover:border-b hover:border-white'>
                            <Link to='/jobsearch'>Mes recherches</Link>
                        </li>) :
                        (
                        <li className='text-xl font-semibold mx-4 cursor-pointer hover:border-b hover:border-white'>
                            <Link to='/demo'>Demo</Link>
                        </li>
                        )}
                    {currentUser?.isAuthenticated ? (
                        <li className='text-xl font-semibold mx-4 cursor-pointer hover:border-b hover:border-white'>
                            <Link to="/login" onClick={handleLogout}>Déconnexion</Link>
                        </li>
                    ) : (
                        <li className='text-xl font-semibold mx-4 cursor-pointer hover:border-b hover:border-white'>
                            <Link to='/login'>Connexion</Link>
                        </li>
                    ) }
                </ul>
                <div className="w-1/6 flex flex-row justify-end items-center">
                    <BsFillMoonFill color="grey" size={20} />
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in mx-2">
                        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" onChange={onChangeMode} />
                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    <BsFillSunFill color="yellow" size={24} />
                </div>
            </div>
        </div>
    )
}

export default Header;