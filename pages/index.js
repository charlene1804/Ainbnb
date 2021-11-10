import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Smallcard from '../components/Smallcard';

export default function Home({exploreData}) {
  console.log(exploreData)
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
      </main>
    </div>
  )
}
// static rendering, this only works on pages! this happen on the server !
export async function getStaticProps() {
  //request to the server
  const exploreData = await fetch('https://links.papareact.com/pyp')
  //we get the response
  .then((response)=> response.json());
  return {
    props : {
      exploreData
    }
  }
}