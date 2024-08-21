import * as z from "zod"

export const AdminSchema=z.object({
   firstname:z.string().min(1,{message:"First Name is Required."}),
   middlename:z.string().optional(),
   lastname:z.string().min(1,{message:"Last Name is Required."}),
   address:z.string().min(1,{message:"Required"}),
   province:z.string().min(1,{message:"Required"}),
   gender:z.string().min(1,{message:"Required"}),
  // zone:z.string().min(1,{message:"Select A Province."}),
  // district:z.string().min(1,{message:"Select A District."}),
  mobileno:z.string().min(1,{message:"Required"}),
  citizenship:z.string().min(1,{message:"Required"}),
  fathername:z.string().min(1,{message:"Required"}),
  mothername:z.string().min(1,{message:"Required"}),
  dob:z.string().min(1,{message:"Required"}),
  birthno:z.string().min(1,{message:"Required"}),
  userid:z.string()
  // gender:z.string().min(1,{message:"Required"}),
  // education:z.string().min(1,{message:"Required"}),
  // married:z.string().min(1,{message:"Required"})
})
