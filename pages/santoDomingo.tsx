
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'
import { fetchSantoDomingo } from '../utils/fetchSantoDomingo'
import { GetStaticProps } from 'next'


type Props = {
    towns: Town[];
    
}

const santoDomingo = ({ towns }: Props) => {
  return (
    <div className=''>
    <Header />
    <section className='flex-grow pt-14 px-6'>

    <div className="bg-white">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 lg:max-w-7xl lg:grid-cols-2 md:grid-cols-2 lg:px-8 pb-5">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-4 pb-5">
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/4f78776e896db2122c428f059004e06fb4e31a15-1600x1066.webp?rect=248,0,1073,1066"
              alt=""
              className="rounded-lg bg-gray-100" />
            
          </div>
          <div className=' px-8 grid grid-cols-1 sm:grid-cols-1 pb-5'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Santo Domingo</h2>
        
              <p className="mt-4 text-sm text-gray-500">Welcome to Santo Domingo, where the old world charm meets modern flair in a vibrant fusion of culture, history, and opportunity. As the capital city of the Dominican Republic, Santo Domingo offers travelers and investors alike a dynamic experience like no other.</p>
              <p className="mt-2 text-sm text-gray-500">Step into the heart of the city, where cobblestone streets lead you on a journey through centuries of history. Explore the UNESCO-listed Colonial Zone, where colorful colonial buildings stand as a testament to the city's rich past. Lose yourself in the narrow alleys lined with charming cafes, art galleries, and boutique shops, or immerse yourself in the lively atmosphere of Parque Colón, the solemn Cathedrals and National Monuments where locals and tourists alike gather to soak in the youthful energy of the city.</p>
              <p className="mt-2 text-sm text-gray-500">But Santo Domingo is more than just a living museum; it's a city on the move, embracing modernity while honoring its heritage. The capital city is music, is good food, is warm and pleasant people to be around. The bustling Malecón waterfront offers stunning views of the Caribbean Sea and serves as a gathering place for locals and visitors alike, while the vibrant nightlife scene keeps the party going well into the night.</p>
              <p className="mt-2 text-sm text-gray-500">Beyond its cultural appeal, Santo Domingo shines as a real estate destination, offering investors a variety of opportunities in both historic properties and modern developments. Whether you're seeking a commercial area for a business development in the heart of the city or a sleek luxury condominium overlooking the ocean, Santo Domingo it’s a jack of all trades.</p>
              <p className="mt-2 text-sm text-gray-500">In Santo Domingo, the past and present collide in a whirlwind of excitement and possibility. So come discover the magic of this dynamic city, where every corner holds a new adventure and every street is filled with the promise of discovery. Santo Domingo: where history meets opportunity, and every moment is an opportunity to create memories that last a lifetime.</p>
              
          </div>
          
        </div>
      </div>     
        
        <PropertyTownCard towns={towns} />
    
    
    

    
    </section>
    <Footer />
    
    </div>
  )
}

export default santoDomingo

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchSantoDomingo();
  

  return {
    props:{
      towns,
    },
    revalidate: 10,
  }
}