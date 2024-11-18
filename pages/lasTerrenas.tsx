
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'
import { fetchLasTerrenas } from '../utils/fetchLasTerrenas'
import { GetStaticProps } from 'next'
import Head from 'next/head'


type Props = {
    towns: Town[];
    
}

const lasTerrenas = ({ towns }: Props) => {
  return (
    <div className=''>
      <Head>
            <title>Las Terrenas | Beachland Properties</title>
          </Head>
    <Header />
    <section className='flex-grow pt-14 px-6'>

    <div className="bg-white">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 lg:max-w-7xl lg:grid-cols-2 md:grid-cols-2 lg:px-8 pb-5">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-4 pb-5">
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/63b95e3790d4644d69685631513c40d1bf2cb483-960x642.jpg?rect=54,0,642,642"
              alt=""
              className="rounded-lg bg-gray-100" />
            
          </div>
          <div className=' px-8 grid grid-cols-1 sm:grid-cols-1 pb-5'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Las Terrenas</h2>
        
              <p className="mt-4 text-sm text-gray-500">Welcome to Las Terrenas, where the sands are as golden as the opportunities, and every day feels like a vacation. Tucked away on the northeastern coast of the Dominican Republic, just 30 minutes away from an international airport Las Terrenas thrive, blending Caribbean charm with a laid-back European vibe to create a destination that's as captivating as it is alluring.</p>
              <p className="mt-2 text-sm text-gray-500">Las Terrenas started out as a fishermans town where they sold the catch of day and still remains a great culinary destination. It boasts an array of stunning beaches, each with its own distinct character and allure from the chic Playa Bonita, where beach bars and water sports abound, to the exotic Playa Cosón, where palm-fringed shores offer a serene escape, visitors are spoiled for choice when it comes to seaside relaxation. The town's enrgetic waterfront promenade is lined with colorful shops, restaurants, and cafes, creating a lively atmosphere day and night.</p>
              <p className="mt-2 text-sm text-gray-500">But Las Terrenas isn't just about sun and sand—it's also a playground for the adventurous soul. Explore the tropical settings on horseback like the waterfalls, the rivers, the mountains and zip-line through the canopy of the Samaná Peninsula, or embark on a whale-watching excursion to catch a glimpse of these majestic creatures in their natural habitat.</p>
              <p className="mt-2 text-sm text-gray-500">Beyond its natural beauty, Las Terrenas shines as a real estate hotspot, attracting investors from all around the globe with its promising opportunities for growth and profitability. The town's popularity as a tourist destination, coupled with its stable economy and favorable investment climate, make it an attractive option for those seeking second homes, vacation rentals, or retirement properties. With a diverse range of real estate options available, from beachfront villas and condos to charming cottages and luxury estates, Las Terrenas offers something for every taste.</p>
              <p className="mt-2 text-sm text-gray-500">Additionally, Las Terrenas' relaxed vibe and diverse expatriate community add to its appeal as a real estate destination. The town's European influence is evident in its eclectic mix of architecture, culinary offerings, and cultural events, creating a unique and dynamic atmosphere that attracts visitors from around the world.</p>
              <p className="mt-2 text-sm text-gray-500">In Las Terrenas, the line between vacation and everyday life blurs effortlessly as residents and visitors alike embrace the laid-back Caribbean lifestyle amidst breathtaking natural beauty and warm hospitality. Whether seeking a relaxing beach retreat or a savvy investment opportunity, Las Terrenas promises endless possibilities for those fortunate enough to experience its charm.</p>
          </div>
          
        </div>
      </div>    
        
        <PropertyTownCard towns={towns} />
    
    
    

    
    </section>
    <Footer />
    
    </div>
  )
}

export default lasTerrenas

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchLasTerrenas();
  

  return {
    props:{
      towns,
    },
    revalidate: 10,
  }
}