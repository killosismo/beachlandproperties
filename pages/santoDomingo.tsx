import React from 'react'
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
    <section>

    
        
        <PropertyTownCard towns={towns} />
    
    
    

    <Footer />
    </section>

    
    </div>
  )
}

export default santoDomingo

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchSantoDomingo();
  

  return {
    props:{
      towns,
    }
  }
}