import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import Smallcard from '../components/Smallcard';

export default function Home({exploreData, cardsData}) {
  console.log(cardsData)
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto p-x-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* pull data from a server - API endpoint Static rendering: using when the information don't change */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {
                exploreData?.map((item, index)=>(
                      <Smallcard img = {item.img}
                      location = {item.location}
                      distance = {item.distance}
                      key={index}
                      />
                  )
                )
              }
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {
                  cardsData?.map((item, index)=>(
                        <MediumCard
                        img = {item.img}
                        title = {item.title}
                        key={index}
                        />
                    )
                  )
                }
              </div>
        </section>
        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlist curated by Ainbnb'
          buttonText='Get inspired'
        />
      </main>
        <Footer />
    </div>
  )
}
// static rendering, this only works on pages! this happen on the server !, tis page is loading once
export async function getStaticProps() {
  //request to the server
  const exploreData = await fetch('https://links.papareact.com/pyp')
  //we get the response
  .then((response)=> response.json());

  const cardsData = await fetch('https://links.papareact.com/zp1')
  //we get the response
  .then((response)=> response.json());


  return {
    props : {
      exploreData,
      cardsData
    }
  }
}