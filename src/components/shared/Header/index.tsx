import React, { useContext } from "react"
import { Link } from 'react-router-dom';
import { GiBookshelf } from 'react-icons/gi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeContext } from "../../../Context/ThemeContext";
import { CurrentUserContext } from '../../../Context/CurrentUserContext';

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
        <header className="w-full flex flex-col">
            <div className='w-full flex md:justify-center justify-between items-center p-4'>
                <div className="md:flex-[0.5] flex-initial justify-center items-center">
                    <Link to="/">
                        <GiBookshelf size={50} color={darkMode ? 'F9FAFB' : '#1e222e'} className="w-32 cursor-pointer"/>
                        <h1 className={`text-xl ${darkMode ? 'text-gray-50' : 'text-gray-900'}`}>JobAppFollow</h1>
                    </Link>
                </div>
                
                <ul className={`md:flex list-none md:flex-row justify-between items-center flex-initial ${darkMode ? 'text-gray-50' : 'text-gray-900'}`}>
                    <li className={`text-lg font-semibold mx-4 cursor-pointer md:hover:border-b ${darkMode ? 'hover:border-gray-50' : 'hover:border-gray-900'}`}>
                        <Link to='/'>Accueil</Link>
                    </li>
                    {currentUser?.isAuthenticated ? (
                        <li className={`text-lg font-semibold mx-4 cursor-pointer md:hover:border-b ${darkMode ? 'hover:border-gray-50' : 'hover:border-gray-900'}`}>
                            <Link to='/jobsearch'>Mes recherches</Link>
                        </li>) :
                        (
                            <li className={`text-lg font-semibold mx-4 cursor-pointer md:hover:border-b ${darkMode ? 'hover:border-gray-50' : 'hover:border-gray-900'}`}>
                            <Link to='/demo'>Demo</Link>
                        </li>
                        )}
                    {currentUser?.isAuthenticated ? (
                        <li className='text-lg font-semibold mx-4 cursor-pointer hover:border-b hover:border-white darkredbg py-1 px-3 text-gray-50'>
                            <Link to="/login" onClick={handleLogout}>Déconnexion</Link>
                        </li>
                    ) : (
                        <li className='text-lg font-semibold mx-4 cursor-pointer hover:border-b hover:border-white lightorangebg py-1 px-3 text-gray-50'>
                            <Link to='/login'>Connexion</Link>
                        </li>
                    )}
                </ul>
                <div className="w-1/6 flex flex-row justify-center items-center mr-2 md:mr-0">
                    {darkMode ? (
                        <div>
                            <BsFillSunFill color="#e59500" size={24} onClick={onChangeMode}/>
                        </div>
                    ) : (
                        <div>
                            <BsFillMoonFill color="grey" size={24} onClick={onChangeMode}/>
                        </div>
                    )}
                </div>
            </div>
            <div className="h-[1px] w-full bg-gray-400" />
        </header>
    )
}

export default Header;