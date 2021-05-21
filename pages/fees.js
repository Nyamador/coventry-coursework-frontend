import React from 'react';
import InputElement from '../components/InputElement';
import UserGreeting from '../components/UserGreeting';
import passwordHasher from '../utils/PasswordHasher';
import ActionLink from '../components/ActionLink'
import Snackbar from '../components/Snackbar'
import Image from 'next/image'
import {routes} from './index'
import students from '../students'

const Fees = () => {
    const [formData, setFormData] = React.useState({
        indexNumber: "",
        amountToPay: ""
    });
    const [isLoading, setIsLoading] = React.useState(false);
    const [showSnackBar, setShowSnackBar] = React.useState(false)
    const [errorText, setErrorText] = React.useState("An error occurred...")

    const handleSnackBarToggle = () => {
        setShowSnackBar(true)
        setTimeout(() => {
            setShowSnackBar(false)
        }, 2000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        
        if(students.hasOwnProperty(formData.indexNumber)){
            const student = students[formData.indexNumber]

            let paymentData = {
                amount : formData.amountToPay,
                error_url: "/",
                success_url: "",
                customer_email: student.email,
                customer_mobile: student.mobile,
                customer_name: student.name,
            }
            var reqHeaders = new Headers();
            reqHeaders.append("Authorization", "df15dd8100e07cba1d432b48a6a21743fe9de497");
            reqHeaders.append("Content-Type", "application/json");

            fetch('http://localhost:8000/_api/links.php',
            {
                method:  'POST',
                headers: reqHeaders,
                body: JSON.stringify(paymentData)
            })
            .then(response => response.json())
            .then(data => {
                setIsLoading(false)
                window.location = `${data.link}&ext=${formData.indexNumber}`;
            })
            .catch(error => {
                setIsLoading(false)
                 console.error(error)
            });
        }else{
            setErrorText(`Student with id ${formData.indexNumber} does not exist`)
            setIsLoading(false)
            handleSnackBarToggle()
        }



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
                            <InputElement required  onChange={(e) => setFormData({...formData, indexNumber: e.target.value})} name="index_number" label="Enter Your Index Number"/>
                            <InputElement required onChange={(e) => setFormData({...formData, amountToPay: e.target.value})} name="amount_to_pay" label="Amount To Pay"/>
                            <button className="bg-black text-white p-2 rounded-md w-full" onClick={handleSubmit}>
                                {!isLoading ? "Proceed To Payment" : <Image src="/loading.svg" height="20px" width="auto"/>}
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
