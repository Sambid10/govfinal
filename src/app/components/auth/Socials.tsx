"use client"
import React, { useState } from 'react'
import { Button } from '@/app/components/ui/button'
import { FcGoogle } from "react-icons/fc";
import { DEFAULT_LOGIN_REDIRECT } from '../../../../routes'

import { signIn } from "next-auth/react"
import { toast } from 'sonner';

export default function Socials() {
  const [loading,setloading]=useState(false)
    const  handleClick=async(providers:"google")=>{
     
        toast.loading("Loading....",{
          id:"loading"
        })
        try{
          setloading(true)
 await signIn(providers,{
          callbackUrl:DEFAULT_LOGIN_REDIRECT, 
           }).then(()=>{
            toast.dismiss("loading")
           })
           }catch(err){

           }finally{
setloading(false)
           }
        }
          

  return (
    <>
      <Button 
      disabled={loading}
            onClick={()=>handleClick("google")}
            className='bg-gray-50 border border-gray-600 text-[#000] text-lg group hover:bg-[#102C57] hover:text-[#fff] transition-all duration-200 ease-in' size={'lg'}
      >
                <div className='flex gap-1 items-center'>
                <FcGoogle className='h-4 w-4'/>
                Sign in with Google
              
                </div>
      </Button> 
  </>
          
  )
}
