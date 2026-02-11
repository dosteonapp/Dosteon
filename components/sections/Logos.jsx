export function Logos() {
  const logos = [
    { src: "/assets/supported1.png", alt: "Lowenstein Sandler Venture Crush" },
    { src: "/assets/supported2.png", alt: "Global Startup Ecosystem" },
  ];

  return (
    <div className="relative z-20 bg-white border-y border-gray-100 pt-4 md:pt-8 pb-8 md:pb-10 overflow-hidden px-5 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-6 md:gap-10">
          <p className="text-gray-400 text-xs md:text-sm font-figtree font-medium whitespace-nowrap">
            Supported by:
          </p>
          <div className="flex items-center gap-6 md:gap-10">
            {logos.map((logo, index) => (
              <img 
                key={index} 
                src={logo.src} 
                alt={logo.alt} 
                className="h-7 md:h-10 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
