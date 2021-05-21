import React from 'react'
import UserGreeting from '../components/UserGreeting'
import ActionLink from '../components/ActionLink'
import Snackbar from '../components/Snackbar'
import InputElement from '../components/InputElement'
import {routes} from './index'
import students from '../students'




const Refund = () => {
  const [activeSession, setSession] = React.useState("verification");
  const [studentId, setStudentId] = React.useState("")
  const [transactions, setTransactions] = React.useState([])
  const [showSnackBar, setShowSnackBar] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorText, setErrorText] = React.useState("An error occurred...")
  const [toastType, setToastType] = React.useState("danger")

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
        setSession("lists")
        fetchTransactions();
    }else{
      setErrorText(`Student with id ${studentId} does not exist`)
      setIsLoading(false)
      handleSnackBarToggle()
    }
  }

  const fetchTransactions = () => {

    var reqHeaders = new Headers();
    reqHeaders.append("Authorization", "df15dd8100e07cba1d432b48a6a21743fe9de497");
    reqHeaders.append("Content-Type", "application/json");

    fetch(`http://localhost:8000/_api/transactions.php?id=${studentId}`,
    {
        method:  'GET',
        headers: reqHeaders,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setTransactions([...data])
    })
    .catch(error => {
        setIsLoading(false)
         console.error(error)
    });

  }

  const startRefund = (id) => {

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

          <div className="w-11/12 flex flex-col">
          <section className="w-10/12 m-auto p-4">
                  {activeSession === "verification" 
                  ? <section>
                      <InputElement required  onChange={(e) => setStudentId(e.target.value)} name="student_id" label="Enter Your Index Number"/>
                      <button className="bg-black text-white p-2 rounded-md w-full" onClick={verifyStudentId}>
                                {!isLoading ? "Proceed To Payment" : <Image src="/loading.svg" height="20px" width="auto"/>}
                        </button>
                  </section>
                  : <section>
                      <div className="bg-gray-500 p-2 flex flex-row text-white text-center">
                          <p className="w-1/4 mr-10">Amount</p>
                          <p className="w-1/4 mr-10">Method</p>
                          <p className="w-1/4 mr-10">Status</p>
                          <p className="w-1/4 mr-10">Country</p>
                          <p className="w-1/4 mr-10"></p>
                      </div>

                          {transactions.map(trans => 
                            <div key={trans.id} className="p-2 flex flex-row text-black font-bold text-center">
                                <p className="w-1/4 mr-10">GHC {trans.amount}</p>
                                <p className="w-1/4 mr-10">{trans.payment_method}</p>
                                <p className="w-1/4 mr-10">{trans.status}</p>
                                <p className="w-1/4 mr-10">{trans.country}</p>
                                <p className="w-1/4 mr-10 hover:underline hover:pointer-cursor" onClick={() => startRefund(trans.id)}>Request Refund</p>                             
                            </div>
                          )}
                    </section>
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

export default Refund;
