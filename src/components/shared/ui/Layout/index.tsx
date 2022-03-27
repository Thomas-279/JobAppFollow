import React from 'react';

const Layout = ({ children }: any) => {
    return (
        <div className='w-11/12 min-h-96 flex flex-col justify-center items-center p-5 darkbluebg'>
            {children}
        </div>
    )
}

export default Layout;