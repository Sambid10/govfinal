"use server"
import React from 'react'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation'
import Header from '../components/Header'
import AdminDashboard from '../components/AdminDashboard'
import BiometricDashboard from '../components/Biometricdashboard'
export default async function page() {
    const session=await auth()
    if(!session?.user){
        redirect("/auth/login")
    }else if(session.user.role==="USER"){
        redirect("/verification")
    }
  return (
    <div className='min-h-screen text-[#fff]'>
        <Header/>
        <div className='px-20 mt-5'>
      
      
            <div className='p-5'>
                <AdminDashboard/>
                <BiometricDashboard/>
            </div>
           
   
        </div>
    
    </div>
  )
}
