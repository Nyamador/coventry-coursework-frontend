import UserGreeting from '../components/UserGreeting'
import ActionLink from '../components/ActionLink'
import {routes} from './index'


const Refund = () => {
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
                </section>
          </div>
        </div>
        
        </main>
    );
}

export default Refund;
