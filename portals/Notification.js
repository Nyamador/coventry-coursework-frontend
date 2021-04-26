import React from 'react';
import ReactDOM from 'react-dom';

const Notification = ({children}) => {
     
    return ReactDOM.createPortal(
        children,
    <div>

    </div>)
}

export default Notification;
