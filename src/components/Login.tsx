import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { darkModeProps } from '../components/utils/types';
import { CurrentUserContext, UserType } from "../Context/CurrentUserContext";
import axios from 'axios';
import Api from './utils/api';

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
    const navigate = useNavigate();

    const handleChange = (e: any) => {
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
            axios.post("http://localhost:4000/api/user/login", payload)
                .then((response) => {
                    const { email, name, status, token } = response.data
                    setCurrentUser({email: email, name: name, status: status, isAuthenticated: true });
                    if (name) {
                        localStorage.setItem('follow_job_user_token', token)
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
            handleError('Please fill out all fileds');
            setFormData({... formData});
        }
    }
    
    return (
            <form onSubmit={handleSubmit} className={`w-11/12 h-1/2 flex flex-col justify-evenly ${darkMode ? 'white-glassmorphism' : 'blue-glassmorphism'}`}>
                <div className='flex flex-col justify-center'>
                    <div className="flex flex-col items-center mb-5">
                        <label className='mb-2'>Login :</label>
                        <input type="text" className="w-2/12 blue-glassmorphism px-2" name="email" value={formData?.email} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col items-center mb-5">
                        <label className='mb-2'>Password :</label>
                        <input type="password" className="w-2/12 blue-glassmorphism px-2" name="password" value={formData?.password} onChange={handleChange} />
                    </div>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <button type="submit" className="w-2/12 white-glassmorphism" disabled={isSubmitting}> {isSubmitting ? "Submitting..." : "Register"}</button>
                </div>
            </form>
    )
}

export default Login;