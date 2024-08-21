"use server"
import React from 'react'

import { db } from '@/lib/db'
import { auth } from '../../../../../auth';
import { redirect } from 'next/navigation';
import DashboardForm from '@/components/ui/DashboardForm';
import { AlertTriangle } from 'lucide-react';
import Header from '@/app/components/Header';
interface BlogDetailPageProps {
  params: {
    id: string;
  };
}
export default  async function  Page({params}:BlogDetailPageProps) {
  console.log(params.id)
  const session=await auth()
  if(!session?.user){
   redirect("/auth/login")
  }
  const post = await db.post.findFirst({
    where: {
      id: params.id,
    },
  });
  const id=post?.id
  console.log(id)
  return (
    <>
    <Header/>
     <div className='min-h-screen '>
      <div className='px-20 py-10 flex justify-center'>
        <div className='bg-yellow-100 py-2 px-2 rounded-xl flex gap-2 items-center justify-center w-[45%]'>
        <AlertTriangle className='text-yellow-700 h-5 w-5'/>
        <h1 className='text-yellow-700 font-normal'>Only Update The Information if Required Only.Once Reverted it can't Be Undone.</h1>
        </div>
    
      </div>
        <DashboardForm post={post} id={id}/>
    </div></>
   
  )
}
