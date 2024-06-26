
import Image from 'next/image'



function Banner() {
  return (
    <div className=' bg-gradient-to-tl from-black to-gray relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
        
       <video muted autoPlay loop src={'/banner.mp4'}  className="mix-blend-overlay h-full w-full object-cover" />
        <div className='absolute top-1/2 w-full text-center'>
            <h1 className=' lg:text-4xl sm:text-lg text-white font-bold tracking-tight'>Your dreamed home under the Caribbean sun</h1>
            
        </div>
    </div>
  )
}

export default Banner