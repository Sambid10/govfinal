"use client"
import React, { useState } from 'react'
import { Button } from '@/app/components/ui/button'
import HandleDeletePost from '@/app/action/deletepost'
import { useRouter } from 'next/navigation'
import {easeIn, motion} from "framer-motion"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog"
import { toast } from 'sonner'
export default function DeleteButton({data}:any) {
   const router=useRouter()
    const [loading,setloading]=useState(false)
    const {id}=data
    console.log(id)

    const handleDelete=async()=>{
        setloading(true)
     toast.loading("Deleting..",{
        id:"loading"
     })
        try{
            await HandleDeletePost(id)
        }catch(err){
            console.log(err)
        }
        finally{
            toast.dismiss("loading")
            toast.success("Successfully Deleted..")
            setloading(false)
            router.refresh()
            router.push("/verification/register")  
        }   
    }
  return (
    <motion.div
    >
        <Dialog >
  <DialogTrigger disabled={loading}>
    <span className='bg-red-600 px-3 py-[0.60rem] text-sm font-bold rounded-lg  text-[#fff]'>Delete</span>
 </DialogTrigger>
  <DialogContent className='bg-black text-[#fff]'>
    <DialogHeader>
      <DialogTitle className='mb-5'>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        <div className='flex flex-col space-y-4'>
         <h1 className=' text-gray-200'>This action cannot be undone. This will permanently delete your Appilication Form
        and remove your data from our servers.</h1>
        <div className='flex justify-end'>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
          <Button  type='submit' onClick={handleDelete} size="sm" className='bg-red-600  text-[#fff]'>Delete</Button>
          </DialogClose>
        </DialogFooter>
        </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
   
    </motion.div>
  )
}
