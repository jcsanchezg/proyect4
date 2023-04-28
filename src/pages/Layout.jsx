import React from 'react';
import Product from './Products';
import About from './About';



const Layout = () => {


    return(
    <main class="bg-indigo-50">
        <header>
            <h1 class="bg-white py-4 text-center">
                <span class="text-xl font-bold text-gray-700">RESTAURANTE EL PARADOR DEL CABALLISTA</span>
            </h1>
            <nav class="mt-6">
                <ul class="flex justify-center  items-center space-x-4">
                    <li><a href="/" class="text-md font-semibold text-gray-600 hover:text-gray-800">Home</a></li>
                    <li><a href="/product" class="text-md font-semibold text-gray-600 hover:text-gray-800">Products</a></li>
                    <li><a href="/about" class="text-md font-semibold text-gray-600 hover:text-gray-800">About</a></li>
                </ul>
            </nav>
        </header>
        <section class="min-h-screen body-font text-gray-600">
            <div class="container mx-auto px-5 py-10">
                <div class="-m-4 flex flex-wrap">
                    <Product />                    
                </div>
            </div>
            <div>
                <About />
            </div>
        </section>
        <footer>
        <h5 class="text-center  py-4 bg-white">Restaurante el Parador del Caballista</h5>
            <h6>Pacho - Cundinamarca</h6>
            <h6>tel: 3103369269</h6>
            <h6>facebooksite</h6>
        </footer>
    </main>
    )
}

export default Layout;