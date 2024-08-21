"use client"
import { RegisterSchema } from '@/app/schema/register'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/app/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../app/components/ui/select"
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button'
import { ChevronRight ,ChevronLeft} from 'lucide-react'
import {easeIn, motion} from "framer-motion"
import { setCurrentStep ,upDateFormData} from '../../../../redux/slices/personalinfoSlice'
import { useSelector ,useDispatch} from 'react-redux'
// import { upDateFormData } from '../../../../redux/slices/personalinfoSlice'

export default function Additionalform() {
    const currentstep=useSelector((state:any)=>state.personal.currentStep)
    console.log(currentstep)
    const formdata=useSelector((state:any)=>state.personal.FormData)
    const form=useForm<z.infer<typeof RegisterSchema>>({
        resolver:zodResolver(RegisterSchema),
        defaultValues:{
            // ...formdata,
            firstname:"",
            middlename:"",
            lastname:"",      
        }
    })
    const dispatch=useDispatch()
   const handleformSubmit=async(values:z.infer<typeof RegisterSchema>)=>{
    dispatch(upDateFormData(values))
    
    dispatch(setCurrentStep(currentstep+1)) 
}
const handlePreviousState=()=>{
  dispatch(setCurrentStep(currentstep-1)) 
}
  return (
  
        <div className='md:px-20  px-5 py-4 text-center w-full '>
         
            <h1 className='text-[#fff] text-3xl font-bold'>Additional Information.</h1>
            <p className='text-base'> Getting To You know Better.</p>
            <motion.div 
            initial={{opacity:0,x:-10}}
            animate={{opacity:1,x:0}}
            transition={{ease:easeIn,duration:0.35}}
            className='mt-6 w-[100%] '>
                        <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleformSubmit)} className='flex flex-col gap-8 w-full '> 
                            <FormField
                            name='middlename'
                            control={form.control}
                            render={({field})=>
                                <FormItem>
                                    <FormLabel className='flex justify-start mb-1'>Address:</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Enter Your Middle Name' className='bg-gray-100 text-black w-full'/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>             
                            }>
                            </FormField>

                            <FormField
                            name='lastname'
                            control={form.control}
                            render={({field})=>
                                <FormItem>
                                    <div className='flex items-center justify-between w-full mb-1'>
                                    <FormLabel>Province*:</FormLabel>
                                    <FormMessage className='flex justify-start'/>
                                    </div>
                                    
                                    <FormControl>
                                        <Input {...field} placeholder='Province' className='bg-gray-100 text-black w-full'/>
                                    </FormControl>
                                  
                                </FormItem>             
                            }>
                            </FormField>

                            <div className='w-full flex justify-between'>
                            {currentstep>=1 && 
                                 <Button  onClick={handlePreviousState} className='group bg-[#121212] text-[#fff]  md:w-1/6 w-1/4 hover:opacity-80 transition-all duration-200 ease-in' size="sm">
                                 <div className='flex items-center'>
                                 Previous
                                 <ChevronLeft className='h-5 w-5 group-hover:translate-x-1 transition-all duration-200 ease-in'/>
                                 </div>
                             </Button>
                            }
                            <Button type='submit' className='group bg-[#121212] text-[#fff]  md:w-1/6 w-1/4 hover:opacity-80 transition-all duration-200 ease-in' size="sm">
                                <div className='flex items-center'>
                                Next
                                <ChevronRight className='h-5 w-5 group-hover:translate-x-1 transition-all duration-200 ease-in'/>
                                </div>
                            </Button>
                            </div> 
                            </form>
                        </Form>  
            </motion.div>
        </div>
 
  )
}
