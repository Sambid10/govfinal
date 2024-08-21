"use client"
import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
import lol from "../../../../public/lol.svg"
import Socials from './Socials'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'


export default  function LandingPage() {

  return (
    <div className='h-[100vh] flex relative bg-[#121212]'>
        <motion.div 
        className='w-1/2 relative h-[100%] bg-[#] flex items-center justify-center text-[#fff]'>
            
            <motion.div 
             
          
            className='flex flex-col gap-4 h-full justify-center '>
                <Image src={lol} alt='lol' className='h-[30%] '/>
                <p className='text-center  font-semibold  md:text-2xl tracking-wide'>Government Of Nepal <br/> Ministry Of Home Affairs <br/> Department Of National ID and Civil Registration</p>
              
                
            </motion.div>
            <div className='absolute bottom-10 right-0 left-0 w-full text-center text-[#fff]'>
            <p className='  text-base md:text-base tracking-wide'>Enroll your demographic data online and book an appointment for Biometric capture.</p>
        </div>
      
        </motion.div>
        <div  className='w-1/2 h-[100%] flex items-center justify-center bg-[#000]  text-[#F6F5F2]'>
            <div className='flex flex-col gap-6'>
            <h1 className='text-4xl font-bold text-center'>Login For Individuals</h1>
         
          <Socials/>
          <Link href="https://accounts.google.com/signup/v2/kidaccountinfo?flowName=GlifWebSignIn&flowEntry=ServiceLogin&ddm=0">
          <h1 className='flex justify-end hover:underline underline-offset-4 '>Don't Have an Account? Sign Up Here...</h1>
          </Link>
          
       
          <div className='text-[#000] bg-[#ffff] rounded-xl  text-center'>
    
        </div>
        
           
            </div>
            
            <div className='absolute bottom-10 right-8 text-[#F6F5F2]'>
              <div className='flex gap-2 items-center group'>
              <Link href="/">
            <h1 className='text-xl font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0  after:h-[2px] group-hover:after:w-full group-hover:after:bg-[#1FFF0F] after:transition-all after:duration-200 after:ease-out group-hover:text-[#1FFF0F]'>Go Back</h1>
          
          </Link>
       
            <ChevronLeft className='h-[30px] group-hover:-translate-x-2 ease-in duration-200 transition-all group-hover:text-[#1FFF0F]'/>
              </div>
             
        
        </div>
        </div>
       
        
       
    </div>
  )
}