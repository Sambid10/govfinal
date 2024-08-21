"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RegisterSchema } from '@/app/schema/register'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/app/components/ui/form';
import { Select ,SelectTrigger,SelectItem,SelectValue,SelectContent} from '@/app/components/ui/select'
import { caste, citizenshipTypes, districts, numberOfReligions, professions, provinces } from '@/lib/nepal'
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { update } from '@/app/action/update'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'
export default function DashboardForm({post}:any) {
  
    const [loading,setisLoading]=useState(false)
    const params=useParams()
    const form=useForm<z.infer<typeof RegisterSchema>>({
        resolver:zodResolver(RegisterSchema),
        defaultValues:{
            firstname:`${post.firstname}`,
            middlename:`${post.middlename}`,
            lastname:`${post.lastname}`,
            gender:`${post.gender}`,
            address:`${post.address}`,
            province:`${post.province}`,
            birthno:`${post.birthno}`,
            citizenship:`${post.citizenship}`,
            dob:`${post.dob}`,
            fathername:`${post.fathername}`,
            mothername:`${post.mothername}`,
            mobileno:`${post.mobileno}`,
            applicantdistrict:`${post.applicantdistrict}`,
            applicantprovince:`${post.applicantprovince}`,
            appointmentDate:`${post.appointmentDate}`,
            appointmentDistrict:`${post.appointmentDistrict}`,
            appointmentLoaction:`${post.appointmentLoaction}`,
            appointmentState:`${post.appointmentState}`,
            caste:`${post.caste}`,
            citizenshiptype:`${post.citizenshiptype}`,
            education:`${post.education}`,
            fcitizen:`${post.fcitizen}`,
            flast:`${post.flast}`,
            fmiddle:`${post.fmiddle}`,
            fnational:`${post.fnational}`,
            jaridate:`${post.jaridate}`,
            jaridistrict:`${post.jaridistrict}`,
            married:`${post.married}`,
            mcitizen:`${post.mcitizen}`,
            mlast:`${post.mlast}`,
            mmiddle:`${post.mmiddle}`,
            mnational:`${post.mnational}`,
            proffession:`${post.proffession}`,
            religion:`${post.religion}`,
            spousecitizen:`${post.spousecitizen}`,
            spousefname:`${post.spousefname}`,
            spouselname:`${post.spouselname}`,
            spousemname:`${post.spousemname}`,
            spousenational:`${post.spousenational}`,
            village:`${post.village}`,
            wardno:`${post.wardno}`,
            

        }
    })
   
   const handleformSubmit=async(values:z.infer<typeof RegisterSchema>)=>{
    
      
        try{
            setisLoading(true)
            toast.loading("Loading...",{
                id:"loading"
            })
            
        const data= await update(values,params)
    
    }
        catch(error){

        }
        finally{
                setisLoading(false)
                toast.dismiss("loading")
        }
   
  console.log(form.watch())
    
}
form.watch()
  return (
    <div className='md:px-20  px-5 py-4 text-center w-full  '>
         
    <h1 className='text-[#fff] text-3xl font-bold'>Pesonal Information.</h1>
    <p className='text-base'> Please Enter Your Valid Information</p>
    <div
    className='mt-6 w-[100%]'>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(handleformSubmit)}>
                    <div className='flex  gap-4'>
                        <div className='w-[50%] flex flex-col gap-6'>
                        <FormField
                    name='firstname'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                           <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>First Name*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <FormControl>
                                <Input   disabled={loading} {...field} placeholder='Enter Your First Name' className='bg-[#121212] text-[#FFF]'/>
                            </FormControl>
                         
                        </FormItem>             
                    }>
                    </FormField>
                    
                    <FormField
                    name='middlename'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <FormLabel className='flex justify-start mb-2'>Middle Name:</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Your Middle Name' className='bg-[#121212] text-[#FFF] w-full'/>
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
                            <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>Last Name*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Your Last Name' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                          
                        </FormItem>             
                    }>
                    </FormField>

                   

                    <FormField
                    name='address'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>Place of Birth*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Your Birth Place' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                          
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='province'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>Province*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Your Province' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                          
                        </FormItem>             
                    }>
                    </FormField>
                    <FormField
                    name='mobileno'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>MobileNo*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Your Province' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                          
                        </FormItem>             
                    }>
                    </FormField>
                        </div>
                        <div className='w-[50%] flex flex-col gap-6'>
                        <FormField
                    name='birthno'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>BirthCertificate No*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Your BirthCertificate No' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                          
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='citizenship'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>CitizenShip No*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Your CitizenShip No' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                          
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='dob'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>DOB(dd/mm/yyyy)*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Your DateOf Birth' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                          
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='jaridate'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>जारी मिति (dd/mm/yyyy)*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder="Enter Date" className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                          
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='jaridistrict'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>जारी जिल्ला*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            
                            <Select onValueChange={field.onChange}>
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue  placeholder={`${post.jaridistrict}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {districts.map((citizen,i)=>
                                <SelectItem key={i} value={citizen}>{citizen}</SelectItem>
                                )}
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='citizenshiptype'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                             <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>CitizenShipType*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <Select onValueChange={field.onChange} >
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.citizenshiptype}`} />

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {citizenshipTypes.map((citizen,i)=>
                                <SelectItem key={i} value={citizen}>{citizen}</SelectItem>
                                )}
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>

                  
                            </div>
                   
                    

                    </div>
                  
                    <div className='h-[1px] bg-white w-full mt-5 mb-5'/>
                    <h1 className='text-[#fff] text-3xl font-bold mb-5'>Additional Information.</h1>
                   
                   <div className='flex gap-4'>
                    <div className='w-[50%] flex flex-col gap-6'>
                        <FormField
                    name='gender'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                             <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Gender*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <Select onValueChange={field.onChange}>
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.gender}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value='Male'>Male</SelectItem>
                                <SelectItem value='Female'>Female</SelectItem>
                                <SelectItem value='Others'>Others</SelectItem>
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='married'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                              
                              <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Marital Status:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <Select onValueChange={field.onChange} >
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.married}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value='Male'>Married</SelectItem>
                                <SelectItem value='Female'>Single</SelectItem>
                                <SelectItem value='Others'>Student</SelectItem>
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>


                    <FormField
                    name='religion'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                             <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Religon:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <Select onValueChange={field.onChange}>
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.religion}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                               
                             {numberOfReligions.map((religion,i)=>
                            <SelectItem key={i} value={religion}>{religion}</SelectItem>
                            )}
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>

                    </div>
                    <div className='w-[50%] flex flex-col gap-6'>
                    <FormField
                    name='education'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Education:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                         
                            <Select onValueChange={field.onChange}>
                          
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.education}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value='Masters'>Masters</SelectItem>
                                <SelectItem value='Bachelors'>Bachelors</SelectItem>
                                <SelectItem value='+2'>+2</SelectItem>
                                <SelectItem value='SEE'>SEE</SelectItem>
                                <SelectItem value='DLE'>DLE</SelectItem>
                                <SelectItem value='None'>None</SelectItem>
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>
                    <FormField
                    name='caste'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                             <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Caste:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <Select onValueChange={field.onChange}>
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.caste}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                             {caste.map((cast,i)=>
                            <SelectItem key={i} value={cast}>{cast}</SelectItem>
                            )}
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='proffession'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                             <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Proffession:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <Select onValueChange={field.onChange}>
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.proffession}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                             {professions.map((prof,i)=>
                            <SelectItem  key={i} value={prof}>{prof}</SelectItem>
                            )}
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>


                    
                    </div>

                   </div>

                   <div className='h-[1px] bg-white w-full mt-5 mb-5'/>
                    <h1 className='text-[#fff] text-3xl font-bold mb-1'>Contact Details.</h1>
                    <h1 className='underline underline-offset-2 mb-5'>Applicant Permanent Address</h1>
                   <div className='flex gap-4'>
                   
                    <div className='w-[50%] flex flex-col gap-6'>
                  
                  
                    <FormField
                    name='applicantdistrict'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                             <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>District:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <Select onValueChange={field.onChange}>
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.applicantdistrict}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                             {districts.map((prof,i)=>
                            <SelectItem key={i} value={prof}>{prof}</SelectItem>
                            )}
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>
                    <FormField
                    name='applicantprovince'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                             <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Province:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <Select onValueChange={field.onChange}>
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.applicantprovince}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                             {provinces.map((prof,i)=>
                            <SelectItem key={i} value={prof}>{prof}</SelectItem>
                            )}
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>
                   
                        </div>
                        <div className='flex flex-col gap-6 w-[50%]'>
                    <FormField
                    name='wardno'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Ward no:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Your Ward no' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='village'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Village/Nagar:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Your Village' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>
                    </div>
                        </div>
                        <div className='h-[1px] bg-white w-full mt-5 mb-5'/>
                    <h1 className='text-[#fff] text-3xl font-bold mb-1'>Family Details.</h1>
                    <h1 className='underline underline-offset-2 mb-5'>Father's Details.</h1>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-6 w-[50%]'>
                            
                    <FormField
                    name='fathername'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Father's First Name:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter First Name' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='fmiddle'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Father's Middle Name:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Middle Name' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='flast'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Father's Last Name:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Last Name' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>
                        </div>
                        <div className='flex flex-col gap-6 w-[50%]'>

                        <FormField
                    name='fnational'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Nationality:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Nationality' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='fcitizen'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>CitizenShip No:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter CitizenShip No ' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>

                        </div>

                    </div>
                    
                    <h1 className='underline underline-offset-2 mt-5 mb-5'>Mother's Details.</h1>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-6 w-[50%]'>
                        <FormField
                    name='mothername'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Mother's First Name:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter First Name ' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>
                    <FormField
                    name='mmiddle'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Mother's Middle Name:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Middle Name' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>
                    <FormField
                    name='mlast'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Mother's Last Name:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Last Name ' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>

                        </div>
                        <div className='flex flex-col gap-6 w-[50%]'>
                        <FormField
                    name='mnational'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Nationality:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Nationality ' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>
                    <FormField
                    name='mcitizen'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Citizenship No:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter CitizenShip No' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>
                            </div>





                    </div>
                  
                  
                    <h1 className='underline underline-offset-2 mb-5 mt-5'>Spouse's Details (Can Skip if No Spouse)</h1>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-6 w-[50%]'>
                            
                    <FormField
                    name='spousefname'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Spouse's First Name:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter First Name' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='spousemname'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Spouse's Middle Name:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Middle Name' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='spouselname'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Spouse's Last Name:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Last Name' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>
                        </div>
                        <div className='flex flex-col gap-6 w-[50%]'>

                        <FormField
                    name='spousenational'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Nationality:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter Nationality' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>

                    <FormField
                    name='spousecitizen'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                            <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>CitizenShip No:</FormLabel>
                            <FormMessage/>
                            </div>
                        
                            <FormControl>
                                <Input disabled={loading} {...field} placeholder='Enter CitizenShip No ' className='bg-[#121212] text-[#FFF] w-full'/>
                            </FormControl>
                            
                        </FormItem>             
                    }>
                    </FormField>

                        </div>

                    </div>
                    <div className='h-[1px] bg-white w-full mt-5 mb-5'/>
                    <h1 className='text-[#fff] text-3xl font-bold mb-5'>Appointment Details.(Mandatory)</h1>
                   <div className='flex gap-6'>
                    <div className='flex flex-col gap-6 w-[50%]'>
                    <FormField
                    name='appointmentDistrict'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                             <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>District:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <Select onValueChange={field.onChange}>
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.appointmentDistrict}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                             {districts.map((prof,i)=>
                            <SelectItem key={i} value={prof}>{prof}</SelectItem>
                            )}
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>
                    <FormField
                    name='appointmentState'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                             <div className='flex justify-between'>
                            <FormLabel className='flex justify-start mb-2'>Province:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <Select onValueChange={field.onChange}>
                           
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={`${post.appointmentState}`}/>

                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                             {provinces.map((prof,i)=>
                            <SelectItem  key={i} value={prof}>{prof}</SelectItem>
                            )}
                            </SelectContent>
                            </Select>
                          
                        </FormItem>             
                    }>
                    </FormField>

                    </div>
                    <div className='flex flex-col gap-6 w-[50%]'>

                    <FormField
                    name='appointmentLoaction'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                           <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>Ward No:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <FormControl>
                                <Input   disabled={loading} {...field} placeholder='Enter Ward No' className='bg-[#121212] text-[#FFF]'/>
                            </FormControl>
                         
                        </FormItem>             
                    }>
                    </FormField>
                    <FormField
                    name='appointmentDate'
                    control={form.control}
                    render={({field})=>
                        <FormItem>
                           <div className='flex items-center justify-between w-full mb-2'>
                            <FormLabel>Date(dd/mm/yyyy)*:</FormLabel>
                            <FormMessage className='flex justify-start'/>
                            </div>
                            <FormControl>
                                <Input   disabled={loading} {...field} placeholder='Enter Date' className='bg-[#121212] text-[#FFF]'/>
                            </FormControl>
                         
                        </FormItem>             
                    }>
                    </FormField>
                    </div>
                   </div>
            
                    
                    <div className='w-full flex justify-end mt-5'>     
                    <Button  disabled={loading} type='submit' className='group bg-[#121212] text-[#fff] md:w-1/6 w-1/4 hover:opacity-80 transition-all duration-200 ease-in' size="sm">
                        <div className='flex items-center'>
                        Submit
                        <ChevronRight className='h-5 w-5 group-hover:translate-x-1 transition-all duration-200 ease-in'/>
                        </div>
                    </Button>
                    </div>

                </form>
                </Form>                
    </div>
</div>
  )
}
