import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import { sanityClient, urlFor } from "../sanity"
import { Property, ForInvestors, Town } from '../typings'
import LargeImageCard from '/public/LargeImageCard.jpg'
import { fetchForInvestors } from '../utils/fetchForInvestors'
import { fetchProperty } from '../utils/fetchProperty'
import { fetchTown } from '../utils/fetchTown'


type Props = {
  properties: Property[];
  forInvestorss: ForInvestors[];
  towns: Town[];
  
  
};




const Home = ( { properties, forInvestorss, towns }: Props) => {
  
  return (
    <div className="">
      <Head>
        <title>Beachland Properties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Last Properties Added</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-2 md:p-6'>
        {properties?.map((property) => (
          <Link key={property._id} href={`/property/${property.slug.current}`}>
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
            
              <img className='h-68 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(property.mainImage).url()!} alt="" />
              <div className=' p-5 justify-between bg-white'>
                <p className='text-lg font-bold'>{property.title}</p>
                <div className=''>
                <p>US${property.price}</p>
                  <div className='flex space-x-4'>
                  <p>Bedrooms: {property.bedrooms}</p>
                <p>Bathrooms: {property.bathrooms}</p>
                  </div>
                </div>
              </div>
            </div>

          </Link>
          
        )

        )}
      </div>
        
      </section>
      <LargeCard 
      img={LargeImageCard} 
      title="Keep up to date for awesome deals!" 
      description="Explore Punta Cana’s amazing real estate deals" 
      buttonText="Contact Now"
      />
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>For Investors</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-2 md:p-6'>
        {forInvestorss?.map((forInvestors) => (
          <Link key={forInvestors._id} href={`/forInvestors/${forInvestors.slug.current}`}>
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
            
              <img className='h-68 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(forInvestors.mainImage).url()!} alt="" />
              <div className=' p-5 justify-between bg-white'>
                <p className='text-lg font-bold'>{forInvestors.title}</p>
                <div className=''>
                <p>US${forInvestors.price}</p>
                  <div className='flex space-x-4'>
                  <p>Bedrooms: {forInvestors.bedrooms}</p>
                <p>Bathrooms: {forInvestors.bathrooms}</p>
                  </div>
                </div>
              </div>
            </div>

          </Link>

        )

        )}
      </div>

      </section>


      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Towns</h2>
      <div className='flex space-x-3 overflow-scroll scrollbar-hide'>
        {towns?.map((town) => (
          <Link key={town._id} href={`${town.url}`}>
            <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
              <div className='relative h-60 w-60'>
              <img className='object-fill rounded-xl' src={urlFor(town.mainImage).url()!} alt="" />
              </div>
              <p className='text-2xl mt-3'>{town.title}</p>
            </div>
            <br/>
            </Link>
          

        )

        )}
      </div>

      </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home;

  export const getStaticProps: GetStaticProps<Props> = async () => {
  const forInvestorss: ForInvestors[] = await fetchForInvestors();
  const properties: Property[] = await fetchProperty();
  const towns: Town[] = await fetchTown();

  return {
    props:{
      forInvestorss,
      properties,
      towns,
    },
    revalidate: 10,
  }
}
  






