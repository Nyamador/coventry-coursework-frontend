import React from 'react'

const Navbar = () => {
        return <nav className="flex flex-row p-4 items-center">
            <div className="w-3/12">logo</div>
            
            <div className="w-6/12 mx-auto">
                <input type="text" className="w-8/12 border border-gray-200 rounded-md p-2 outline-none focus:ring-2 focus:ring-gray-300" placeholder="Search for items, brands and products"/>
            </div>

            <div className="w-3/12 flex flex-row content-center">
                    <div className="mr-4">
                        <p>Cart : 2</p>
                    </div>

                    <div>
                        <p><span>Hello,</span> Desmond </p>
                    </div>
            </div>
        </nav>
}

export default Navbar;