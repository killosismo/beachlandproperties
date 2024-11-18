
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'
import { fetchPuntaCana } from '../utils/fetchPuntaCana'
import { GetStaticProps } from 'next'
import Head from 'next/head'


type Props = {
    towns: Town[];
    
}

const puntaCana = ({ towns }: Props) => {
  return (
    <div className=''>
      <Head>
            <title>Punta Cana | Beachland Properties</title>
          </Head>
    <Header />
    <section className='flex-grow pt-16 px-6'>
    <div className="bg-white">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 lg:max-w-7xl lg:grid-cols-2 md:grid-cols-2 lg:px-8 pb-5">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-4 pb-5">
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/865055cb344795046713d3bf7e105c41ac1324db-1920x1440.jpg?rect=399,0,1474,1440"
              alt=""
              className="rounded-lg bg-gray-100" />
            
          </div>
          <div className=' px-8 grid grid-cols-1 sm:grid-cols-1 pb-5'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Punta Cana</h2>
        
              <p className="mt-4 text-sm text-gray-500">Just 2 hours from the Capital of the Dominican Republic and merely 5 minutes from it’s own private airport with the same name, Punta Cana stands as a shimmering jewel in the Caribbean, captivating travelers with its unspoiled beaches, turquoise waters, and cheerful culture. Renowned as one of the most sought-after tourist destinations in the region, Punta Cana's allure extends far beyond its sun-drenched shores, making it a thriving hub for both tourism and business.</p>
              <p className="mt-2 text-sm text-gray-500">As a tourist haven, Punta Cana boasts an array of luxurious resorts and boutique hotels, each offering an unparalleled blend of comfort, style, and Caribbean charm. From sprawling all-inclusive properties overlooking the ocean to intimate eco-friendly retreats settled inside affluent tropical gardens, visitors are spoiled for choice when it comes to accommodations. The region's pristine beaches, including the famed Playa Blanca, Bávaro Beach and Macao Beach, provide the perfect backdrop for a myriad of water-based activities, from snorkeling and scuba diving to parasailing and party-boats.</p>
              <p className="mt-2 text-sm text-gray-500">Beyond its stunning beaches and vibrant real estate market, Punta Cana boasts a rich cultural heritage and a wealth of activities for residents and visitors alike. From exploring the nearby historic sites of Higüey and Altos de Chavón to sampling local delicacies at street food markets and enjoying lively merengue music at any bar, there's no shortage of experiences to delight the senses and enrich the soul.</p>
              <p className="mt-2 text-sm text-gray-500">In Punta Cana, the line between vacation and everyday life blurs effortlessly, as residents and visitors embrace the laid-back Caribbean lifestyle within breathtaking natural beauty and unrivalled hospitality. As both a tourist haven and a real estate hotspot, Punta Cana shines as a radiant gem on the shores of the Caribbean, promising endless possibilities for those fortunate enough to experience its magic.</p>

            
          </div>
          
        </div>
      </div>


        <PropertyTownCard towns={towns} />
    
    </section>
    <Footer />
    
    </div>
  )
}

export default puntaCana

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchPuntaCana();
  

  return {
    props:{
      towns,
    },
    revalidate: 10,
  }
}