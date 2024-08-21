import NextAuth,{type DefaultSession} from "next-auth"

export type ExtendedUSer=DefaultSession["user"] & {
    role:"ADMIN" | "USER"
}
declare module "next-auth"{
    interface Session {
        user:ExtendedUSer
    }
}