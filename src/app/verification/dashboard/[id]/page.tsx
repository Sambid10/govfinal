"use server"
import React from 'react'
import { db } from '@/lib/db'
import Dashboard from '@/components/Dashboard';
import { auth } from '../../../../../auth';
import { redirect } from 'next/navigation';
import Header from '@/app/components/Header';
import Email from './Email';
interface BlogDetailPageProps {
  params: {
    id: string;
  };
}
export default  async function  Page({params}:BlogDetailPageProps) {
  const session=await auth()
  const role=session?.user.role
  const email=session?.user.email as string
  console.log(email)
  if(!session?.user){
   redirect("/auth/login")
  }
  const post = await db.post.findFirst({
    where: {
      id: params.id,
    },
  });
  
  return (
    <>
    <Header/>
    <div className='min-h-screen flex justify-center items-center flex-col gap-4 py-6 w-[100%]'>
      <h1 className='text-5xl text-[#ffff]'>Your Infromation</h1>
      <h1  className='text-xl text-[#ffff]'>Please Kindly print this document and hand it over to respective department.</h1>
      <div className="flex flex-col gap-2 px-5 py-5 bg-[#121212] rounded-xl text-4xl w-[70%]">
        <Dashboard post={post}/>
        {role === "ADMIN" && 
        <>
        <Email email={email} post={post}/>
        </>
        }
      </div>
    </div></>
    
  )
}
