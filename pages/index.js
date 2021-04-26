import ActionLink from '../components/ActionLink'
import UserGreeting from '../components/UserGreeting'


export const routes = [
  {
    name: "Pay Fees",
    logo: "/pay-fees.svg",
    route: "/fees",
    id: 1
  },
  {
    name: "School Supplies",
    logo: "/shop.svg",
    route: "/shop",
    id: 2
  },
  {
    name: "Request Refund",
    logo: "/refund.svg",
    route: "/refund-request",
    id: 3
  },
  {
    name: "Transaction History",
    logo: "/transactions.svg",
    route: "/transactions",
    id: 4
  }  
]

export default function Home() {
  return (
    <>
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
                </section>
          </div>
    </div>

    </main>
      <Notification>
        <p>dsfdf</p>
      </Notification>
    </>
  )
}

