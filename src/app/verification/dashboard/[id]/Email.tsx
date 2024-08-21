"use client"
import React, { useState } from 'react'
import { Button } from '@/app/components/ui/button'
import { Check } from 'lucide-react'
import { X } from 'lucide-react'
import { VerifyEmail } from '@/app/action/verifyemail'
import { toast } from 'sonner'
import { ErrorEmail } from '@/app/action/rejectemail'
export default function Email({email,post}:{email:string,post:any}) {
    const date=post.appointmentDate as string
    const id=post.id as string
    console.log(date)
    const [pending,setpending]=useState(false)
    const handleEmailSubmit=async()=>{
        setpending(true)
        toast.loading("Loading....",{
            id:"loading"
        })
        try{
            await VerifyEmail(email,date,id,post).then(()=>{
                toast.success("Email Sent")
            })
        }catch(err){
            console.log(err)
        }finally{
            toast.dismiss("loading")
            setpending(false)
        }
      
       
    }
    const handleErrorSubmit=async()=>{
        setpending(true)
        toast.loading("Loading....",{
            id:"loading"
        })
        try{
            await ErrorEmail(email,date,id,post).then(()=>{
                toast.success("Email Sent")
            })
        }catch(err){
            console.log(err)
        }finally{
            toast.dismiss("loading")
            setpending(false)
        }

    }
  return (
    <div className='flex gap-4 w-[100%]'>
          <Button 
          disabled={pending}
        onClick={handleEmailSubmit}
          type='submit' className='bg-[#fff] w-[100%] '>
            <div className='flex justify-center items-center'>
              <Check className='text-green-500'/>
            <h1>Approve</h1>
            </div>
        </Button>

        <Button 
        onClick={handleErrorSubmit}
        disabled={pending}
        type='submit' className='bg-[#fff] w-[100%] '>
        <div className='flex justify-center items-center'>
        <X className='text-red-600' />
            <h1>Reject</h1>
        </div>
        </Button>
    </div>
  )
}
