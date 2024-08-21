import * as z from "zod"

export const UserSchema=z.object({
  userid:z.string().min(1,{message:"Required"}),
})
