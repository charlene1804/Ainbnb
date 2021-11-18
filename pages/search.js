import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';
const Search = ({searchResult}) => {
  console.log('searchResult dans le composant avec les données', searchResult)
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

            <main className='flex justify-center'>
                <section className='flex-grow pt-14 px-4 max-w-7xl '>
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
                <Fade left>
                <div className='flex flex-col'>
                     {
                    searchResult.searchResult.map(({img, location, title,description, price, total, star, details})=>(
                        console.log(img),
                        <InfoCard 
                        key={img}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        price={price}
                        total={total}
                        star={star}
                        details={details}
                        />
                    ))
                }
                </div>
                </Fade>
                </section>
                <section className='hidden xl:inline-flex xl:w-[600px] 2xl:w-[800px] w-full'>
                    <Map 
                    searchResult={searchResult}
                    className='w-full' 
                    />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

// we use getServerSide props => everytime we go to the search page, we build the page
// we can pass an argument to this fucion => context to pass router props into it
export async function getServerSideProps(context) {
    // const searchResult = await fetch('https://links.papareact.com/isz')
    // .then(response => response.json())

    // return {
    //     props: {
    //         searchResult,
    //     }
    // }
    const res = await fetch('http://localhost:3001/accommodation')
    const searchResult = await res.json()
    // .then(response => response.json())
    console.log(searchResult)
    return {
        props: {
            searchResult,
        }
    }
}