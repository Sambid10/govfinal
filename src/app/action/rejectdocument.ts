"use server"
import { Resend } from "resend";
import {render} from "@react-email/components"
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import KoalaFailEmail from "@/components/email/email-fail";
const resend = new Resend(process.env.RESEND_API_KEY as string);

export const RejectDocuments= async(postid:string) => {
    await db.post.update({
       where:{
        id:postid
       },
       data:{
        UserId:undefined,User:undefined,img1:undefined,img2:undefined,imgupload:undefined,imgApprove:false,
        firstname:undefined,lastname:undefined,middlename:undefined,gender:undefined,address:undefined,province:undefined,birthno:undefined,citizenship:undefined,dob:undefined,fathername:undefined,mobileno:undefined,mothername:undefined,applicantdistrict:undefined,applicantprovince:undefined,appointmentDate:undefined,appointmentDistrict:undefined,appointmentLoaction:undefined,appointmentState:undefined,caste:undefined,citizenshiptype:undefined,
        education:undefined,fcitizen:undefined,flast:undefined,fmiddle:undefined,fnational:undefined,jaridate:undefined,jaridistrict:undefined,married:undefined,mcitizen:undefined,mlast:undefined,mmiddle:undefined,mnational:undefined,proffession:undefined,religion:undefined,spousecitizen:undefined,spousefname:undefined,spouselname:undefined,spousemname:undefined,spousenational:undefined,village:undefined,wardno:undefined,Status:undefined,
       }
    })
    try{
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "sambidshk10@gmail.com",
            subject: "Sorry",
            html:render(KoalaFailEmail()
        ) })
    }catch(err){
        console.log(err)
    }finally{
        redirect("/admin")
    }
	 
}