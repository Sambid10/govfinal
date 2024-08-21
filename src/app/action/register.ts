"use server"
import { getCurrentUser } from "@/lib/sessions"
import { RegisterSchema } from "../schema/register"
import * as z from "zod"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
export const regitser=async(values:z.infer<typeof RegisterSchema>)=>{
    console.log(values)
    
    const user=await getCurrentUser()
    const {firstname,lastname,middlename,gender,address,province,birthno,citizenship,dob,fathername,mobileno,mothername,applicantdistrict,applicantprovince,appointmentDate,appointmentDistrict,appointmentLoaction,appointmentState,caste,citizenshiptype,
        education,fcitizen,flast,fmiddle,fnational,jaridate,jaridistrict,married,mcitizen,mlast,mmiddle,mnational,proffession,religion,spousecitizen,spousefname,spouselname,spousemname,spousenational,village,wardno
    }=values 
console.log(values)
    const post= await db.post.create({
    data:{
     firstname,lastname,middlename,gender,address,province,birthno,citizenship,dob,fathername,mobileno,mothername,applicantdistrict,applicantprovince,appointmentDate,appointmentDistrict,appointmentLoaction,appointmentState,caste,citizenshiptype,
     education,fcitizen,flast,fmiddle,fnational,jaridate,jaridistrict,married,mcitizen,mlast,mmiddle,mnational,proffession,religion,spousecitizen,spousefname,spouselname,spousemname,spousenational,village,wardno,UserId:user?.email,}
         
 })
 if(post.id){
    return redirect(`/verification/dashboard/${post.id}`)
 }
 }

