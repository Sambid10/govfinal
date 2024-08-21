"use server"
import * as z from "zod"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { RegisterSchema } from "../schema/register"

export const update=async(values:z.infer<typeof RegisterSchema>,params:any)=>{
    const {firstname,lastname,middlename,gender,address,province,birthno,citizenship,dob,fathername,mobileno,mothername,applicantdistrict,applicantprovince,appointmentDate,appointmentDistrict,appointmentLoaction,appointmentState,caste,citizenshiptype,
        education,fcitizen,flast,fmiddle,fnational,jaridate,jaridistrict,married,mcitizen,mlast,mmiddle,mnational,proffession,religion,spousecitizen,spousefname,spouselname,spousemname,spousenational,village,wardno}=values
console.log(values)
console.log(params.id,"oppA")
    const post= await db.post.update({
        where:{
           id:params.id
        },
    data:{
        
    firstname:firstname,lastname:lastname,middlename:middlename,gender:gender,address:address,province:province,birthno:birthno,citizenship:citizenship,dob:dob,fathername:fathername,mobileno:mobileno,mothername:mothername,applicantdistrict,applicantprovince,appointmentDate,appointmentDistrict,appointmentLoaction,appointmentState,caste,citizenshiptype,
    education,fcitizen,flast,fmiddle,fnational,jaridate,jaridistrict,married,mcitizen,mlast,mmiddle,mnational,proffession,religion,spousecitizen,spousefname,spouselname,spousemname,spousenational,village,wardno}
 })
 console.log(post)
if(post.id){
    redirect(`/verification/dashboard/${params.id}`)
 }
 }

