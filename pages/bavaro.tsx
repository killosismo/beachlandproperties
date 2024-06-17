
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'

import { GetStaticProps } from 'next'
import { fetchBavaro } from '../utils/fetchBavaro'



type Props = {
    towns: Town[];
    
}

const bavaro = ({ towns }: Props) => {
  return (
    <div className=''>
    <Header />
    <section className='flex-grow pt-14 px-6'>

    <div className="bg-white">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 lg:max-w-7xl lg:grid-cols-2 md:grid-cols-2 lg:px-8 pb-5">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-4 pb-5">
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/bd4c235e665550304f8c15a3ef1150d24f99ec8a-728x455.jpg?rect=273,0,455,455"
              alt=""
              className="rounded-lg bg-gray-100" />
            
          </div>
          <div className=' px-8 grid grid-cols-1 sm:grid-cols-1 pb-5'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bavaro</h2>
        
              <p className="mt-4 text-sm text-gray-500">Bavaro is well known as Punta Cana’s counterpart as a premier tourist destination with its impressive array of beachfront and all-inclusive resorts and vacation rentals. Each day you can see all these vacationers take long walks at the beach or enjoy their favorite drink or meal at the various bars and restaurants near the renowned Playa Bavaro and Arena Gorda Beach.</p>
              <p className="mt-2 text-sm text-gray-500">The Bavaro area is ideal for renters (short or long term) because everything is so accessible that is easy to feel adventurous having multiple daytime recreational spots like Caribbean Lake Park, The Dolphinarium or nighttime hotspots like Coco Bongo, El Patio and much more. You are also surrounded by Malls and convenient stores that make all effortless, like Downtown Mall and San Juan Mall.</p>
              <p className="mt-2 text-sm text-gray-500">But Bavaro isn't just about relaxation and fun—it's also a savvy investment opportunity. It certainly is the economic engine of Punta Cana with its booming tourism industry, diverse businesses and each day growing more, Bavaro presents a wealth of options for those looking to invest in a piece of Caribbean paradise.</p>
              <p className="mt-2 text-sm text-gray-500">The real estate market in Bavaro is as diverse as it is promising, where you can find from luxury beachfront townhouses and condominiums to commercial properties ripe for development, either under development or ready to use and profit right away. You can also find opportunities inside popular communities like the Cocotal Golf Residence, Los Corales or White Sands. </p>
              <p className="mt-2 text-sm text-gray-500">So grab a Piña Colada, chill and stay tuned for updates, the best is yet to come to the area! </p>

            
          </div>
          
        </div>
      </div>

        
        <PropertyTownCard towns={towns} />
    
  
    </section>
    <Footer />
    
    </div>
  )
}

export default bavaro

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchBavaro();
  

  return {
    props:{
      towns,
    },
    revalidate: 10,
  }
}