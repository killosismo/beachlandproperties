import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import NewsletterForm from './NewsletterForm';



function LargeCard({img, title, description, buttonText}: any ) {
  return (
    <section className='relative py-16 cursor-pointer'>
        <div className='relative h-96 min-w-[300px]'>
            <Image src={img} fill className='rounded-2xl object-cover' alt={''} />
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3 w-64'>{title}</h3>
            <p>{description}</p>
            <div className="mt-6 flex max-w-md gap-x-4">
            <NewsletterForm />
            </div>
            
        </div>
    </section>
  )
}

export default LargeCard