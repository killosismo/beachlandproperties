import React, {useState} from "react";
import { createRoot } from 'react-dom/client';
import { Menu, SubMenu, Item } from "burger-menu";
import Image from 'next/image'
import Logo from '/public/2.png'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import 'burger-menu/lib/index.css';




function Header() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 '> 
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Link href={'/'}> 
            <Image 
                  src={Logo} 
                  className='object-contain object-left'
                  width={75}
                  height={57}
                  alt={''}
                  />
                  </Link>
        </div>

        {/*<div className='flex items-center md:border-2 rounded-full py-2 md:shadow-xl'>
            <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start yout search' />
            <MagnifyingGlassIcon className=' hidden md:inline-flex h-8 bg-black text-white rounded-full p-2 cursor-pointer md:mx-2'/>
          </div>*/}
        <div className='flex py-1 md:space-x-5 invisible sm:visible '>
        <a href="https://beachlandproperties.com/#ForSale">
          <div className='' id="">For Sale</div>
          </a>
          <a href="https://beachlandproperties.com/#Towns">
            <div>Locations</div>
          </a>
          <a href="https://beachlandproperties.com/services">
          <div>Other Services</div>
          </a>
          <a href="https://beachlandproperties.com/contact">
          <div>About Us</div>
          </a>

        </div>
        
      <div className="my-auto pl-20 visible sm:invisible HAMBURGER-ICON space-y-2 " onClick={() => setIsOpen(!isOpen) }>
      <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <Menu className="burger-menu" isOpen={isOpen}  selectedKey={'entry'} onClose={() => setIsOpen(false)}>
        <a href="https://beachlandproperties.com/#ForSale"><Item itemKey={'ForSale'} text={'For Sale'}></Item></a>
        <a href="https://beachlandproperties.com/#Towns"><Item itemKey={'Towns'} text={'Locations'}></Item></a>
        <a href="https://beachlandproperties.com/services"><Item itemKey={'Services'} text={'Other Services'}></Item></a>
        <a href="https://beachlandproperties.com/contact"><Item itemKey={'contact'} text={'About Us'}></Item></a>
        
      </Menu>
      </div>
      
    
        


    </header>
  )
}

export default Header