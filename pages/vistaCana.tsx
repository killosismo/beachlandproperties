
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
    <section className='flex-grow pt-14 px-6'>

<h1 className='text-3xl font-semibold mt-2 mb-6'>Vista Cana</h1>
    
        
        <PropertyTownCard towns={towns} />
    
    
    

    
    </section>
    <Footer />
    
    </div>
  )
}

export default vistaCana

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const towns: Town[] = await fetchVistaCana();
  

  return {
    props:{
      towns,
    },
    revalidate: 10,
  }
}