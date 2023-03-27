import React from 'react'
import Image from 'next/image'
import Link from 'next/link';



function LargeCard({img, title, description, buttonText}: any ) {
  return (
    <section className='relative py-16 cursor-pointer'>
        <div className='relative h-96 min-w-[300px]'>
            <Image src={img} fill className='rounded-2xl object-cover' alt={''} />
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3 w-64'>{title}</h3>
            <p>{description}</p>
            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'><Link href="https://api.whatsapp.com/send/?phone=18498066666&text&type=phone_number&app_absent=0">{buttonText}</Link></button>
            
        </div>
    </section>
  )
}

export default LargeCard