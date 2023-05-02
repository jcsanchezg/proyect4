import React from 'react';
import { Outlet } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';



const Layout = () => {


    return(
    <main className="bg-indigo-50 font-mono">
        <header>
            <h1 className="bg-white py-4 text-center">
                <span className="text-xl font-bold text-gray-700">RESTAURANTE EL PARADOR DEL CABALLISTA</span>
            </h1>
            <nav className="mt-6">
                <ul className="flex justify-center  items-center space-x-4">
                    <li><a href="Home" className="text-md font-semibold text-gray-600 hover:text-gray-800 hover:font-monaco">Home</a></li>
                    <li><a href="/Product" className="text-md font-semibold text-gray-600 hover:text-gray-800">Products</a></li>
                    <li><a href="/About" className="text-md font-semibold text-gray-600 hover:text-gray-800">About</a></li>
                    <li><a href="/Reservation" className="text-md font-semibold text-gray-600 hover:text-gray-800">Reservation</a></li>
                </ul>
            </nav>
        </header>
        <section className="min-h-screen body-font text-gray-600">
            <div className="container mx-auto px-5 py-10">
            <Outlet />
            </div>
        </section>
        <footer className=' text-center'>
        <h5 className="py-4 bg-white">Restaurante el Parador del Caballista</h5>
            <h6>Pacho - Cundinamarca</h6>
            <h6>Movil: 3103369269</h6>
            <SocialIcon url="https://www.facebook.com/ RestauranteParadorDelCaballista" />
        </footer>
    </main>
    )
}

export default Layout;