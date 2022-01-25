import React, { useState, useContext } from 'react';
import { BsEmojiAngryFill } from 'react-icons/bs';
import { darkModeProps } from '../components/utils/types';
import { CurrentUserContext } from "../Context/CurrentUserContext";

type UserForm = {
    isSubmitting: boolean;
    email: string;
    password: string;
};

const Login = ({ darkMode }: darkModeProps) => {
    const [formData, setFormData] = useState<UserForm>({
        isSubmitting: false,
        email: "",
        password: "",
    });
    const { isSubmitting, email, password } = formData;
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e:React.FormEvent) => {
        e?.preventDefault();
        setFormData({ ...formData, isSubmitting: true });

        if (formData.email === "user@gmail.com") {
            setFormData({ ...formData, isSubmitting: false })
            setCurrentUser(formData)
        }
    }
    
    return (
            <form onSubmit={handleSubmit} className={`w-11/12 h-1/2 flex flex-col justify-evenly ${darkMode ? 'white-glassmorphism' : 'blue-glassmorphism'}`}>
                <div className='flex flex-col justify-center'>
                    {/* {user.isAuthenticated ?
                    <div className="flex flex-col items-center mb-5">
                        <p>Merci</p>
                        <p>Vous êtes connecté</p>
                    </div>
                    :
                    <> */}
                    <div className="flex flex-col items-center mb-5">
                        <label className='mb-2'>Login :</label>
                        <input type="text" className="w-2/12 blue-glassmorphism px-2" name="email" value={currentUser?.email} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col items-center mb-5">
                        <label className='mb-2'>Password :</label>
                        <input type="password" className="w-2/12 blue-glassmorphism px-2" name="password" value={currentUser?.password} onChange={handleChange} />
                    </div>
                    {/* </>
                } */}
                </div>
                <div className='flex flex-col items-center mb-5'>
                <button type="submit" className="w-2/12 white-glassmorphism" disabled={isSubmitting}> {isSubmitting ? "Submitting..." : "Register"}</button>
                    {/* {user.isAuthenticated && <button className="w-2/12 white-glassmorphism" onClick={handleLogout}>Déconnexion</button>} */}
                    {/* {!user.isAuthenticated && <button type="submit" className="w-2/12 white-glassmorphism">Connexion</button>} */}
                </div>
            </form>
    )
}

export default Login;