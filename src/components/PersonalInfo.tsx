"use client"
import React, { useTransition } from 'react'
import Image from 'next/image'
import { Button } from '@/app/components/ui/button'
import { useState } from 'react'
import {AnimatePresence, easeIn, motion} from "framer-motion"
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { toast } from 'sonner'
export default function PersonalInfo({pic,role}:{
    pic:string,
    role:string
}) {
    const [isOpen,setIsOpen]=useState(false)
    const [disabled,setdisabled]=useTransition()
    const handleSignOut=async()=>{
       
        setdisabled(async()=>{
            toast.loading("Signing Out..",{
                id:"loading"
            })
            await signOut().then(()=>{
                toast.dismiss("loading")
            })
        })
       
    }   
  return (
    
    <div>
          <div onMouseLeave={()=>{setIsOpen(false)}} className='relative'>
            <Image 
            onMouseEnter={()=>{setIsOpen(true)}}
            src={`${pic}`} alt='Image' height={40} width={40} className='cursor-pointer rounded-full object-cover relative hover:opacity-85 hover:scale-110'/>
         
            <AnimatePresence>
            {isOpen &&  
            <>
              <div className='absolute top-[100%] right-0 bg-transparent h-10  w-56'>
                <h1>.</h1>
            </div> 
            <motion.div 
            initial={{opacity:0,y:5}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:5}}
            transition={{duration:0.3,ease:easeIn,staggerChildren:0.1}}
            
            className='absolute top-[100%] right-0 mt-1 bg-white px-4 py-4 z-50 rounded-xl w-56 shadow-xl'>
             <motion.div
              initial={{opacity:0,y:5}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:5}}
             className='flex flex-col gap-2 text-black'>
             {role==="ADMIN" &&
              <>
                <Link href='/admin'>
                 <Button  className='bg-gray-200 w-full hover:bg-gray-400 transition ease-in duration-200 shadow-md'>Admin Dashboard</Button>
              </Link>
          
          <div className='h-[2px] bg-gray-200 w-full '/></>
            
         }
        
         <Button 
         disabled={disabled}
         onClick={handleSignOut}
         className='bg-gray-200 w-full hover:bg-gray-400 transition ease-in duration-200 shadow-md'>
             <h1 className='text-black'>SignOut</h1>
         </Button>
             </motion.div>
            
            </motion.div>
            </>
             }

            </AnimatePresence>
           
          
          </div>
    </div>
  )
}
