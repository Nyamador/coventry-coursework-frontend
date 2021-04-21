import React from 'react';

const InputElement = ({type, name, label}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={`id_${name}`}>{label}</label>
            <input className="rounded-sm border border-gray-300 outline-none focus:border-gray-400 p-2" type={type ? type : "text"} name={name} id={`id_${name}`}/>
        </div>
    );
}

export default InputElement;
