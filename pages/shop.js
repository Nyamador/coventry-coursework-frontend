import React, { useState } from 'react'
import UserGreeting from '../components/UserGreeting'
import {routes} from './index'
import ActionLink from '../components/ActionLink'
import ProductCard from '../components/ProductCard'
import schoolSupplies from '../constants/get_data'
import InputElement from '../components/InputElement'
import students from '../students'
import Snackbar from '../components/Snackbar'

const shop = () => {

    const [formData, setFormData] = React.useState({
        indexNumber: "",
        amountToPay: ""
    });
    const [isLoading, setIsLoading] = React.useState(false);
    const [studentId, setStudentId] = React.useState("")
    const [showSnackBar, setShowSnackBar] = React.useState(false)
    const [errorText, setErrorText] = React.useState("An error occurred...")
    const [aboutToBuy, setAboutToBuy] = React.useState(false)
    const [toastType, setToastType] = React.useState("danger")
    const [price, setPrice] = React.useState()
    

    const handleSnackBarToggle = () => {
        setShowSnackBar(true)
        setTimeout(() => {
            setShowSnackBar(false)
        }, 2000)
    }    



    const verifyStudentId = () => {
        if(students.hasOwnProperty(studentId)){
            setErrorText(`Hold on...Loading data for ${studentId}`)
            setToastType("success")
            handleSnackBarToggle()
            preparePayment(price)
        }else{
          setErrorText(`Student with id ${studentId} does not exist`)
          setIsLoading(false)
          handleSnackBarToggle()
        }
      }


    const preparePayment = (price) => {

        if(students.hasOwnProperty(studentId)){
            const student = students[studentId]

            let paymentData = {
                amount : price,
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
                window.location = `${data.link}&ext=${studenId}`;
            })
            .catch(error => {
                setIsLoading(false)
                 console.error(error)
            });
        }else{
            setErrorText(`Student with id ${studenId} does not exist`)
            setIsLoading(false)
            handleSnackBarToggle()
        }
    }

    const handleBuyClick = () => {
        // setIsLoading(true)
        setAboutToBuy(true)

    }


    return (
        <main className="h-screen bg-gray-100">
                <nav className="bg-white border-b">
                            <UserGreeting/>
                </nav>

        <div className="flex flex-row">
            <aside className="h-screen flex flex-col justify-center w-1/12 bg-white border-r">
                {routes.map(route => <ActionLink key={route.id} name={route.name} image={route.logo} href={route.route}/>)}
            </aside>

            <div className="w-11/12 flex flex-col">
                    <section className="grid grid-cols-2 p-4 mt-10">
                        {   aboutToBuy 
                            ? 
                                <section>
                                <InputElement required  onChange={(e) => setStudentId(e.target.value)} name="student_id" label="Enter Your Index Number"/>
                                <button className="bg-black text-white p-2 rounded-md w-full" onClick={verifyStudentId}>
                                        {!isLoading ? "Proceed To Payment" : <Image src="/loading.svg" height="20px" width="auto"/>}
                                </button>
                                </section>
                        :
                            schoolSupplies.map( item =>  <ProductCard imageUrl={item.image} name={item.name} key={item.id} price={item.price} onBuyClick={() => {
                                setPrice(item.price)
                                handleBuyClick(item.price)
                            }}/>)
                        }                       
                    </section>


                    <Snackbar className="w-5-12 m-auto p-2 rounded-md" variant={toastType} 
                            show={showSnackBar}>
                            <p>{errorText}</p>
                </Snackbar>    


            </div>
        </div>  
        
        </main>
    );
}

export default shop;
