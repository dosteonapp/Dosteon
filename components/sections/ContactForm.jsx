"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, X } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowErrorModal(false);

    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        router.push("/thank-you");
      } else {
        const data = await response.json();
        setErrorDetails(data.errors ? data.errors.map(err => err.message).join(", ") : "Connection error");
        setShowErrorModal(true);
      }
    } catch (err) {
      setErrorDetails("Network connectivity issue");
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form 
        action="https://formspree.io/f/mykprvod" 
        onSubmit={handleSubmit}
        method="POST"
        className="space-y-6 md:space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-500">First Name</label>
            <input
              required
              name="first_name"
              placeholder="John"
              className="w-full px-5 py-4 bg-[#F8FAFC] border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-gray-900 placeholder:text-gray-300"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-500">Last Name</label>
            <input
              required
              name="last_name"
              placeholder="Doe"
              className="w-full px-5 py-4 bg-[#F8FAFC] border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-gray-900 placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-500">Email</label>
          <input
            required
            type="email"
            name="email"
            placeholder="example@email.com"
            className="w-full px-5 py-4 bg-[#F8FAFC] border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-gray-900 placeholder:text-gray-300"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-500">Your Message</label>
          <textarea
            required
            name="message"
            placeholder="Tell us how we can help you"
            rows={6}
            className="w-full px-5 py-4 bg-[#F8FAFC] border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-gray-900 placeholder:text-gray-300 resize-none"
          />
        </div>

        {/* Formspree Settings */}
        <input type="hidden" name="_subject" value="New contact from Dosteon website" />

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-lg transition-all active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* Error Modal Overlay */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/20 backdrop-blur-sm transition-all duration-300">
          <div 
            className="w-full max-w-lg bg-white rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.15)] p-10 md:p-16 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300"
          >
            {/* Red X Icon with Glow and Rings */}
            <div className="relative mb-12">
              {/* Outer Ring 2 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] bg-red-50/40 rounded-full blur-sm" />
              
              {/* Outer Ring 1 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-red-50/70 rounded-full" />
              
              {/* Main Red Circle */}
              <div className="relative w-20 h-20 bg-linear-to-b from-[#FF3B30] to-[#D70015] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,59,48,0.4)]">
                <X className="w-10 h-10 text-white stroke-[3.5px]" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-6 leading-tight font-sans!">
              Message Failed to Send
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium mb-10">
              Your message wasn't delivered. This might be due to network issues. Please try again.
            </p>

            <button 
              onClick={() => setShowErrorModal(false)}
              className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-bold text-lg transition-all active:scale-[0.98]"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </>
  );
}
