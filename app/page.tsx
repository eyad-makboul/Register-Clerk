"use client";

import { 
  SignInButton, 
  SignUpButton, 
  UserButton 
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
  
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-10 font-sans">
      
     
      <Card className="w-full max-w-6xl border-none shadow-2xl rounded-[32px] p-6 md:p-12 bg-white">
        <CardContent className="p-0">
          
         
          <nav className="flex items-center justify-between border-b border-slate-100 pb-6 mb-12">
            <div className="text-xl font-bold text-[#3b6fc4]">Logo</div>
            
           
            <div className="flex items-center gap-4">
           
              <SignInButton mode="modal">
                <Button variant="outline" className="border-[#3b6fc4] text-[#3b6fc4] hover:bg-blue-50">
                  Sign In
                </Button>
              </SignInButton>

            
              <SignUpButton mode="modal">
                <Button className="bg-[#3b6fc4] hover:bg-[#2d56a0] text-white">
                  Register
                </Button>
              </SignUpButton>

        
              <UserButton appearance={{ elements: { userButtonAvatarBox: "h-10 w-10" } }} />
            </div>
          </nav>

          
          <main className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
         
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold text-slate-900">About Us</h1>
              <p className="text-[50px] leading-relaxed text-sky-900">
                Welcome in my Registeration Page by Clerk and chadcn UI &#129395;
              </p>
              <Button className="bg-[#3b6fc4] hover:bg-[#2d56a0] text-white px-6 h-12 shadow-lg shadow-blue-100">
                Learn More
              </Button>
            </div>

            <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                alt="About Us Image"
                className="w-full h-full object-cover"
              />
            </div>

          </main>

        </CardContent>
      </Card>
    </div>
  );
}