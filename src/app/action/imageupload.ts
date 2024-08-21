"use server"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
export default async function Imageupload(imgUrl1:string,imgUrl2:string,paramsid:string) 
{
    console.log(paramsid,imgUrl1,imgUrl2)
    await db.post.update({
        where:{
            id:paramsid
        },data:{
            UserId:undefined,User:undefined,img1:imgUrl1,img2:imgUrl2,imgupload:true,
            firstname:undefined,lastname:undefined,middlename:undefined,gender:undefined,address:undefined,province:undefined,birthno:undefined,citizenship:undefined,dob:undefined,fathername:undefined,mobileno:undefined,mothername:undefined,applicantdistrict:undefined,applicantprovince:undefined,appointmentDate:undefined,appointmentDistrict:undefined,appointmentLoaction:undefined,appointmentState:undefined,caste:undefined,citizenshiptype:undefined,
            education:undefined,fcitizen:undefined,flast:undefined,fmiddle:undefined,fnational:undefined,jaridate:undefined,jaridistrict:undefined,married:undefined,mcitizen:undefined,mlast:undefined,mmiddle:undefined,mnational:undefined,proffession:undefined,religion:undefined,spousecitizen:undefined,spousefname:undefined,spouselname:undefined,spousemname:undefined,spousenational:undefined,village:undefined,wardno:undefined,Status:undefined,
        }
    })
    redirect("/verification/register")
}
