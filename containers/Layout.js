import React from 'react';

const Layout = ({children}) => {
    return (
        <div className="w-full">
                <div className="col-10-12">
                        {children}
                </div>
        </div>
    );
}

export default Layout;
