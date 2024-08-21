"use server"
import { Resend } from "resend";
import {render} from "@react-email/components"
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { KoalaSuccessEmail } from "@/components/email/email-success";
const resend = new Resend(process.env.RESEND_API_KEY as string);

export const ApproveDocuments= async(postid:string) => {
    console.log("RUNNING")
    console.log("ASSHOLE")
    await db.post.update({
       where:{
        id:postid
       },
       data:{
        UserId:undefined,User:undefined,img1:undefined,img2:undefined,imgupload:undefined,imgApprove:true,
        firstname:undefined,lastname:undefined,middlename:undefined,gender:undefined,address:undefined,province:undefined,birthno:undefined,citizenship:undefined,dob:undefined,fathername:undefined,mobileno:undefined,mothername:undefined,applicantdistrict:undefined,applicantprovince:undefined,appointmentDate:undefined,appointmentDistrict:undefined,appointmentLoaction:undefined,appointmentState:undefined,caste:undefined,citizenshiptype:undefined,
        education:undefined,fcitizen:undefined,flast:undefined,fmiddle:undefined,fnational:undefined,jaridate:undefined,jaridistrict:undefined,married:undefined,mcitizen:undefined,mlast:undefined,mmiddle:undefined,mnational:undefined,proffession:undefined,religion:undefined,spousecitizen:undefined,spousefname:undefined,spouselname:undefined,spousemname:undefined,spousenational:undefined,village:undefined,wardno:undefined,Status:undefined,
       }
    })
    try{
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "sambidshk10@gmail.com",
            subject: "Thank you",
            html:render(KoalaSuccessEmail()
        ) }).then(()=>{
            console.log("ASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
        });
    }catch(err){
        console.log(err)
    }finally{
        console.log("SUCCESSFUKK")
        redirect("/admin")
    }
	 
}