import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white font-figtree">
      <Navbar />
      
      <div className="pt-40 pb-24 container-custom flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-3xl bg-white rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-gray-50 p-12 md:p-24 flex flex-col items-center text-center">
          
          {/* Green Check Icon with Glow and Rings */}
          <div className="relative mb-16 scale-110 md:scale-125">
            {/* Outer Ring 2 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-green-50/30 rounded-full blur-sm" />
            
            {/* Outer Ring 1 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-green-50/60 rounded-full" />
            
            {/* Main Green Circle */}
            <div className="relative w-24 h-24 bg-linear-to-b from-[#00D95A] to-[#00B34A] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,217,90,0.4)]">
              <Check className="w-12 h-12 text-white stroke-[3.5px]" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-[52px] font-bold text-[#333] mb-8 leading-tight tracking-tight font-sans!">
            Message Sent!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl font-medium">
            We've received your message. Thank you for contacting us. We'll get in touch with you shortly.
          </p>
          
          <div className="mt-16">
            <Link 
              href="/"
              className="text-primary font-bold text-lg hover:underline underline-offset-4 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
