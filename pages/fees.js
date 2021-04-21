import React from 'react';
import InputElement from '../components/InputElement';

const Fees = () => {
    return (
        <div className="h-screen">
            <div></div>
            <section className="w-6/12 m-auto p-4">
                    <InputElement name="amount" label="Amount"/>
            </section>
        </div>
    );
}

export default Fees;
