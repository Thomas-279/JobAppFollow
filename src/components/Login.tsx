import React, { useState } from 'react';
import { darkModeProps } from '../components/utils/types';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Login = ({ darkMode }: darkModeProps) => {
    const [user, setUser] = useState({email: '', password:'', status:'user'});

    const handleChange = (e:InputEvent) => {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value
        });
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(user)
        setUser({email: '', password:'', status:'user'})
    }
    
    return (
            <form className={`w-10/12 h-1/2 flex flex-col justify-evenly ${darkMode ? 'white-glassmorphism' : 'blue-glassmorphism'}`} onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center'>
                    <div className="flex flex-col items-center mb-5">
                        <label className='mb-2'>Login :</label>
                        <input type="text" className="w-2/12 blue-glassmorphism px-2" name="email" value={user.email} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col items-center mb-5">
                        <label className='mb-2'>Password :</label>
                        <input type="password" className="w-2/12 blue-glassmorphism px-2" name="password" value={user.password} onChange={handleChange} />
                    </div>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <button type="submit" className="w-2/12 white-glassmorphism">Connexion</button>
                </div>
            </form>
    )
}

export default Login;