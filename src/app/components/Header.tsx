"ude client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../../../public/lol.svg"
import Nepal from "../../../public/nepal.svg"
export default function Header() {
  return (
    <div>
        <div className='sticky top-0 h-20 bg-[#060403] text-[#F6F5F2] px-2 lg:px-20'>
            <div className='h-full flex items-center gap-6 justify-between'>
              
              <div className='flex gap-2'>
                <Link href="/verification">
                <Image src={Logo} alt='lol'
                  className='h-14 w-14'/>
                </Link>
                
                    <div className='flex flex-col'>
                        <h1 className=' md:font-semibold md:text-base  text-sm'>Government of Nepal</h1>
                        <h1 className='md:font-semibold md:text-base text-sm'>Ministry of Home Affairs</h1>
                        <h1 className='text-red-600 md:font-bold  md:text-base text-sm'>Department of National ID and Civil Registration</h1>
                    </div>
              </div>
              
              <Image src={Nepal} alt='lol1'
                className='h-14 w-14'/>
            </div>
        </div>
    </div>
  )
}
