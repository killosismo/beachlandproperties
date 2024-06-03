
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'
import { fetchSantiago } from '../utils/fetchSantiago'
import { GetStaticProps } from 'next'


type Props = {
    towns: Town[];
    
}

const santiago = ({ towns }: Props) => {
  return (
    <div className=''>
    <Header />
    <section className='flex-grow pt-14 px-6'>

    <div className="bg-white">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 lg:max-w-7xl lg:grid-cols-2 md:grid-cols-2 lg:px-8 pb-5">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-4 pb-5">
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/e9ed87ccbb929e7e64e70f037976289a71823d31-1800x817.jpg?rect=435,0,806,817"
              alt=""
              className="rounded-lg bg-gray-100" />
            
          </div>
          <div className=' px-8 grid grid-cols-1 sm:grid-cols-1 pb-5'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Santiago</h2>
        
              <p className="mt-4 text-sm text-gray-500">This is Santiago de los Caballeros, where the rhythm of merengue meets the charm of colonial architecture in a city that's as exciting as it is welcoming. As the second-largest city in the Dominican Republic, Santiago offers visitors and investors a unique blend of culture, history, and opportunity.</p>
              <p className="mt-2 text-sm text-gray-500">Step into the heart of the city, where the iconic Monumento a los Héroes de la Restauración proudly stands, overlooking bustling streets filled with colorful markets and lively cafes. Explore the historic Calle del Sol, where colonial-era buildings house trendy boutiques, art galleries, and chic restaurants serving up a fusion of flavors from around the world.</p>
              <p className="mt-2 text-sm text-gray-500">Santiago is more than just a cultural hub; it's also a playground for outdoor enthusiasts. From hiking in the great hills of the Cordillera Central to exploring the nearby waterfalls and rivers, there's no shortage of sightseeing to be had in and around the city.</p>
              <p className="mt-2 text-sm text-gray-500">The “Heart City” as it is also known as is considered the main business connector for the northern cities, a region rich in agricultural and industrial productivity. That being said when it comes to real estate, Santiago offers investors an interesting wealth of opportunities in both residential and commercial properties. Santiago has something to suit every purpose and budget whether you're looking for a historic mansion in the city center or a modern condominium with panoramic views of the surrounding mountains.</p>
              <p className="mt-2 text-sm text-gray-500">But perhaps the best thing about Santiago is its people. Warm, friendly, and always ready to welcome visitors with open arms, the people of Santiago embody the true spirit of Dominican hospitality. So come experience the magic of Santiago de los Caballeros, where culture meets commerce, and every day is a celebration of life.</p>
              
          </div>
          
        </div>
      </div>     
        
        <PropertyTownCard towns={towns} />
    
    
    

    
    </section>
    <Footer />
    
    </div>
  )
}

export default santiago

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchSantiago();
  

  return {
    props:{
      towns,
    },
    revalidate: 10,
  }
}