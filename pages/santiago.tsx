import React from 'react'
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'
import { fetchSantiago } from '../utils/fetchSantiago'
import { GetStaticProps } from 'next'


<h1>Hello</h1>

/*type Props = {
    towns: Town[];
    
}

const santiago = ({ towns }: Props) => {
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

export default santiago

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchSantiago();
  

  return {
    props:{
      towns,
    }
  }
}*/