import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Search = () => {
    
    return (
        <div>
            <Header />

            <main className='flex'>
                <section className='flex-grow pt-14 px-x'>
                    <p className='text-xs'>300+ Stays for 5 number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>stay in Mars</h1>
                
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    {/* utility classname, we create a folder styles, with global, and create a utility classname, the globall.css must be import in _app.js */}
                    <p className='button '>Cancelation Flexibility</p>
                    <p className='button'>Type of place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and beds</p>
                    <p className='button'>More filters</p>
                </div>
                
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search
