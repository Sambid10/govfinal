"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { admin } from '../action/admin'
import * as z from "zod"
import { Input } from './ui/input'
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle } from 'lucide-react'
import { UserSchema } from '../schema/userid'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/app/components/ui/form';
import { Button } from './ui/button'
import { toast } from 'sonner'
export default function AdminDashboard() {
    const [loading,setisLoading]=useState(false)
    const [error,setError]=useState("")
    const form=useForm<z.infer<typeof UserSchema>>({
        resolver:zodResolver(UserSchema),
        defaultValues:{
            userid:""
        }
    })
    const handleformSubmit=async(values:z.infer<typeof UserSchema>)=>{
       try{
        toast.loading("Loading...",{
            id:"toast"
        })
            setisLoading(true)  
            const data= await admin(values)
                if(data.error){
                    toast.dismiss("toast")
                    setError(data.error)
                    toast.error(data.error)}
                    else {
                        toast.success("Successfull..")
                    }
        }
          catch(error){
          }
          finally {
            toast.dismiss("toast")
            // Stop loading in any case
            setisLoading(false);
          }   
    }
  return (
    <div>
         <div className='px-20 mb-10 flex justify-center'>
        <div className='bg-yellow-100 py-2 px-2 rounded-xl flex gap-2 items-center justify-center w-[60%]'>
        <AlertTriangle className='text-yellow-700 h-5 w-5'/>
        <h1 className='text-yellow-700 font-normal'>Only Update The Information if Required Only.Once Reverted it can't Be Undone.</h1>
        </div>
       
      </div>
      <h1 className='text-4xl mb-5 font-bold underline underline-offset-2'>ADMIN DASHBOARD</h1>

         <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleformSubmit)} className='flex flex-col gap-4'>
                            <FormField
                            name='userid'
                            control={form.control}
                            render={({field})=>
                                <FormItem>
                                   <div className='flex items-center justify-between w-full mb-1'>
                                    <FormLabel>UserId*:</FormLabel>
                                   
                                    </div>
                                    <FormControl>
                                        <Input disabled={loading} {...field} placeholder='User Id' className='w-[30%] bg-[#121212] text-[#fff]'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>             
                            }>
                            </FormField>
                            <Button disabled={loading} type='submit' className='w-[30%] group bg-[#ffff] text-[#121212] px-2 py-2 hover:opacity-80 transition-all duration-200 ease-in' size="sm">
                                <div className='flex items-center'>
                                Submit
                                </div>
                            </Button>
                            </form>
        </Form>
                            <br/>
                            <br/>
        

        
        </div>
  )
}
