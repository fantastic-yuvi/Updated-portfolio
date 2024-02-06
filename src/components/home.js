import React from 'react'
import {Link} from 'react-scroll'
import profile from '../media/pnewaigen.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Home = () => {
  return (
    <div className='flex justify-center h-full'>
        <div className='mx-auto flex w-full h-full'>
          <div className='w-1/2'>
            <div className='flex justify-end items-center h-[550px]'>
              <img  className="rounded-full hover:shadow-lg hover:shadow-black" src={profile} alt={profile} width="350" height="350"/>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='flex justify-start items-center  h-[450px]'>
              <div className='flex flex-col '>
                <h1 className='text-gray-600 text-xl font-semibold pl-40'>Hello,I'm</h1>
                <h1 className='text-4xl font-bold pl-12 p-2 hover:text-rose-600 '>Yuvraj Singh Gangwar</h1>
                <h1 className='text-2xl text-gray-600 font-semibold pl-24 p-2'>Software Development </h1>
                <h1 className='text-2xl text-gray-600 font-semibold pl-40'>Engineer</h1>
                <div className='flex flex-row pl-16 py-4 space-x-4'>
                  <button className='p-4  rounded-full border-2 border-black hover:bg-black hover:text-white '>
                    <a href='https://bit.ly/3UcTkBr'target="_blank">Download CV</a>
                  </button>
                  <button className='p-4  rounded-full bg-black/80 text-white '>
                    <Link to="contact" spy={true} smooth={true}>Contact info</Link>
                  </button>
                </div>
                
                <div className='flex flex-row space-x-4'>
                <div className='text-4xl pl-40 '><a target="_blank" href='https://github.com/fantastic-yuvi'><FaGithub/></a></div>
                <div className='text-4xl '><a target="_blank" href='https://www.linkedin.com/in/yuvraj-singh-gangwar/'><FaLinkedin /></a></div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}
