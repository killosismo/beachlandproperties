import React from 'react'
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'
import { fetchLasTerrenas } from '../utils/fetchLasTerrenas'
import { GetStaticProps } from 'next'


type Props = {
    towns: Town[];
    
}

const lasTerrenas = ({ towns }: Props) => {
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

export default lasTerrenas

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchLasTerrenas();
  

  return {
    props:{
      towns,
    }
  }
}