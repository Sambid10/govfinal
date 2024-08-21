import React from 'react'
import {auth} from "../../../../auth"
import { redirect } from 'next/navigation'
import Header from '@/app/components/Header'
import Link from 'next/link'
import { db } from '@/lib/db'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DeleteButton from './DeleteButton'
export default async function  Regitserpage() {
  const session=await auth()
  const useremail=session?.user.email
  const data=await db.post.findMany({
    where:{
      UserId:{
        equals:useremail
      }
    }
  })
    if(!session?.user){
        return redirect("/auth/login?callbackUrl=/verification")
    }
   
  return (
    <div className='bg-[#000] min-h-screen'>
        <Header/>
        <div className='flex justify-center mt-5'>
        <div className='bg-yellow-100 py-2 px-2 rounded-xl flex gap-2 items-center justify-center w-[60%]'>
        <AlertTriangle className='text-yellow-700 h-10 w-10'/>
        <h1 className='text-yellow-700 font-normal text-left'>Please note that once an application is submitted, it cannot be revised or updated. Therefore, it is imperative to ensure that all information provided is accurate and complete.</h1>
        </div>
        </div>
       
        <div className='py-10 px-10 bg-black text-[#fff]'>
          <div className='flex flex-col items-end space-y-2  px-20 mb-5'>
          <h1 className='font-semibold underline underline-offset-2'>New Application? Register Down Below.</h1>
          <Link href="/verification/register/registration">
          <Button className='bg-[#fff] text-black hover:opacity-85 hover:scale-105 transition-all duration-200 ease-in'>
          <h1>New Registration</h1>
          </Button>
          </Link>
          </div>
          <Table className='border-gray-200'>
  <TableCaption className='text-gray-400'>A list of your Applications.</TableCaption>
  <TableHeader>
    <TableRow>
   
      <TableHead className="w-[100px]">Application No:</TableHead>
      <TableHead>Name:</TableHead>
      <TableHead>DOB(YYYY/MM/DD):</TableHead>
      <TableHead>Status:</TableHead>
     
     
     
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className='font-extralight'>
      <TableCell className="">{data.map((data,i)=><h1 className='mb-6' key={i}>{data.id}</h1>)}</TableCell>
      <TableCell>{data.map((data,i)=><h1  className='mb-6 ' key={i}>{data.firstname}</h1>)}</TableCell>
      <TableCell>{data.map((data,i)=><h1  className='mb-6 ' key={i}>{data.dob}</h1>)}</TableCell>
      <TableCell>
        
        {data.map((data,i)=>
      <span key={i} className=' flex  gap-2 items-center'>
        <div className='flex gap-36 '>
        { data.imgApprove == false && data.Status==true ? <h1>Document Rejected.</h1>: 
        data.imgApprove == true && data.Status == true ? <h1 className='mb-6'>Approved.</h1> :     data.Status == true ? <h1 className='mb-6'>Biometric.</h1> : data.Status === false ? 
           <h1 className='mb-6'>Rejected...</h1>      
         : <h1 className='mb-6'>Pending....</h1> }
        <div className='flex gap-2'>
        <Link href={`/verification/dashboard/${data.id}`} className='text-sm'>
<Button size="sm" className='bg-white text-black hover:opacity-80 transition-opacity duration-200 ease-in'>View</Button>
  </Link>
  <div className='flex gap-2'>
  <DeleteButton data={data}/></div>

    {data.Status == true && data.imgupload == null ? 
    <Link href={`/verification/register/upload/${data.id}`}>
       <Button size="sm" className='bg-[#fff] text-[#000] mb-2'>Upload Documents.</Button>
    </Link> : 
    data.imgApprove == false && data.Status == true ? 
    <Link href={`/verification/register/upload/${data.id}`}>
    <Button size="sm" className='bg-[#fff] text-[#000] mb-2'>Upload Documents.</Button>
 </Link>:
    data.imgupload == true ? <h1 className='mb-6'> Document Uploaded</h1> :null
}
  </div>
  
        </div>
      </span>
     
    )}
    
        </TableCell>
      
    </TableRow>
  </TableBody>
</Table>
        </div>
    </div>
  )
}
