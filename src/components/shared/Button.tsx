import React from 'react';
import { ButtonProps } from '../utils/types';

const Button = ({color, isSubmitting}: ButtonProps) => {
    return(
        <div className='flex flex-col items-center mb-5'>
            <button type="submit" className={`w-8/12 md:w-1/6 rounded-lg py-2 ${color}`} disabled={isSubmitting}> {isSubmitting ? "Submitting..." : "Register"}</button>
        </div>
    )
}

export default Button;