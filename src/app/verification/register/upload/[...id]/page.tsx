"use client"
import Header from '@/app/components/Header'
import {UploadDropzone } from '@/lib/uploadthing'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Button } from '@/app/components/ui/button'
import Imageupload from '@/app/action/imageupload'
import { toast } from 'sonner'
export default function Uploadpage() {
  const {id}=useParams()
  const paramsid=String(id)
  console.log(paramsid,"muji")
 
 const [loading,setloading]=useState(false)
  const [imgUrl1, setImgUrl1] = useState<string>("")
  const [imgUrl2, setImgUrl2] = useState<string>("")
 const setupDb=async()=>{
  setloading(true)
  toast.loading("Uploading Images...",{
    id:"loading"
  })
  try{
    await Imageupload(imgUrl1,imgUrl2,paramsid)
  }catch(err){
    console.log(err)
  }finally{
    toast.dismiss("loading")
    toast.success("Successfull..")
    setloading(false)
  }
  }
    
  return (
    
    <>
    <Header/>
    <div className='flex flex-col items-center gap-10 py-20'>
      <h1 className='text-[#fff] text-4xl'>Upload Your Documents Here...</h1>
      <div className='text-[#ffffff]'>
      <h1 className='text-2xl'>Required Documents</h1>
      <ol type='a'>
      <p>- PassportSize Photo</p>
      <p>- Birth Cerificate</p>
      <p>- Old Citizenship Photo</p>
      <p>- **If Spouse Husband's Citizenship Photo </p>
      </ol>
     
      </div>
      
    <UploadDropzone 
      className='ut-button:bg-[#000] bg-[#121212] w-[50%] r'
    endpoint='imageUploader'
    onClientUploadComplete={(res) => {
      setImgUrl1(res[0].url)
      setImgUrl2(res[1].url)
    }}
    onUploadError={(error) => {
    // Do something with the error.
    alert(`ERROR! ${error.message}`);
    }}
    />
    {imgUrl1.length===0 && imgUrl2.length===0 ? null : 
    <div className='flex flex-col gap-10 px-20'>
      <div className='flex gap-20'>
      <Image src={`${imgUrl1}`} alt="pic" width={500} height={500}/>
    <Image src={`${imgUrl2}`} alt="pic" width={500} height={500}/>
      </div>
    <div className='flex justify-center '>
    <Button onClick={setupDb} className='bg-[#fff] text-[#]' disabled={loading}>Submit</Button>
    </div>
    </div>
    }
    
  </div>
  </>
)}

    
  
