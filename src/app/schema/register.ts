import * as z from "zod"
const eighteenYearsInMilliseconds = 18 * 365.25 * 24 * 60 * 60 * 1000;
export const RegisterSchema=z.object({
   firstname:z.string().min(1,{message:"First Name is Required."}),
   middlename:z.string().optional(),
   lastname:z.string().min(1,{message:"Last Name is Required."}),
   address:z.string().min(1,{message:"Required"}),
   province:z.string().min(1,{message:"Required"}),
   gender:z.string().min(1,{message:"Required"}),
  mobileno:z.string().min(1,{message:"Required"}),
  citizenship:z.string().min(1,{message:"Required"}),
  fathername:z.string().min(1,{message:"Required"}),
  mothername:z.string().min(1,{message:"Required"}),
   dob:z.string().superRefine((date, ctx) => {
    const birthDate = new Date(date);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
  
    if (isNaN(birthDate.getTime())) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid date format" as string,
        path: ["dob"]
      });
    } else if (ageInMilliseconds < eighteenYearsInMilliseconds) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Age must be greater 18 years old",
      
      });
    }
  }),
  appointmentDate:z.string(),
  birthno:z.string().min(1,{message:"Required"}),
  married:z.string().min(1,{message:"Required"}),
  education:z.string().min(1,{message:"Required"}),
  caste:z.string().min(1,{message:"Required"}),
  religion:z.string().min(1,{message:"Required"}),
  proffession:z.string().min(1,{message:"Required"}),
  citizenshiptype:z.string().min(1,{message:"Required"}),
  jaridistrict:z.string().min(1,{message:"Required"}),
  jaridate:z.string().min(1,{message:"Required"}),
  applicantdistrict:z.string().min(1,{message:"Required"}),
  applicantprovince:z.string().min(1,{message:"Required"}),
  wardno:z.string().min(1,{message:"Required"}),
  village:z.string().min(1,{message:"Required"}),
  fmiddle:z.string().min(1,{message:"Required"}),
  flast:z.string().min(1,{message:"Required"}),
  mmiddle:z.string().min(1,{message:"Required"}),
  mlast:z.string().min(1,{message:"Required"}),
  fnational:z.string().min(1,{message:"Required"}),
  fcitizen:z.string().min(1,{message:"Required"}),
  mnational:z.string().min(1,{message:"Required"}),
  mcitizen:z.string().min(1,{message:"Required"}),
  spousefname:z.string(),
  spousemname:z.string(),
  spouselname:z.string(),
  spousenational:z.string(),
  spousecitizen:z.string(),
  appointmentState:z.string().min(1,{message:"Required"}),
  appointmentDistrict:z.string().min(1,{message:"Required"}),
 
  appointmentLoaction:z.string().min(1,{message:"Required"}),

})