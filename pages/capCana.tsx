import React from 'react'
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'
import { fetchCapCana } from '../utils/fetchCapCana'
import { GetStaticProps } from 'next'




type Props = {
    towns: Town[];
    
}

const capCana = ({ towns }: Props) => {
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

export default capCana

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchCapCana();
  

  return {
    props:{
      towns,
    }
  }
}