import React from 'react'
import { GiAchievement } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaChessKing } from "react-icons/fa6";
import profile from '../media/photo.jpg';
export const About = () => {
  return (
    <div id="About" className='w-full h-[650px]'>
        <div className='flex justify-center'>
            <div className='flex flex-col'>
                <h1 className='text-base text-gray-800 pl-10'>Get to Know More</h1>
                <h1 className='text-5xl font-bold'>About Me</h1>
            </div>
        </div>
        <div className='py-20 flex justify-center'>
            <div className='flex w-[1100px] h-[400px]  '>
                <div className='w-2/5'>
                    <img className='rounded-[30px]' src={profile} alt={profile} height="300" width="300"/>
                </div>
                <div className='w-3/5'>
                    <div className='flex flex-col space-y-3'>
                        <div className='flex flex-row space-x-4'>
                            <div className='p-8 px-16 rounded-[24px] border-black border-2'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'>
                                        <h1 className='text-3xl'><GiAchievement/></h1>
                                    </div>
                                    <h1 className='text-lg font-bold text-center'>Experience</h1>
                                    <h1 className='text-base text-center'>1+ Year Experience</h1>
                                    <h1 className='text-base text-center'>Full Stack Developer</h1>
                                </div>
                            </div>
                            <div className='p-8 px-10 rounded-[24px] border-black border-2 '>
                                <div className='flex flex-col'>
                                    <div className='flex justify-center'>
                                        <h1 className='text-3xl'><BsFillPeopleFill/></h1>
                                    </div>
                                    <h1 className='text-lg font-bold text-center'>Education</h1>
                                    <h1 className='text-base text-center'>B.Tech Computer Science</h1>
                                    <h1 className='text-base text-center'>2020-2024</h1>
                                </div>
                            </div>
                        </div>


                        <p className='text-base text-gray-700'>🚀 Passionate Software Engineer | Problem Solver | Innovator---
                            I am a dedicated and results-driven software engineer with a passion for developing innovative solutions to complex problems. 
                            I am constantly learning and adapting to new technologies to stay at the forefront of the ever-evolving tech landscape.
                            I am actively seeking opportunities to contribute my skills and expertise to projects that challenge and inspire me. 
                            I am open to networking with fellow software engineers, developers, and tech enthusiasts.
                            I Also Love to play Chess ♛ , for My Chess.com Account  <span className='text-blue-600'><a href='https://www.chess.com/member/god_killer_69' target='_blank'>Click Here<FaChessKing/></a></span>
                        </p>
                    </div>

                </div>
            
            </div>
        </div>
        
    </div>
  )
}
