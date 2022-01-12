import React from "react"

import logo from '../assets/icons/Icon-Electron.png'

const Header = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex md:justify-center justify-between items-center p-2'>
                <div className="md:flex-[0.5] flex-initial justify-center items-center">
                    <img src={logo} alt={logo} className="w-32 cursor-pointer" />
                    <h1 className="text-2xl text-gray-200">JobAppFollow</h1>
                </div>
                
                <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                    <li className='text-xl font-semibold mx-4 cursor-pointer'>Accueil</li>
                    <li className='text-xl font-semibold mx-4 cursor-pointer'>Connexion</li>
                </ul>
            </div>
            <div className="flex flex-col justify-between items-center mt-4">
                <p className="text-2xl text-white">Bienvenu sur l'outil de suivi de recherche de jobs</p>
                <p className="text-2xl text-white">Cette page est une demo</p>
            </div>
        </div>
    )
}

export default Header;