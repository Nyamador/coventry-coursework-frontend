import React from 'react'
import UserGreeting from '../components/UserGreeting'
import ActionLink from '../components/ActionLink'
import { routes } from './index'


const Transactions = () => {

    const [transactions, setTransactions] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:8000/api/v1/transactions/',
        {
            method:  'GET',
            headers: {
                'Authorization': 'Token 11fd430bb58258c46f656613074376c8f17dfbdc',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setTransactions([...data])
        })
        .catch(error => console.error(error))
    }, [])
    
    return (
        <main className="h-screen bg-gray-100">
            <nav className="bg-white border-b">
                        <UserGreeting/>
            </nav>

            <div className="flex flex-row">
            <aside className="flex flex-col justify-center w-1/12 bg-white border-r">
                {routes.map(route => <ActionLink key={route.id} name={route.name} image={route.logo} href={route.route}/>)}
            </aside>

            <div className="w-11/12 flex flex-col">
                    <section className="">
                            {transactions && transactions.map(transaction => <p key="2">{transaction.country}</p>)}
                    </section>
            </div>
            </div>
        </main>
    );
}

export default Transactions;
