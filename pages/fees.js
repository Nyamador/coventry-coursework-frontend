import React from 'react';
import InputElement from '../components/InputElement';
import UserGreeting from '../components/UserGreeting';
import passwordHasher from '../utils/PasswordHasher';
import ActionLink from '../components/ActionLink'
import Snackbar from '../components/Snackbar'
import Image from 'next/image'
import {routes} from './index'

const Fees = () => {
    const [formData, setFormData] = React.useState({
        amount: 0,
        customer_name: "",
        customer_email: "",
        customer_mobile: "",
        success_url: "http://locahost:3000/success",
        error_url: "http://localhost:3000/error"
    });
    const [isLoading, setIsLoading] = React.useState(false);
    const [showSnackBar, setShowSnackBar] = React.useState(false)
    const [errorText, setErrorText] = React.useState("An error occurred...")

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
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
        .then(data => {
            setIsLoading(false)
            console.log(data)}
        )
        .catch(error =>{
            setIsLoading(false)
             console.error(error)
            })

        console.log(passwordHasher("24012001"))
    }

    return (
        <main className="h-screen bg-gray-100">
            <nav className="bg-white border-b">
                        <UserGreeting/>
            </nav>

            <div className="flex flex-row">
                    <aside className="flex flex-col justify-center w-1/12 bg-white border-r h-screen">
                        {routes.map(route => <ActionLink key={route.id} name={route.name} image={route.logo} href={route.route}/>)}
                    </aside>

                    <div className="w-11/12 flex flex-col h-screen">
                        <section className="w-5/12 m-auto p-4">
                            <form>
                            <InputElement onChange={(e) => setFormData({...formData, customer_name: e.target.value})} name="name" label="Fullname"/>
                            <InputElement onChange={(e) => setFormData({...formData, customer_email: e.target.value})} type="email" name="email" label="Email"/>
                            <InputElement onChange={(e) => setFormData({...formData, customer_mobile: e.target.value})} type="tel" name="mobile" label="Mobile Number"/>
                            <InputElement onChange={(e) => setFormData({...formData, amount: e.target.value})} name="amount" type="number" label="Amount"/>
                            <button className="bg-black text-white p-2 rounded-md w-full" onClick={handleSubmit}>
                                {!isLoading ? "Pay Fees" : <Image src="/loading.svg" height="20px" width="auto"/>}
                            </button>
                            </form>
                        </section>
                        <Snackbar className="w-5-12 m-auto p-2 rounded-md" variant="danger" 
                            show={showSnackBar}>
                            <p>{errorText}</p>
                        </Snackbar>
                    </div>  
            </div>
        </main>

    );
}

export default Fees;
