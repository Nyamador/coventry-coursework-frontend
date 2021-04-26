import React from 'react';

const Snackbar = ({children, className , variant, show}) => {
    return (
        <aside className={`z-10 padding-2 w-auto shadow-md transition-all transition-duration-1000 ${className} ${show ? "opacity-0" : "opacity-100"} ${variant === "success" ? "bg-green-500 text-white" : "bg-red-600 text-white"}`}>
            {children}
        </aside>
    );
}

export default Snackbar;
