
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'
import { fetchVistaCana } from '../utils/fetchVistaCana'
import { GetStaticProps } from 'next'


type Props = {
    towns: Town[];
    
}

const vistaCana = ({ towns }: Props) => {
  return (
    <div className=''>
    <Header />
    <section className='flex-grow pt-14 px-6'>

    <div className="bg-white">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 lg:max-w-7xl lg:grid-cols-2 md:grid-cols-2 lg:px-8 pb-5">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-4 pb-5">
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/9c4a5d89795f5d4eabd96dba1d6c41661f496c41-915x515.jpg?rect=378,0,522,515"
              alt=""
              className="rounded-lg bg-gray-100" />
            
          </div>
          <div className=' px-8 grid grid-cols-1 sm:grid-cols-1 pb-5'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vista Cana</h2>
        
              <p className="mt-4 text-sm text-gray-500">Vista Cana, nestled alongside the highway that connects Bavaro-Punta Cana, emerges as an up and coming destination that seamlessly combines natural beauty with investment potential, making it a coveted gem in both tourism and real estate spheres. With its various landscapes including beautiful man-made beaches, golf course and sport city, Vista Cana captivates travelers and investors alike, offering a unique blend of relaxation and opportunity.</p>
              <p className="mt-2 text-sm text-gray-500">This community is still under development and growing for the next couple of years and located only 5 minutes away from Downtown Punta Cana and less than 15 minutes from the nearest beach. When visitors enter the beach club area, they are greeted with a chill vibe where they can unwind at the pool under the Caribbean sun or partake in a variety of activities like sport fishing, kayak, paddleboarding, etc.</p>
              <p className="mt-2 text-sm text-gray-500">Beyond its appeal as a vacation spot, Vista Cana shines as a real estate hotbed, attracting investors with its promising opportunities for growth and profitability. The region's robust tourism industry and favorable tax incentives make it an attractive destination for those seeking second homes, rental properties, or retirement residences. With a diverse range of real estate options available, from condo-hotel, apartments, townhouses and single family villas as well as lots for developers and singular clients. Vista Cana offers something for every discerning buyer.</p>
              <p className="mt-2 text-sm text-gray-500">Moreover, Vista Cana's strategic location within the Bavaro-Punta Cana area further enhances its investment appeal. Situated near major transportation hubs, including the Punta Cana International Airport, and with easy access to nearby attractions and amenities, Vista Cana presents an ideal opportunity for long-term appreciation and returns on investment.</p>

            
          </div>
          
        </div>
      </div>    
        
        <PropertyTownCard towns={towns} />
    
    
    

    
    </section>
    <Footer />
    
    </div>
  )
}

export default vistaCana

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchVistaCana();
  

  return {
    props:{
      towns,
    },
    revalidate: 10,
  }
}