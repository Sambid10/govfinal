"use server"
import {auth} from "../../auth"

export async function getCurrentUser() {
  const session = await auth()
  return session?.user;
}

export async function getCurrentUserEmail() {
  const session = await auth()
  return session?.user.email as string;
}