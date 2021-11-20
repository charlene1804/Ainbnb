import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';
import Pagination from '../components/Pagination';
const Search = () => {
    const searchResult = [
        {
          id: 2,
          title: 'The Blue Room In London',
          description: '2 guest with 1 bedroom and 1 bed with shared bathrooms and Wifi and Washing Machine',
          type: 'Room',
          bedroom: 1,
          img: 'https://links.papareact.com/pro',
          price: 65,
          location: 'London',
          details: 'Private room in center of',
          star: 4,
          long: '-0.094116',
          lat: '51.51401',
          total: 650,
          user_id: 1
        },
        {
          id: 3,
          title: '5 Star Luxury Apartment',
          description: '3 guest ú 1 bedroom ú 1 bed ú 1.5 shared bthrooms ú Wifi ú Kitchen ú Free parking ú Washing Machine',
          type: 'room',
          bedroom: 1,
          img: 'https://links.papareact.com/8w2',
          price: 90,
          location: 'London',
          details: 'Nice room with a fantastic view',
          star: 5,
          long: '-0.109889',
          lat: '51.521245',
          total: 450,
          user_id: 1
        },
        {
          id: 4,
          title: 'Spacious Peaceful Modern Bedroom',
          description: '3 guest ú 1 bedroom ú 1 bed ú 1.5 shared bthrooms ú Wifi ú Free parking ú Dry Cleaning',
          type: 'room',
          bedroom: 1,
          img: 'https://links.papareact.com/xhc',
          price: 60,
          location: 'London',
          details: 'Duplex next to the city center of',
          star: 5,
          long: '-0.08472',
          lat: '51.510794',
          total: 580,
          user_id: 2
        },
        {
          id: 5,
          title: '30 mins to Oxford Street, Excel London',
          description: '1 guest with 2 bedroom with 1 bed with 1.5 shared bthrooms with Wifi and Kitchen and Free parking and Washing Machine',
          type: 'room',
          bedroom: 2,
          img: 'https://links.papareact.com/6as',
          price: 55,
          location: 'London',
          details: 'Private room in center of',
          star: 4,
          long: '-0.069961',
          lat: '51.472618',
          total: 320,
          user_id: 2
        },
        {
          id: 6,
          title: 'London Studio Apartments',
          description: '4 guest with 4 bedroom with 4 bed with 2 bathrooms with Free parking with Washing Machine',
          type: 'Studio',
          bedroom: 4,
          img: 'https://links.papareact.com/uz7',
          price: 35,
          location: 'London',
          details: 'studio duplex next to Big Ben',
          star: 3,
          long: '-0.135638',
          lat: '51.521916',
          total: 207,
          user_id: 3
        },
        {
          id: 7,
          title: 'Independant luxury studio apartment',
          description: '1 guest with 1 bedroom with 1 bed with 1.5 shared bthrooms with Wifi with Kitchen with Free parking with Washing Machine',
          type: 'room',
          bedroom: 1,
          img: 'https://links.papareact.com/xqj',
          price: 30,
          location: 'London',
          details: 'Cosy room next to shops, center',
          star: 4,
          long: '-0.0022275',
          lat: '51.5421655',
          total: 117,
          user_id: 3
        },
        {
          id: 8,
          title: 'Stay at this spacious Edwardian House',
          description: '2 guest with 3 bedroom with 1 bed with 1.5 shared bthrooms with Wifi with Kitchen',
          type: 'studio',
          bedroom: 3,
          img: 'https://links.papareact.com/hz2',
          price: 40,
          location: 'London',
          details: 'Entire Studio next to the city business area',
          star: 1,
          long: '-0.095091',
          lat: '51.48695',
          total: 157,
          user_id: 3
        },
        {
          id: 9,
          title: 'Superior double room with view over north London',
          description: '2 guests 1 bedroom 1 bed 1 shared bathroom',
          type: 'room',
          bedroom: 1,
          img: 'https://a0.muscache.com/im/pictures/c4c3109f-fe3a-4a43-b997-b3aa7ca357ec.jpg?im_w=1200',
          price: 29,
          location: 'London',
          details: 'Private room in rental unit',
          star: 5,
          long: '-0.12442118460620577',
          lat: '51.51411602772856',
          total: 300,
          user_id: 1
        },
        {
          id: 10,
          title: 'Uber Clean & Modern. Perfect for a stay',
          description: '2 guests 1 bedroom 2 beds 1 shared bathroom',
          type: 'studio',
          bedroom: 1,
          img: 'https://a0.muscache.com/im/pictures/miso/Hosting-47438714/original/faba1e98-5e3f-4501-9881-291cf225c008.jpeg?im_w=1200',
          price: 30,
          location: 'London',
          details: 'Entire rental unit',
          star: 3,
          long: '-0.12083867329988607',
          lat: '51.51493093196021',
          total: 250,
          user_id: 1
        },
        {
          id: 11,
          title: 'Doble room in Stockwell',
          description: '1 guest 1 bedroom 1 bed 2 shared bathrooms',
          type: 'room',
          bedroom: 1,
          img: 'https://a0.muscache.com/im/pictures/dcd58c69-6d3d-4d7a-9f00-5e947bcf5777.jpg?im_w=1200',
          price: 40,
          location: 'London',
          details: 'Private room in rental unit',
          star: 4,
          long: '-0.10334613530619663',
          lat: '51.5156692105426',
          total: 280,
          user_id: 2
        },
        {
          id: 12,
          title: 'KX Basic Double- shared bathroom',
          description: '2 guests 1 bedroom 1 bed 1 shared bathroom',
          type: 'room',
          bedroom: 1,
          img: 'https://a0.muscache.com/im/pictures/4cb30200-8eb0-413e-8823-405bf769fcb4.jpg?im_w=1200',
          price: 52,
          location: 'London',
          details: 'Room in hotel ',
          star: 1,
          long: '-0.11297912633793317',
          lat: '51.527387690566115',
          total: 320,
          user_id: 3
        },
        {
          id: 13,
          title: 'TEMPTING Studio Flat for 2 Guests at GREEN PARK',
          description: '2 guestsStudio 1 bed 1 bathroom',
          type: 'studio',
          bedroom: 1,
          img: 'https://a0.muscache.com/im/pictures/3cec5c9f-edf5-4943-8133-4b60fe3f47cf.jpg?im_w=1200',
          price: 50,
          location: 'London',
          details: 'Private room in rental unit',
          star: 4,
          long: '-0.08959742820252359',
          lat: '51.53171148788684',
          total: 420,
          user_id: 2
        },
        {
          id: 14,
          title: 'Spacious double top view Camden/Kings Cross ',
          description: '2 guests 1 bedroom 1 bedShared toilet with sink',
          type: 'room',
          bedroom: 1,
          img: 'https://a0.muscache.com/im/pictures/d1a6ef11-022b-444f-8b56-24a6cf0aba5b.jpg?im_w=1200',
          price: 36,
          location: 'London',
          details: 'Private room in rental unit',
          star: 4,
          long: '-0.06462555318458385',
          lat: '51.536078125651414',
          total: 610,
          user_id: 1
        },
        {
          id: 15,
          title: 'SMART MASTER Bedroom King',
          description: '3 guests 2 bedroom 2 beds 2 shared bathrooms',
          type: 'room',
          bedroom: 2,
          img: 'https://a0.muscache.com/im/pictures/33cefba0-7998-426f-8288-76d00b26d49b.jpg?im_w=1200',
          price: 25,
          location: 'London',
          details: 'Room in a great flat',
          star: 5,
          long: '-0.11964466648191774',
          lat: '51.51475882719427',
          total: 140,
          user_id: 2
        },
        {
          id: 16,
          title: 'Studio for 3 near King Cross',
          description: '3 guests Studio 2 beds1 bathroom',
          type: 'studio',
          bedroom: 2,
          img: 'https://a0.muscache.com/im/pictures/77047d7e-110f-4bf8-a9c5-051015871408.jpg?im_w=1200',
          price: 15,
          location: 'London',
          details: 'Entire rental unit',
          star: 5,
          long: '-0.1268368879748607',
          lat: '51.50333031791038',
          total: 180,
          user_id: 3
        },
        {
          id: 17,
          title: 'CLEAN APARTMENT MOMENTS FROM THE BRITISH MUSEUM',
          description: '3 guests 2 bedroom2 beds1 bathroom',
          type: 'studio',
          bedroom: 2,
          img: 'https://a0.muscache.com/im/pictures/91f5ad96-3228-4fee-b4ae-eba2e0b7cbab.jpg?im_w=1200',
          price: 18,
          location: 'London',
          details: 'Entire rental unit',
          star: 5,
          long: '-0.10660625379884436',
          lat: '51.497164734842784',
          total: 311,
          user_id: 2
        },
        {
          id: 18,
          title: 'Gorgeous studio in the centre',
          description: '2 guests Studio 2 bed1 bathroom',
          type: 'studio',
          bedroom: 2,
          img: 'https://a0.muscache.com/im/pictures/6f48e897-7b3f-40b3-93d0-cf2a8dd23515.jpg?im_w=1200',
          price: 24,
          location: 'London',
          details: 'Entire apartment',
          star: 2,
          long: '-0.11699278615722619',
          lat: '51.48949723798114',
          total: 211,
          user_id: 2
        },
        {
          id: 19,
          title: 'F22- 4TH STUDIO FITS 1',
          description: '1 guestStudio1 bed1 bathroom',
          type: 'studio',
          bedroom: 3,
          img: 'https://a0.muscache.com/im/pictures/e101120f-fbcf-4029-81d8-c20b21358fcd.jpg?im_w=720',
          price: 35,
          location: 'London',
          details: 'Entire flat',
          star: 2,
          long: '-0.1602062557892907',
          lat: '51.51597406792189',
          total: 201,
          user_id: 2
        },
        {
          id: 20,
          title: 'Golden Square - Classic Studio',
          description: '2 guests Studio 3 bed1 bathroom',
          type: 'studio',
          bedroom: 3,
          img: 'https://a0.muscache.com/im/pictures/2b22c4ba-b4ae-402c-8461-baea2c6f088b.jpg?im_w=1200',
          price: 39,
          location: 'London',
          details: 'Entire apartment',
          star: 5,
          long: '-0.14539992311782157',
          lat: '51.53390069888721',
          total: 403,
          user_id: 1
        },
        {
          id: 21,
          title: 'Irresistable Notting Hill Studio',
          description: '2 guests Studio 3 bed1 bathroom',
          type: 'studio',
          bedroom: 3,
          img: 'https://a0.muscache.com/im/pictures/3a96cb25-8f07-4f86-a283-c36e26b5e3f8.jpg?im_w=1200',
          price: 47,
          location: 'London',
          details: 'Entire apartment',
          star: 5,
          long: '-0.11684611322149863',
          lat: '51.553656646548404',
          total: 416,
          user_id: 4
        }
      ]
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
      // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchResult.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // to get the information from the url we use the router.query
    const router = useRouter()
    const {location, startDate, endDate, numberOfGuest} = router.query
    // we format the date with fns librairy
   const formatedStartDate = format(new Date(startDate), "dd MMMM yy")
   const formatedEndDate = format(new Date(endDate), "dd MMMM yy")
   const ranged= `${formatedStartDate} - ${formatedEndDate}`
   const dayStart = parseInt(format(new Date(formatedStartDate), 'dd'))
   const dayEnd = parseInt(format(new Date(formatedEndDate), 'dd'))
   const NightStay = (dayEnd - dayStart)

   const [priceCost, setPriceCost]=useState(null)

       

//COMMENTAIRE DE CHARLENE
//Bon voilà, je t'ai mis ress et filter en state local, comme ça le visuel s'update au changement (voir .map ligne 441)
const [ress, setRess] = useState(searchResult) 
const [filter, setFilter] = useState({}) 
console.log("ress:",ress, "filter:", filter)

//COMMENTAIRE DE CHARLENE
//La fonction qui va update tes filtres, appelée à chaque onChange
function changeFilters(key, value){
  let newFilter = filter;
  newFilter[key]= value
  setFilter(newFilter);
 
  //Si ton user enleve un filtre on le degage de l'objet (il faut assigner à tes input une valeur par defaut de 'none' pour les string ou '-1' pour les number)
  if(value === 'none' || value === -1){
    let newFilter = filter;
    delete newFilter[key];
    setFilter(newFilter)
  }
//COMMENTAIRE DE CHARLENE
//Puis on appelle filterStuff pour filtrer les Infocard à afficher en fonction des nouveaux filtres
 filterStuff();
}

//COMMENTAIRE DE CHARLENE
//La fonction qui filtre. 
function filterStuff(){
    setRess(searchResult.filter(function(item) {
 for (var key in filter) {
   if (item[key] === undefined || item[key].toLowerCase() != filter[key])
     return false;
 }
 return true;
})) ;
}



return (
     <div>
         <Header 
         placeholder={`${location} | ${ranged} | ${numberOfGuest} Guests`}
         />

         <main className='flex justify-center'>
             <section className='flex-grow pt-14 px-4 max-w-7xl '>
                 <p className='text-xs'>300+ Stays - {ranged} - for {numberOfGuest} guests</p>
                 <h1 className='text-3xl font-semibold mt-2 mb-6'>stay in {location}</h1>
             
             <div className=' lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                 {/* utility classname, we create a folder styles, with global, and create a utility classname, the globall.css must be import in _app.js */}
                 <button className='button '>Cancelation Flexibility</button>
                 {/* <button className='button'>Type of place</button> */}

                 <select className='button' onChange ={(event) => 
                     // console.log(event.target.value)}
                     {changeFilters("type", event.target.value)
                     }}
                     >
                     <option value='none' >Type of accomodation</option>
                     <option value='room' >Room</option>
                     <option value='studio' >Studio</option>
                     
                 </select>
                 {/* <button className='button'>Price</button> */}
             <div>
                 <input type="range" min="20" max="90" step='10' id="range" className='button' 
             onChange ={(event) => {setPriceCost(event.target.value)
               changeFilters("price", event.target.value)
         }
                     
                 } />
                 <output htmlFor="range" id="output">{priceCost}</output>
             </div>


                 <select className='button' onChange ={(event) => 
                     // console.log(event.target.value)}
                     {changeFilters("bedroom", parseInt(event.target.value))
                     }
                 }
                     >
                     <option value='-1'>Number of bedrooms</option>
                     <option value='1' >1</option>
                     <option value='2' >2</option>
                     <option value='3' >3</option>
                     <option value='4' >4</option>
                 </select>

                 {/* <button className='button'>Rooms and beds</button> */}
                 <button className='button'>More filters</button>
             </div>
             <Fade left>
             <div className='flex flex-col'>
                  {ress.map((res)=>
                  <InfoCard 
                  NightStay={res.NightStay}
                  key={res.img}
                  img={res.img}
                  location={res.location}
                  title={res.title}
                  description={res.description}
                  price={res.price}
                  total={res.total}
                  star={res.star}
                  details={res.details}
                  />
                  )}
             </div>
             </Fade>
                 <Pagination 
                 indexOfLastPost={indexOfLastPost}
                 indexOfFirstPost={indexOfFirstPost}
                 postsPerPage={postsPerPage} 
                 totalPosts={searchResult.length}
                 paginate={paginate}
                 />
             </section>
             <section className='hidden xl:inline-flex xl:w-[600px] 2xl:w-[800px] w-full'>
                 <Map 
                 currentPosts={currentPosts}
                 className='w-full' 
                 />
             </section>
         </main>

         <Footer />
     </div>
 )
}

export default Search
