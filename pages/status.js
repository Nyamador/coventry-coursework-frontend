import React from 'react';

const status = () => {
    return (
        <div className="w-full text-center h-screen">
            <div className="h-full w-8/12 m-auto flex flex-col justify-center">
                <div className="h-6 flex flex-row justify-center">
                <img src="/success.svg" height="50px"/>
                </div>
                <p>Payment completed successfully</p>
            </div>
        </div>
    );
}

export default status;
