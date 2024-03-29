import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { darkModeProps } from '../../utilities/types';
import { CurrentUserContext } from "../../../Context/CurrentUserContext";
import { UserForm } from '../../utilities/types';
import api from '../../utilities/api';
import Layout from '../ui/Layout';
import Button from '../ui/Button';

type LoginProps = {
    darkMode: darkModeProps;
}

const Login = ({ darkMode }: LoginProps) => {
    const [formData, setFormData] = useState<UserForm>({
        isSubmitting: false,
        email: "",
        password: "",
    });
    const { isSubmitting } = formData;
    const { setCurrentUser } = useContext(CurrentUserContext);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleError = (err: string) => {
        alert(err);
        setFormData({
            ...formData,
            isSubmitting: false,
        });
    };

    const handleSubmit = (e:React.FormEvent) => {
        e?.preventDefault();
        setFormData({ ...formData, isSubmitting: true });
        const isValid = formData.email && formData.password;
        if (isValid) {
            setFormData({ ...formData, isSubmitting: false })
            const payload = { email: formData.email, password: formData.password }
            api.post("http://localhost:4000/api/user/login", payload)
                .then((response) => {
                    const { email, name, status, token } = response.data
                    setCurrentUser({email: email, name: name, status: status, isAuthenticated: true });
                    if (name) {
                        localStorage.setItem('auth-token', token)
                    } else {
                        handleError('An error occurred');
                    }
                    navigate('/');
                })
                .catch((error) => {
                    handleError('An error occurred');
                    console.error("Registration error", error);
                    setFormData({
                        ...formData,
                        isSubmitting: false,
                    });
                });
        }  else {
            handleError('Veuillez remplir les champs');
            setFormData({... formData});
        }
    }
    
    return (
        <Layout>
            <form onSubmit={handleSubmit} className='w-full h-96 flex flex-col justify-center'>
                <div className='flex flex-col justify-center'>
                    <div className="flex flex-col items-center mb-5">
                        <input placeholder="Login" type="text" className={`w-10/12 md:w-3/12 ${darkMode ? 'darkbg text-gray-50' : 'lightbg text-gray-900'} px-4 rounded-lg p-2`} name="email" value={formData?.email} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col items-center mb-5">
                        <input placeholder="Password" type="password" className={`w-10/12 md:w-3/12 ${darkMode ? 'darkbg text-gray-50' : 'lightbg text-gray-900'} px-4 rounded-lg p-2`} name="password" value={formData?.password} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <Button isSubmitting={isSubmitting} color='orangebg' />
                </div>
            </form>
        </Layout>
    )
}

export default Login;