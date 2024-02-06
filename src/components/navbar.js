import React from 'react';
import {Link} from 'react-scroll'
export const Navbar = () => {
  return (
    <div>
      <div className='flex h-28 w-full '>
        <div className='w-2/5 '>
          <div className='flex justify-center items-center h-28'>
            <h1 className='text-3xl '>Yuvraj </h1>
          </div>
        </div>
        <div className=' w-3/5 '>
          <div className='flex justify-center items-center h-28'>
            <ul className='flex flex-row space-x-8 '>
              <li className='text-2xl hover:text-gray-500 hover:underline-offset-8 hover:underline'><Link  to="About" spy={true} smooth={true}>About</Link></li>
              <li className='text-2xl hover:text-gray-500 hover:underline-offset-8 hover:underline'><Link  to="Exp" spy={true} smooth={true}>Experience</Link></li>
              <li className='text-2xl hover:text-gray-500 hover:underline-offset-8 hover:underline' ><Link  to="pro" spy={true} smooth={true}>Projects</Link></li>
              <li className='text-2xl hover:text-gray-500 hover:underline-offset-8 hover:underline' ><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
