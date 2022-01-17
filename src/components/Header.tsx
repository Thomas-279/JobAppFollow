import React from "react"
import { Link } from 'react-router-dom';
import { GiBookshelf } from 'react-icons/gi';

const Header = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex md:justify-center justify-between items-center p-2'>
                <div className="md:flex-[0.5] flex-initial justify-center items-center">
                    <GiBookshelf size={50} color="white" className="w-32 cursor-pointer"/>
                    <h1 className="text-xl text-gray-200">JobAppFollow</h1>
                </div>
                
                <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                    <li className='text-xl font-semibold mx-4 cursor-pointer'>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li className='text-xl font-semibold mx-4 cursor-pointer'>
                        <Link to='/demo'>Demo</Link>
                    </li>
                    <li className='text-xl font-semibold mx-4 cursor-pointer'>
                        <Link to='/login'>Connexion</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;