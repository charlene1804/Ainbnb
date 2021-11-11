import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
const Search = () => {
    // to get the information from the url we use the router.query
    const router = useRouter()
    const {location, startDate, endDate, numberOfGuest} = router.query
    // we format the date with fns librairy
   const formatedStartDate = format(new Date(startDate), "dd MMMM yy")
   const formatedEndDate = format(new Date(endDate), "dd MMMM yy")
   const ranged= `${formatedStartDate} - ${formatedEndDate}`
    return (
        <div>
            <Header 
            placeholder={`${location} | ${ranged} | ${numberOfGuest} Guests`}
            />

            <main className='flex'>
                <section className='flex-grow pt-14 px-x'>
                    <p className='text-xs'>300+ Stays - {ranged} - for {numberOfGuest} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>stay in {location}</h1>
                
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
