"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { Input } from './ui/input'
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema } from '../schema/userid'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/app/components/ui/form';
import { Button } from './ui/button'
import { toast } from 'sonner'
import { biometricAdmin } from '../action/biometricadmin'
export default function BiometricDashboard() {
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
            const data= await biometricAdmin(values)
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
        
       
      </div>
      <h1 className='text-4xl mb-5 font-bold underline underline-offset-2'>BIOMETRIC DASHBOARD</h1>

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
