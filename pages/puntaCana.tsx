
import { Town } from '../typings'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyTownCard from '../components/PropertyTownCard'
import { fetchPuntaCana } from '../utils/fetchPuntaCana'
import { GetStaticProps } from 'next'


type Props = {
    towns: Town[];
    
}

const puntaCana = ({ towns }: Props) => {
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

export default puntaCana

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchPuntaCana();
  

  return {
    props:{
      towns,
    }
  }
}