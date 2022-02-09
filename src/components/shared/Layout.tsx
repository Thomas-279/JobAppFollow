import React from 'react';

const Layout = ({ children, darkMode }: any) => {
    return (
        <div className={`w-11/12 h-96 flex flex-col justify-center items-center p-5 ${darkMode ? 'darkbluebg' : 'darkbluebg'}`}>
            {children}
        </div>
    )
}

export default Layout;