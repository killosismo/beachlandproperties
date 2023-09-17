import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import NewsletterSubscribe from './NewsletterSubscribe';


function LargeCard({img, title, description, className}: any ) {
  return (
    <section className='relative py-16'>
        <div className='relative h-96 min-w-[300px]'>
            <Image src={img} fill className='rounded-2xl object-cover' alt={''} />
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3 w-64'>{title}</h3>
            <p>{description}</p>
            <div className="mt-6 flex max-w-md gap-x-4">
            <NewsletterSubscribe />
            </div>
        </div>
    </section>
  )
}

export default LargeCard