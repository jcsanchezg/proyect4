import React from 'react';
import { Outlet } from 'react-router-dom';



const Layout = () => {


    return(
    <main className="bg-indigo-50">
        <header>
            <h1 className="bg-white py-4 text-center">
                <span className="text-xl font-bold text-gray-700">RESTAURANTE EL PARADOR DEL CABALLISTA</span>
            </h1>
            <nav className="mt-6">
                <ul className="flex justify-center  items-center space-x-4">
                    <li><a href="/Home" className="text-md font-semibold text-gray-600 hover:text-gray-800">Home</a></li>
                    <li><a href="/product" className="text-md font-semibold text-gray-600 hover:text-gray-800">Products</a></li>
                    <li><a href="/about" className="text-md font-semibold text-gray-600 hover:text-gray-800">About</a></li>
                </ul>
            </nav>
        </header>
        <section className="min-h-screen body-font text-gray-600">
            <div className="container mx-auto px-5 py-10">
                {/* <div className="-m-4 flex flex-wrap">
                    <Home />                    
                </div> */}
            <Outlet />
            </div>
        </section>
        <footer>
        <h5 className="text-center  py-4 bg-white">Restaurante el Parador del Caballista</h5>
            <h6>Pacho - Cundinamarca</h6>
            <h6>tel: 3103369269</h6>
            <h6>facebooksite</h6>
        </footer>
    </main>
    )
}

export default Layout;