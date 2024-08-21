import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
interface KoalaWelcomeEmailProps {
 
}
export const KoalaWelcomeEmail = ({
  
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <div className="flex gap-2">
        <Img
         src={`https://utfs.io/f/30266e31-4a0e-48eb-a7f3-0308a71d3051-jlo1ag.jpg`}
          width="50"
          height="50"
          alt="DOINCDR"
          style={logo}
        />
        
        </div>
       
        <Text style={title}>Department of National Id & Registration.</Text>
        <Text style={paragraph}>Hello,</Text>
        <Text style={paragraph}>
        Your National Id Registration has been Approved.The ID will be available in your nearest DOINCDR in 3-4 working days..
        </Text>
        <Section style={btnContainer}>
        
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          National ID Registration
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          DOINCDR Branch,Lalipur,Nepal
        </Text>
      </Container>
    </Body>
  </Html>
);

KoalaWelcomeEmail.PreviewProps = {
firstname: "Alan",
} as KoalaWelcomeEmailProps;

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};
const title = {
  fontSize: "24px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
