import React from 'react'
  import {SiLeetcode} from "react-icons/si";
  import {FaHackerrank} from "react-icons/fa";
  import {SiCodechef} from "react-icons/si";
  import {SiCodeforces} from "react-icons/si";
  import { SiSolidity } from 'react-icons/si';
  import { FaReact } from 'react-icons/fa';
  import { SiTailwindcss } from 'react-icons/si';
  import { TbBrandNextjs } from 'react-icons/tb';
  import { SiJavascript } from 'react-icons/si';
  import { SiCplusplus } from 'react-icons/si';
  import { FaNodeJs } from "react-icons/fa";
  import { DiMongodb } from "react-icons/di";
export const Cards = () => {
  return (
    <div id="Exp" className='w-full h-full'>
        <div>
        <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
          Tech I Use 
          </p>
          </div>

      <div className = "flex flex-wrap justify-center pt-2">
        
       
        
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-xl font-semibold text-center">
            React
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCplusplus color="orange" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-xl font-semibold text-center">
            C++
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-base font-semibold text-center">
            Tailwind-CSS
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#ffdf00" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-xl font-semibold text-center">
            JavaScript
          </p>
        </div>
       
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaNodeJs color="red" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-xl font-semibold text-center">
            Node Js
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <DiMongodb color="green" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-xl font-semibold text-center">
            MongoDB
          </p>
        </div>
    </div>
      <div>
          <p className="text-3xl py-1 font-bold dark:text-white  md:text-4xl  text-center pt-4">
          Coding Profiles
        </p>
      </div>
      <div className = "flex flex-wrap justify-center pt-2">
        
       
       

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCodeforces color="red" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <a href="https://codeforces.com/profile/lord_yuvi">
          <p className="mt-6 text-xl font-semibold text-center hover:text-cyan-400 hover:scale-150 duration-150 hover:animate-pulse  duration-150 ">
            lord_yuvi
          </p>
          </a>
          
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiLeetcode color="#ffdf00" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <a href="https://leetcode.com/Lord_yuvi/">
          <p className="mt-6 text-xl font-semibold text-center hover:text-cyan-400  hover:scale-150 duration-150 hover:animate-pulse  duration-150 ">
            lord_yuvi
          </p>
          </a>
          
        </div>


        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCodechef color="blue" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <a href="https://codechef.com/users/fantastic_yuvi/">
          <p className="mt-6 text-xl font-semibold text-center hover:text-cyan-400  hover:scale-150 duration-150 hover:animate-pulse  duration-150 ">
            fantastic_yuvi
          </p>
          </a>
          
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaHackerrank color="teal" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <a href="https://www.hackerrank.com/2001640100322_2B">
          <p className="mt-6 text-xl font-semibold text-center hover:text-cyan-400  hover:scale-150 duration-150 hover:animate-pulse  duration-150 ">
            fantastic_yuvi
          </p>
          </a>
          
        </div>
      </div>
    </div>
    
  )
}
