import Head from 'next/head'
import ActionLink from '../components/ActionLink'


const routes = [
  {
    name: "Pay Fees",
    logo: "/pay-fees.svg",
    route: "fees/",
    id: 1
  },
  {
    name: "School Supplies",
    logo: "/shop.svg",
    route: "shop/",
    id: 2
  },
  {
    name: "Request Refund",
    logo: "/refund.svg",
    route: "refund-request/",
    id: 3
  },
  {
    name: "Transaction History",
    logo: "/transactions.svg",
    route: "transactions/",
    id: 4
  }  
]

export default function Home() {
  return (
    <div className="h-screen">
          <section className="w-10/12 m-auto p-10 text-center flex-row">
            <h1 className="text-2xl">Welcome, <strong>Desmond</strong></h1>
          </section>

          <section className="grid grid-cols-4 w-10/12 m-auto shadow-md rounded-md">
              {routes.map(route => <ActionLink key={route.id} name={route.name} image={route.logo} href={route.route}/>)}
          </section>
    </div>
  )
}
