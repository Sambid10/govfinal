"use client"
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { useState } from 'react'
export default function CheckBox() {
    const [chk1,setchk1]=useState(false)
    const [chk2,setchk2]=useState(false)
  return (
    <div className='relative h-full '>
        <div className='flex flex-col gap-4'>
              
              <div className='flex gap-2'>
              <Checkbox id="terms1" onClick={()=>setchk1((prev)=>!prev)}/>
                <div className="flex flex-col gap-1">
                <label
                htmlFor="terms1"
                className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                One Time Registration.
                </label>  
                <p className="text-sm text-muted-foreground">
                After Registering Your Information can't be Changed.
                </p>
                </div>
              </div>

              <div className='flex gap-2'>
              <Checkbox id="term2"  onClick={()=>setchk2((prev)=>!prev)}/>
                <div className="flex flex-col gap-1">
                <label
                htmlFor="term2"
                className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Accept Our Terms & Conditons.
                </label>  
                <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
                </p>
                </div>
              </div>
              </div>
              <div className='absolute z-10 bottom-2 right-2'>
            
            <Button 
            disabled={!chk1 || !chk2}
            className='bg-[#fff] text-[#000] hover:bg-[#102C57] hover:text-[#fff] transition-all duration-200 ease-out'>
              <Link href="/verification/register">
                    Proceed
              </Link>
            </Button>
          </div>
  </div>
  )
}
