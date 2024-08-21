"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
export default async function  HandleDeletePost(id:any) {
  try{
    await db.post.delete({
        where:{
            id:id
        }
      })
  }
  catch(err){
    console.log(err)
  }
  finally{
   revalidatePath("/verification/register")
  }
}
