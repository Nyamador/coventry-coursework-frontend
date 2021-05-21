import React from 'react';

const InputElement = ({className, value, type, name, label, onChange, required}) => {
    return (
        <div className="flex flex-col">
            <label required={required} className="text-sm mb-2" htmlFor={`id_${name}`}>{label}</label>
            <input required={required} value={value} onChange={onChange} required={true} className={`rounded-md border border-gray-300 outline-none focus:border-gray-400 p-2 mb-4 ${className}`} type={type ? type : "text"} name={name} id={`id_${name}`}/>
        </div>
    );
}

export default InputElement;
