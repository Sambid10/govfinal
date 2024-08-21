import { render } from "@react-email/render";
import WelcomeTemplate from "../../../../emails/index";
import { Resend } from "resend";
const resend = new Resend();

export async function VerifyEmail(email:string) {
	// rate limit
	// authorization
    try{
        await resend.emails.send({
            from: "Acme <noreply@your_domain.com>",
            to: [email],
            subject: "Thank you",
            html: render(WelcomeTemplate('ASS')),
        });
    }catch(err){
        console.log(err)
    }
	 
}