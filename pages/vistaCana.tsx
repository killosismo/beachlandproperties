import React from 'react'
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
    <section>

    
        
        <PropertyTownCard towns={towns} />
    
    
    

    <Footer />
    </section>

    
    </div>
  )
}

export default vistaCana

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchVistaCana();
  

  return {
    props:{
      towns,
    }
  }
}