import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


type Props = {}

function contact({}: Props) {


  return (
    <div>
        <Header />
    
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" ></div>
  </div>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Beachland Properties</h2>
    <p className="mt-2 text-lg leading-8 text-gray-600">Beachland Is A Punta Cana Real Estate Investment Firm Targeted To Investors Or Second Home Seekers. Why Let Us Help You Own Your Dreamed Home Under The Caribbean Sun?
    </p>
    <p className="mt-2 text-lg leading-8 text-gray-600">- Experts In Safe Investments 
    </p>
    <p className="mt-2 text-lg leading-8 text-gray-600">- Only Best Properties, Best Investments
    </p>
    <p className="mt-2 text-lg leading-8 text-gray-600">- Tax Exemptions and more
    </p>
    <p className="mt-2 text-lg leading-8 text-gray-600">- Starting Below $100k
    </p>
    <p className="mt-2 text-lg leading-8 text-gray-600">- Free Consultation, Speak With Us Today!</p>
  </div>
  <form action="https://api.web3forms.com/submit" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
  <input type="hidden" name="access_key" value="c6342492-834f-4497-9801-901d68cf178b"/>
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
</div>
<Footer />
</div>
  )
}

export default contact