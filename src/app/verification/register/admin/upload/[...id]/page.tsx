"use client"
import Header from '@/app/components/Header'
import React, { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Button } from '@/app/components/ui/button'
import { toast } from 'sonner'
import { ApproveDocuments } from '@/app/action/approvedocument'
import { RejectDocuments } from '@/app/action/rejectdocument'
export default  function AdminBiometricpage() {
   const params=useParams()
   const [loading,setloading]=useState(false)
   console.log(params)
  const{id}=params
  const postid=(id[0]) 
  const url=(id[4])
  const url1=(id[8])
  console.log(url)
  const ApproveDocument=async()=>{
    setloading(true)
    toast.loading("Loading...",{
        id:"loading"
    })
        try{
            await ApproveDocuments(postid)
        }catch(err){
            console.log(err)
        }finally{
            
            toast.dismiss("loading")
            toast.success("Email Sent..")
            setloading(false)
        }
  }
  const RejectDocument=async()=>{
    setloading(true)
    toast.loading("Loading...",{
        id:"loading"
    })
        try{
            await RejectDocuments(postid)
        }catch(err){
            console.log(err)
        }finally{
            
            toast.dismiss("loading")
            toast.success("Email Sent..")
            setloading(false)
        }
  }
  return (
    <div>
        <Header/>
        <div className=' flex  flex-col gap-4 mt-10 h-[calc(100vh-64px)] justify-center'>
            {url.length == 0 && url1.length == 0 ? 
                <h1 className='text-4xl font-bold text-[#fff] px-20 flex justify-center'>No Document's are Provided..</h1>:
               <>
               <div className='flex justify-evenly px-20'>
              <Image src={`https://utfs.io/f/${url}`} alt='img' height={500} width={500} className='object-contain'/>
          <Image src={`https://utfs.io/f/${url1}`} alt='img' height={500} width={500}  className='object-contain'/>
              </div>
              <div className='flex justify-center gap-4 px-20 mt-10'>
              <Button className='bg-[#fff] text-[#black] w-[20%]' onClick={ApproveDocument} disabled={loading}>Approve</Button>
          <Button className='bg-[#fff] text-[#black] w-[20%]' onClick={RejectDocument} disabled={loading}>Reject</Button>
              </div>
              </>   
        }
        </div>
    </div>
  )
}
