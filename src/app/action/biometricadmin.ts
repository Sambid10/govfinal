"use server"
import * as z from "zod"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { UserSchema } from "../schema/userid"
export const biometricAdmin=async(values:z.infer<typeof UserSchema>)=>{
    const {userid}=values
    console.log(userid)

    const post=await db.post.findFirst({
        where:{
            id:userid
        },
    })
   if(post){
        return redirect(`/verification/register/admin/upload/${post.id}/${`${post.img1}`}/${`${post.img2}`}`)
   }
   else{
    return {error:"User Not Found..."}
   }
 }
