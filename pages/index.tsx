import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import { urlFor } from "../sanity"
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
        
        <link rel="icon" href="/favicon.ico" />
        <title>Beachland Is A Punta Cana Real Estate Investment Firm</title>
    <meta name="description" content="Let Us Help You Own Your Dreamed Home Under The Caribbean Sun. Experts In Safe Investments. Only Best Properties, Best Investments. Tax Exemption and more. Starting Below $100k. Free Consultation, Speak With Us Today!" />
    <meta name="keywords" content="FOR SALE,FOR RENT,REAL ESTATE,DOMINICAN REPUBLIC,CAP CANA,PUNTA CANA, LAS TERRENAS, SANTO DOMINGO, PUNTA CANA BUSINESS, BUY REAL ESTATE IN PUNTA CANA, DOMINICAN REPUBLIC MORTGAGE LOAN, MORGAGE INTEREST RATE IN THE DOMINICAN REPUBLIC, HOW TO APPLY FOR A LOAN IN DOMINICAN REPUBLIC, BUILDINGS MADE IN THE LAST 5 YEARS, WHITESANDS PUNTA CANA, VISTA CANA PUNTA CANA, CAP CANA PUNTA CANA, BAVARO PUNTA CANA, DOWNTOWN PUNTA CANA, escrow in dominican republic, retirement dominican republic, buying land in dominican republic, dominican republic investor residency, dominican republic retiree residency, property management in dominican republic, punta cana preconstruction, punta cana condos for sale, punta cana real estate,best investments in dominican republic" />
    <meta name="author" content="@Beachland" />
    <meta itemProp="name" content="Beachland Is A Punta Cana Real Estate Investment Firm Targeted To Investors Or Second Home Seekers." />
    <meta itemProp="description" content="Beachland Is A Punta Cana Real Estate Investment Firm Targeted To Investors Or Second Home Seekers. Let Us Help You Own Your Dreamed Home Under The Caribbean Sun. Experts In Safe Investments. Only Best Properties, Best Investments. Tax Exemption and more. Starting Below $100k. Free Consultation, Speak With Us Today!" />
    <meta itemProp="image" content="https://cdn.sanity.io/images/lqpgcd61/production/44ce88e99a350a5b33e7806bcfa2bf8c56b2f843-5000x2812.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@Beachland" />
    <meta name="twitter:title" content="Beachland Is A Punta Cana Real Estate Investment Firm Targeted To Investors Or Second Home Seekers" />
    <meta name="twitter:description" content="Beachland Is A Punta Cana Real Estate Investment Firm Targeted To Investors Or Second Home Seekers. Let Us Help You Own Your Dreamed Home Under The Caribbean Sun. Experts In Safe Investments. Only Best Properties, Best Investments.  Tax Exemption and more. Starting Below $100k. Free Consultation, Speak With Us Today!" />
    <meta name="twitter:image" content="https://cdn.sanity.io/images/lqpgcd61/production/44ce88e99a350a5b33e7806bcfa2bf8c56b2f843-5000x2812.jpg" />
    <meta property="og:title" content="Beachland Is A Punta Cana Real Estate Investment Firm Targeted To Investors Or Second Home Seekers" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://beachlandproperties.com" />
    <meta property="og:image" content="https://cdn.sanity.io/images/lqpgcd61/production/44ce88e99a350a5b33e7806bcfa2bf8c56b2f843-5000x2812.jpg" />
    <meta property="og:description" content="Beachland Is A Punta Cana Real Estate Investment Firm Targeted To Investors Or Second Home Seekers. Let Us Help You Own Your Dreamed Home Under The Caribbean Sun. Experts In Safe Investments. Only Best Properties, Best Investments.  Tax Exemption and more. Starting Below $100k. Free Consultation, Speak With Us Today!" />
    <meta property="og:site_name" content="Beachland Properties" />

      </Head>

      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6' id="ForSale">
        <h2 className='text-4xl font-semibold pb-5'>Last Properties Added</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-2 md:p-6 '>
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

        ).slice(0,8)}
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

        ).slice(0,8)}
      </div>

      </section>


      <section className='pt-6 ' id="Towns">
        <h2 className='text-4xl font-semibold pb-5'>Towns</h2>
      <div className='flex space-x-3 overflow-auto scrollbar-thumb md:p-6'>
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
  






