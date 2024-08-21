import { redirect } from 'next/navigation';
import { auth } from '../../../auth' 
import Image from 'next/image';
import Pic from "../../../public/2.jpg"
import Link from 'next/link';
import { Button } from '../components/ui/button';
import PersonalInfo from '@/components/PersonalInfo';
import Header from '../components/Header';
import { Check } from 'lucide-react';
export default async function  page() {
  const session=await auth();
  if(!session?.user){
    redirect("/api/auth/signin?callbackUrl=/verification")
  }
  const pic= session.user.image as string
  const role=session.user.role 
  return (
    <>
        
        <Header/>
       
        <div className='h-14 px-2  md:px-20   w-full bg-[#060403] border-t-[1px] border-[#121212] flex items-center justify-end  gap-2 text-[#F6F5F2]'>
           
          
           
         <PersonalInfo pic={pic} role={role}/>

          {/* <Signout/> */}
          
          </div>
  
    <main className="h-[calc(100svh-136px)] flex  w-full  bg-[#121212]">
     
      <div className='h-[100%] flex flex-col justify-center items-center text-[#fff] w-1/2 px-2 text-center gap-4'>
            <h1 className='text-5xl tracking-wide font-bold shadow-xl bg-clip-text text-transparent overflow-visible  bg-gradient-to-b from-white to-gray-200'>Welcome to Department of National ID and Civil Registration.</h1>
            <h1 className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 '>You can now apply online.Anytime,Anywhere.</h1>
      </div>
      <div className='relative h-[100%] w-1/2 flex justify-center items-center'>
            <Image src={Pic} alt='pic' className='absolute inset-0 h-full z-10 object-cover opacity-55 rounded-xl'>
           </Image>
           <span className='absolute z-10 w-2/3 h-1/2  text-[#fff] bg-[#121212] border-[1px] border-gray-800 opacity-95 px-2 py-2 rounded-xl'>
            <div className='px-2 py-2 h-[70%]'>
            
              <h1 className='text-5xl text-[#fff] text-center font-bold underline mb-2'>Register Now!!</h1>
              <h1 className='text-sm text-gray-200'>Current User : {session.user.name}</h1>
              
              <div className='flex flex-col gap-1 mt-6'>
                <p className='flex items-center text-base'><Check className='h-4 w-4 gap-1'/> Access to government services healthcare & education.</p>
                <p className='flex items-center text-base'><Check className='h-4 w-4 gap-1'/> Collecting demographic data for planning & policy-making.</p>
                <p className='flex items-center text-base'><Check className='h-4 w-4 gap-1'/>Assisting in tracking tax obligations & ensuring tax compliance.</p>
                <p className='flex items-center text-base'><Check className='h-4 w-4 gap-1'/> Verifying identity and eligibility for employment.</p>
              </div>
            <br/>
              {/* <CheckBox/> */}
            </div>
            <div className='absolute bottom-2 right-2 z-10'>
            <Link href="/verification/register">
            <Button 
            className='bg-[#fff] text-[#000] hover:bg-[#102C57] hover:text-[#fff] transition-all duration-200 ease-out'>
                    Proceed
            </Button>
            </Link>
            </div>
           
           </span>
      </div>
    </main>
    </>
    
  )
}
