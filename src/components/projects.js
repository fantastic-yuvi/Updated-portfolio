import React from 'react'
import p1 from '../media/p1.png';
import p2 from '../media/p2.png';
import p3 from '../media/p3.jpg';
export const Projects = () => {
  return (
    <div id="pro" className='w-full h-full'>
      <div className='flex flex-col'>
        <div className='text-center text-base p-3 w-full'>
          Browse My Recent 
        </div>
        <div className='text-center w-full text-5xl font-bold'>
          Projects
        </div>
      </div>
      <div className='flex justify-center py-16'>
        <div className='w-[1100px]   h-[440px]'>

          <div className='flex flex-row space-x-4'> 
            <div className='w-1/3 h-[440px] rounded-[22px] border-2 border-black'>
              <div className='flex flex-col '>
                <div className='flex justify-center'>
                <img  className='p-4 rounded-[32px]' src={p1} alt={p1} height={400} width={330}/>


                </div>
                <h1 className='text-2xl font-bold text-center'>Friend Finder</h1>
                <div className='flex flex-row justify-center space-x-2 py-4'>
                  <button className='w-32 p-2 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white'><a target="_blank" href='https://64da78d50c9fbb1981a285df--stalwart-biscochitos-1100ec.netlify.app/'>Live Demo</a></button>
                  <button className='w-32 p-2 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white'><a target="_blank" href='https://github.com/fantastic-yuvi/PersonalityMatchMakerServer'>Github</a></button>
                </div>


              </div>
            </div>
            <div className='w-1/3 h-[440px] rounded-[22px] border-2 border-black'>
              <div className='flex flex-col '>
                <div className='flex justify-center'>
                <img  className='p-4 rounded-[32px]' src={p2} alt={p2} height={400} width={330}/>


                </div>
                <h1 className='text-2xl font-bold text-center'>Midnight Cafe</h1>
                <div className='flex flex-row justify-center space-x-2 py-4'>
                  <button className='w-32 p-2 border-2  border-black rounded-full font-bold hover:bg-black hover:text-white'><a target="_blank" href=''>Live Demo</a></button>
                  <button className='w-32 p-2 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white'><a target="_blank" href='https://github.com/fantastic-yuvi'>Github</a></button>
                </div>


              </div>

            </div>
            <div className='w-1/3 h-[440px] rounded-[22px] border-2 border-black'>
              <div className='flex flex-col '>
                <div className='flex justify-center'>
                <img  className='p-4 rounded-[32px]' src={p3} alt={p3} height={400} width={330}/>


                </div>
                <h1 className='text-2xl font-bold text-center'>Coding Platform</h1>
                <div className='flex flex-row justify-center space-x-2 py-4'>
                  <button className='w-32 p-2 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white'><a target="_blank" href='https://codenationapp.netlify.app/'>Live Demo</a></button>
                  <button className='w-32 p-2 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white'><a target="_blank" href='https://github.com/fantastic-yuvi/ECodingPlatform'>Github</a></button>
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>
      
      

    </div>
  )
}
