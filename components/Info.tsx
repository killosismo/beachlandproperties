import React from 'react'
import { urlFor } from '../sanity';
import { Town } from '../typings'
import Image from 'next/image'
import Link from 'next/link';

type Props = {
    town: Town;
}

const Info = ({ town }: Props) => {
  return (
    <div>
      
        

        {town.properties?.map((property) =>(
          <Link key={property._id} href={`/property/${property.slug.current}`}>
        <div className='flex py-7 px-2 pr-4 selection:border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
          <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
           <img
           key={property._id}
           src={urlFor(property.mainImage).url()!}
           className='object-cover'
           
           alt={''}
           />
          </div>
          <div className='flex flex-col flex-grow pl-5'>
          <div className='flex justify-between'>
            <p>location</p>
          </div>
          <h4 className='text-xl'>{property.title}</h4>

          <div className='border-b w-10 pt-2' />

          <p className='pt-2 text-sm text-gray-500 flex-grow'>Description</p>

          <div className='flex justify-between items-end pt-5'>
            <p className='flex items-center'>*</p>

            <div>
              <p className='text-lg lg:text-2xl font-semibold pb-2'>Price {property.price}</p>
            </div>

          </div>
          </div>
        </div> 
        </Link>
        ))}
        
    </div>
    
  )
}

export default Info