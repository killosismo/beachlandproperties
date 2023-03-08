import React from 'react'
import Link from 'next/link';

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Contact Us</h5>
        <p>Phone number: <Link href="https://api.whatsapp.com/send/?phone=18498066666&text&type=phone_number&app_absent=0">+1-(849)-806-6666</Link></p>
        
        <p>Email: info@beachland.com</p>
        
        <p>Direction:</p>
        <p>Pyhex Work, Local 6, Boulevard del Este, Punta Cana, Dominican Republic.</p>
        </div>   
      
        <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Towns</h5>
        <p>Cap Cana</p>
        <p>Punta Cana</p>
        <p>Vista Cana</p>
        <p>Santo Domingo</p>
        <p>Santiago</p>
        <p>Las Terrenas</p>
        </div> 

        
    </div>
    
  )
}

export default Footer