import { Button } from "@/app/components/ui/button";
import Link from "next/link";
export default  async function Home() {

  return (
    <main className="h-[100vh] bg-[#121212]">
      <div className="h-[100%] flex justify-center items-center ">
        <div className="flex flex-col gap-2 justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-[#fff] mb-4">National IDConnect: 
        <br/>
        Your Gateway to Secure Identity Registration</h1>
       <Link href="/auth/login">
        <Button 
        size="lg" className="bg-[#fff] text-[#000] hover:bg-[#102C57] hover:text-[#fff] transition-all duration-200">
          GET STARTED
        </Button>
        </Link>
        </div> 
      </div>
    </main>
  );
}
