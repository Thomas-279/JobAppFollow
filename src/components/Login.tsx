import React from 'react';

const Login = () => {
    return (
        <div className="w-full h-full flex justify-center items-center" >
            <div className="w-1/2 h-1/2 flex flex-col justify-evenly white-glassmorphism text-white">
                <div className='flex flex-col justify-center'>
                    <div className="flex flex-col items-center mb-5">
                        <label className='mb-2'>Login :</label>
                        <input type="text" />
                    </div>
                    <div className="flex flex-col items-center mb-5">
                        <label className='mb-2'>Password :</label>
                        <input type="password" />
                    </div>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <button className="w-3/12">Connexion</button>
                </div>
            </div>
        </div>
    )
}

export default Login;