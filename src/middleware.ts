"use client"
import NextAuth from "next-auth"
import authConfig from "../auth.config"
const {auth }=NextAuth(authConfig)
import { DEFAULT_LOGIN_REDIRECT ,apiAuthprefix,publicRoutes,authRoutes} from "../routes"

export default auth( (req) =>{
  const {nextUrl}=req;
  const isLoggedIn=!!req.auth;
  const isPublicRoute=publicRoutes.includes(nextUrl.pathname)
  const authroutes=authRoutes.includes(nextUrl.pathname)
  const authproviders=apiAuthprefix.includes(nextUrl.pathname)


  if(authproviders){
    return
  }
  if(authroutes){
    if(isLoggedIn){
       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
    }
    return undefined
  }
  // if (!isLoggedIn && !isPublicRoute) {
  //   return Response.redirect(new URL("/auth/login", nextUrl));
  // }

 return undefined
})




export const config={
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)","/(api|trpc)(.*)",
      ]
}
