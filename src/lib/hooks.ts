import { db } from "./db"

export const getUserByID=async(id:string)=>{
    try{
        const user=await db.user.findUnique({where:{id}})
        return user
    }
    catch{
        return null
    }
}