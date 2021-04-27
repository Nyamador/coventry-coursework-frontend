import UserGreeting from '../components/UserGreeting'
import {routes} from './index'
import ActionLink from '../components/ActionLink'
import ProductCard from '../components/ProductCard'
import schoolSupplies from '../constants/get_data'

const shop = () => {
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
                    <section className="grid grid-cols-2 p-4 mt-10">
                        {
                            schoolSupplies.map( item =>  <ProductCard imageUrl={item.image} name={item.name} key={item.id} price={item.price} />)
                        }                       
                    </section>
            </div>
        </div>  

        </main>
    );
}

export default shop;
