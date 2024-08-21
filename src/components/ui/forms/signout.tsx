import React from 'react'
import { Button } from '@/app/components/ui/button'
import { signOut } from '../../../../auth'
import { redirect } from 'next/navigation'
export default function Signout() {
  return (
    <form action={async()=>{
        "use server"
        await signOut().then(()=>{
        })
        redirect("/")
      }}>
      <Button size="sm" type='submit' className='bg-[#fff] text-[#000] hover:bg-[#102C57] hover:text-[#fff] transition-all duration-200 ease-out'>
        SignOut
      </Button>
      </form>
  )
}
