import React from 'react';


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
        <div>
            {transactions && transactions.map(transaction => <p key="2">{transaction.country}</p>)}
        </div>
    );
}

export default Transactions;
