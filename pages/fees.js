import React from 'react';
import InputElement from '../components/InputElement';
import UserGreeting from '../components/UserGreeting';
import passwordHasher from '../utils/PasswordHasher';

const Fees = () => {
    const [formData, setFormData] = React.useState({
        amount: 0,
        customer_name: "",
        customer_email: "",
        customer_mobile: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/api/v1/links/',
        {
            method:  'POST',
            headers: {
                'Authorization': 'Token 11fd430bb58258c46f656613074376c8f17dfbdc',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

        console.log(passwordHasher("24012001"))
    }

    return (
        <div className="h-screen flex flex-col items-center">
            <UserGreeting/>
            <section className="w-5/12 m-auto p-4">
                    <form onSubmit={handleSubmit}>
                        <InputElement onChange={(e) => setFormData({...formData, amount: e.target.value})} name="amount" label="Amount"/>
                        <InputElement onChange={(e) => setFormData({...formData, customer_email: e.target.value})} type="email" name="email" label="Email"/>
                        <InputElement onChange={(e) => setFormData({...formData, customer_mobile: e.target.value})} type="tel" name="mobile" label="Mobile Number"/>
                        <InputElement type="submit" value="Pay Fees" className="mt-4 bg-blue-500 text-white cursor-pointer"/>
                    </form>
            </section>
        </div>
    );
}

export default Fees;
