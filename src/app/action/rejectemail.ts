"use server"
import { Resend } from "resend";
import {render} from "@react-email/components"
import { redirect } from "next/navigation";
import {KoalaErrorEmail} from "@/components/email/error-template";
const resend = new Resend(process.env.RESEND_API_KEY as string);
import { db } from "@/lib/db";
export const ErrorEmail= async(email:string,date:string,id:string,post:any) => {
    const {        
        married         ,
        education ,
        caste ,
        religion, 
        proffession,
        citizenshiptype ,
        jaridistrict ,
        jaridate ,
        applicantdistrict, 
        applicantprovince,
        wardno ,
        village ,
        fmiddle ,
        flast ,
        mmiddle ,
        mlast ,
        fnational ,
        fcitizen ,
        mnational ,
        mcitizen ,
        spousefname ,
        spousemname ,
        spouselname ,
        spousenational ,
        spousecitizen,
        appointmentState,
        appointmentDistrict,
        appointmentDate,
        appointmentLoaction,
       
      }=post
    await db.post.update({
        where:{id:id},data:{
            UserId:undefined,id:undefined,User:undefined,
            firstname:undefined,lastname:undefined,middlename:undefined,gender:undefined,address:undefined,province:undefined,birthno:undefined,citizenship:undefined,dob:undefined,fathername:undefined,mobileno:undefined,mothername:undefined,applicantdistrict,applicantprovince,appointmentDate,appointmentDistrict,appointmentLoaction,appointmentState,caste,citizenshiptype,
            education,fcitizen,flast,fmiddle,fnational,jaridate,jaridistrict,married,mcitizen,mlast,mmiddle,mnational,proffession,religion,spousecitizen,spousefname,spouselname,spousemname,spousenational,village,wardno,Status:false
        }
    })
    try{
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "sambidshk10@gmail.com",
            subject: "Sorry",
            html:render(KoalaErrorEmail())
        }).then(()=>{
          
        });
    }catch(err){
        console.log(err)
    }finally{
      
        redirect("/admin")
    }
	 
}