import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'


type Props = {}

function contact({}: Props) {


  return (
    <div>
        <Header />
    
    <section className='flex-grow pt-14 px-6'>
    <Head>
            <title>Contact | Beachland Properties</title>
          </Head>
        
    <div className="bg-white">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 lg:max-w-7xl lg:grid-cols-2 md:grid-cols-2 lg:px-8 pb-5">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-4 pb-5">
            <img
              src="Miguel Martinez.jpeg"
              alt=""
              className="rounded-lg bg-gray-100" />
            
          </div>
          <div className=' px-8 grid grid-cols-1 sm:grid-cols-1 pb-5'>
            
        
              <p className="mt-4 text-sm text-gray-500">Hello everyone, my name is Miguel Martinez and I own the Beachland Properties brand, a company associated with the market leader, Urban Realty Group. The Urban Group has offices in Santo Domingo, Santiago, Las Terrenas and Punta Cana, where I work and specialized.</p>
              <p className="mt-2 text-sm text-gray-500">Spanish is my native tongue and also very proficient in English. Originally I am an Economist (PUCMM-SD) with Master in Economic Development (UAM-MADRID), with plenty experience in statistics, data analysis and business development in the financial sector at both the government and private levels.</p>
              <p className="mt-2 text-sm text-gray-500">I always liked the exchange with other people and business so I made the change to real estate advisor in 2018 in the up and coming area of ​​Punta Cana. Since then I have accumulated experience in conflict management, in negotiation and interpersonal communication.</p>
              <p className="mt-2 text-sm text-gray-500">With hundreds of closed businesses and dozens of millions of dollars sold with customers of locations as distant as New Zealand, Poland and Russia, and many other countries of the Americas, like USA, Canada, Colombia, Mexico, etc.</p>
              <p className="mt-2 text-sm text-gray-500">For me it is an honor to be able to serve and help you out on your endeavors. I am very grateful for this visit to our website, I invite you to see our catalog and share your loved ones. They too could be part of this long list of successful and happy investors!</p>

            
          </div>
          
        </div>
      </div>
  <form action="https://api.web3forms.com/submit" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
  <input type="hidden" name="access_key" value="05f938e8-ab82-462e-9ccc-35843cb2df6e"/>
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
        <div className="mt-2.5">
          <input required type="text" name="nombre" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      
      
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input required type="email" name="correo" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div className="mt-2.5">
          
          <input required type="tel" name="numero" className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea required name="mensaje" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ></textarea>
        </div>
      </div>
      
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Let's talk</button>
    </div>
  </form>

  <script src="https://web3forms.com/client/script.js" async defer></script>
</section>
<Footer />
</div>
  )
}

export default contact