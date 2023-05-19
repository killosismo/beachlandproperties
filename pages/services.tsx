import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Props = {}

function services({}: Props) {
  return (
    
    <><Header />
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Other Services</h2>
            <p className="mt-4 text-gray-500">
            Beachland Is A Punta Cana Real Estate Investment Firm Targeted To Investors Or Second Home Seekers. Let Us Help You Own Your Dreamed Home Under The Caribbean Sun. Only Best Properties, Best Investments.  Tax Exemption and more.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              
            <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Business development</dt>
          <dd className="mt-2 text-sm text-gray-500">Experts In Safe Investments.</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Legal and Tax assistance</dt>
          <dd className="mt-2 text-sm text-gray-500">Free Consultation, Speak With Us Today!</dd>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Loan application</dt>
          <dd className="mt-2 text-sm text-gray-500">Starting Below $100k.</dd>
        </div>
              
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/97df6fd96f52bbfdb4ebe004895b768f67644a93-535x532.jpg"
              alt=""
              className="rounded-lg bg-gray-100" />
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/2843a6d9cb46e8761475477614becaa4e9ec0d41-534x537.jpg"
              alt=""
              className="rounded-lg bg-gray-100" />
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/880714ea8d398138afeae42d901734b3d095b49b-533x538.jpg"
              alt=""
              className="rounded-lg bg-gray-100" />
            <img
              src="https://cdn.sanity.io/images/lqpgcd61/production/50f6e570704f3823db4c4050d184fc7cc05dbf4e-541x537.jpg"
              alt=""
              className="rounded-lg bg-gray-100" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default services