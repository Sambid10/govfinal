import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter"
import {db} from "./src/lib/db"
import authConfig from "./auth.config";
import { getUserByID } from "@/lib/hooks";

export const {
    handlers,
    auth,
    signOut,
    signIn,
}=NextAuth({
    pages: {
        signIn: "/auth/login",   
      },
    callbacks:{
        async session({token,session}){
            console.log({
                sessionToken:token,
                session
            })
            if(token.sub && session.user){
                session.user.id=token.sub
            }
            if(token.role && session.user){
                session.user.role=token.role as "ADMIN" | "USER";
            }
            return session
        },
        async jwt({token}){
            if(!token.sub) return token
            const exisitinguser=await getUserByID(token.sub)
            if(!exisitinguser){
                return token
            }
            token.role=exisitinguser.role
            return token;
        },
        
    },
    secret:`${process.env.NEXTAUTH_SECRET}`,
    adapter:PrismaAdapter(db),
    session:{strategy:"jwt"},
   ...authConfig
})


