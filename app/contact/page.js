import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 md:pt-40 pb-12 md:pb-24 container-custom">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div>
            <h1 className="text-[54px] md:text-[100px] font-serif text-secondary mb-8 md:mb-10 leading-none md:leading-[0.9] tracking-tight">
              Let's Talk!
            </h1>
            
            <p className="text-[16px] md:text-[17px] text-gray-500 mb-12 md:mb-16 leading-relaxed max-w-md font-figtree">
              We're here to make your supply chain smoother. Whether you're a supplier 
              ready to grow or a food business tired of chasing deliveries, we'd love to hear from you.
            </p>

            <div className="space-y-12 md:space-y-16">
              <div>
                <h3 className="text-[24px] md:text-[28px] font-serif text-secondary mb-4 italic">Ways to Reach Us</h3>
                <p className="text-[15px] md:text-[16px] text-secondary leading-relaxed font-figtree">
                  <span className="font-bold text-secondary">dosteonapp@gmail.com</span> (For general inquiries and support). We typically respond within minutes
                </p>
              </div>

              <div>
                <h3 className="text-[24px] md:text-[28px] font-serif text-secondary mb-4 italic">Closing Note</h3>
                <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed font-figtree">
                  Your challenges are our inspiration. <br />
                  Don't hesitate to reach out, big or small, we're listening.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-50 p-6 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
