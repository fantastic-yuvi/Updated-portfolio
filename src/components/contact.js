import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
export const Contact = () => {
  return (
    <div id="contact" className='w-full h-full mx-auto'>
        <div className='flex justify-center items-center '>
            <div className='flex flex-col'>
                <div className='text-base text-gray-700 p-3 text-center w-full h-full'>Get in Touch</div>
                <div className='text-5xl font-bold text-center w-full'>Contact Me </div>
                <div className='py-16 '>
                    <div className='w-[500px] p-6 rounded-[30px] border-2 border-gray-700'>
                        <div className='flex flex-row items-center justify-center'>
                            <MdAttachEmail className='text-2xl ' />
                            <h1 className='text-xl font-semibold pl-2 px-4 hover:text-gray-600 hover:underline-offset-2 hover:underline'>ysgangwarfbd@gmail.com</h1>
                            <FaLinkedin className='text-3xl pl-2'/>
                            <h1 className='text-xl font-semibold pl-2 hover:text-gray-600  hover:underline-offset-2 hover:underline'><a target="_blank" href='https://www.linkedin.com/in/yuvraj-singh-gangwar/'>Linkedin</a></h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center p-4'>
                    <h1 className='text-base text-gray-700'>Copyright © 2024 Yuvraj Singh Gangwar. All Rights Reserved.</h1>
                </div>
            
            </div>
            

            

        </div>
    </div>
  )
}
