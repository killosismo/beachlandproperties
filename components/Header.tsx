import React from 'react'
import Image from 'next/image'
import beachlandPhoto from '/public/beachlandLogo.jpg'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'> 
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Link href={'/'}> 
            <Image 
                  src={beachlandPhoto} 
                  layout="fill"
                  objectFit='contain' 
                  objectPosition='left'
                  alt={''}            />
                  </Link>
        </div>

        {/*<div className='flex items-center md:border-2 rounded-full py-2 md:shadow-xl'>
            <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start yout search' />
            <MagnifyingGlassIcon className=' hidden md:inline-flex h-8 bg-black text-white rounded-full p-2 cursor-pointer md:mx-2'/>
  </div>*/}

        <div>
            
        </div>


    </header>
  )
}

export default Header