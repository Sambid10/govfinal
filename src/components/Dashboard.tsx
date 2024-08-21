"use client"
import Header from '@/app/components/Header';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
export default function  Dashboard({
post}:any) {
    const printRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
      });
  return (
    <>
    <div ref={printRef} className='bg-gray-50  rounded-xl p-4 font-light text-xl'>
      <Header/>
      <br/>
      <div className='flex gap-2 text-[#000]'>
        <div className='flex flex-col gap-4 w-[50%] font-medium'>
        <h1>UserId:{post?.id}</h1>
      <h1>First Name: {post?.firstname}</h1> 
       <h1>Middle Name: {post?.middlename}</h1> 
       <h1>Last Name: {post?.lastname}</h1>
       <h1>Gender: {post?.gender}</h1>
       <h1>Address: {post?.address}</h1>
       <h1>Province: {post?.province}</h1>
       <h1>Birth Certificate No: {post?.birthno}</h1>
       <h1>CitizenShip No: {post?.citizenship}</h1>
       <h1>DOB: {post?.dob}</h1>
      
      
       <h1>Mobile No: {post?.mobileno}</h1>
       <h1>Applicant District: {post?.applicantdistrict}</h1>
<h1>Applicant Province: {post?.applicantprovince}</h1>
<h1>Appointment Date: {post?.appointmentDate}</h1>
<h1>Appointment District: {post?.appointmentDistrict}</h1>
<h1>Appointment Location: {post?.appointmentLoaction}</h1>
<h1>Caste: {post?.caste}</h1>
<h1>Citizenship Type: {post?.citizenshiptype}</h1>
<h1>Education: {post?.education}</h1>
        </div>
        <div className='flex flex-col gap-4 w-[50%] font-medium'>
        
<h1>Father's Citizenship: {post?.fcitizen}</h1>
<h1>Father's Name: {post?.fathername}</h1>
<h1>Father's Last Name: {post?.flast}</h1>
<h1>Father's Middle Name: {post?.fmiddle}</h1>
<h1>Father's National ID: {post?.fnational}</h1>
<h1>Jari Date: {post?.jaridate}</h1>
<h1>Jari District: {post?.jaridistrict}</h1>
<h1>Married: {post?.married}</h1>
<h1>Mother's Citizenship: {post?.mcitizen}</h1>
<h1>Mother's Name: {post?.mothername}</h1>
<h1>Mother's Last Name: {post?.mlast}</h1>
<h1>Mother's Middle Name: {post?.mmiddle}</h1>
<h1>Mother's National ID: {post?.mnational}</h1>
<h1>Profession:{post?.proffession}</h1>
<h1>Religion: {post?.religion}</h1>
<h1>Spouse Citizenship: {post?.spousecitizen}</h1>
<h1>Spouse First Name: {post?.spousefname}</h1>
<h1>Spouse Last Name: {post?.spouselname}</h1>
<h1>Spouse Middle Name: {post?.spousemname}</h1>
<h1>Spouse National ID: {post?.spousenational}</h1>
<h1>Village: {post?.village}</h1>
<h1>Ward Number: {post?.wardno}</h1>
       
        </div>

       
      </div>  
       <br/> 
    </div>
    <div className='w-full flex justify-end '>
    <button className='bg-[#fff] px-2 py-2 w-[30%] rounded-xl text-xl font-semibold' onClick={handlePrint}>Print this out!</button>
    </div>
    </>
  )
}
