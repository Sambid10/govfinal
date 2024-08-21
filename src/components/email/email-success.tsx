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
  interface KoalaSuccessEmail{
   
  }
  export const KoalaSuccessEmail =() => (
    <Html>
      <Head />
      <Preview>
      Your Provided Document...
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://utfs.io/f/9d688139-0d45-44db-b24b-e3219559ba6a-1sdsh.png`}
            width="50"
            height="50"
            alt="DOINCDR"
            style={logo}
          />
           <Text style={title}>Department of National Id & Registration.</Text>
          <Text style={paragraph}>Hello,</Text>
          <Text style={paragraph}>
          Your Provided Document  has been approved. The National Id will be available in 3-4 working days. Please visit the designated department during the form collection period,To Collect Your Card."
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
  
  KoalaSuccessEmail.PreviewProps = {
  firstname: "Alan",
  } as KoalaSuccessEmail;
  
  export default KoalaSuccessEmail;
  
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
  const title = {
    fontSize: "24px",
    lineHeight: "26px",
  };
  