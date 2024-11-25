
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'
import { fetchCapCana } from '../utils/fetchCapCana'
import { GetStaticProps } from 'next'
import Head from 'next/head'



type Props = {
    towns: Town[];
    
}

const capCana = ({ towns }: Props) => {
  return (
    <div className=''>
      <Head>
            <title>Cap Cana | Beachland Properties</title>
          </Head>
    <Header />
    <section className='flex-grow pt-14 px-6'>

    <div className="bg-white">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 lg:max-w-7xl lg:grid-cols-2 md:grid-cols-2 lg:px-8 pb-5">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-4 pb-5">
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/ac95ca408164c7611bb25fbf99f65e60d91640ff-996x1024.jpg?rect=0,52,996,972"
              alt=""
              className="rounded-lg bg-gray-100" />
            
          </div>
          <div className=' px-8 grid grid-cols-1 sm:grid-cols-1 pb-5'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cap Cana</h2>
        
              <p className="mt-4 text-sm text-gray-500">Welcome to Cap Cana, where luxury meets leisure in a tropical paradise that's as exclusive as it is enchanting. Nestled along the pristine eastern coast of the Dominican Republic, Cap Cana beckons travelers and investors with its irresistible blend of opulence, natural beauty, and endless possibilities.</p>
              <p className="mt-2 text-sm text-gray-500">At the heart of Cap Cana lies its crown jewel, Juanillo Beach, a stretch of coastline so picturesque it seems plucked from a postcard. Beyond its chill beaches, Cap Cana boasts a plethora of world-class resorts and luxury accommodations, each offering unparalleled comfort and impeccable service.</p>
              <p className="mt-2 text-sm text-gray-500">For the discerning traveler, Cap Cana presents an array of exclusive experiences and amenities. Golf enthusiasts can tee off at the acclaimed and awarded Punta Espada Golf Club, designed by the legendary Jack Nicklaus and offering breathtaking views of the Caribbean Sea at every turn. Meanwhile, adventurers can explore the rugged beauty of the Scape Park, where zip lining, cave exploration, and horseback riding await amidst lush tropical landscapes. And if your love for sport fishing has no limits you can embark on a deep-sea fishing excursion from Cap Cana’s own Marina in search of the big catch. The possibilities are as endless as the horizon.</p>
              <p className="mt-2 text-sm text-gray-500">As a real estate destination, Cap Cana is a haven for investors seeking both luxury and value. From lavish oceanfront estates to chic condominiums with panoramic views, the market offers a diverse range of properties to suit every taste and budget. With a stable economy, favorable tax incentives, and a growing tourism industry, Cap Cana presents an unparalleled opportunity for those looking to invest in paradise. So come experience the magic of Cap Cana, where luxury knows no bounds, and paradise is just a heartbeat away.</p>

            
          </div>
          
        </div>
      </div>

        
        <PropertyTownCard towns={towns} />
    
  
    </section>
    <Footer />
    
    </div>
  )
}

export default capCana

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchCapCana();
  

  return {
    props:{
      towns,
    },
    revalidate: 10,
  }
}