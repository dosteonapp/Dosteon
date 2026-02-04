export function Logos() {
  const logos = [
    { src: "/assets/1.png", alt: "Lowenstein Sandler Venture Crush" },
    { src: "/assets/2.png", alt: "Global" },
  ];

  return (
    <div className="relative z-20 bg-white border-y border-gray-100 py-3 md:py-4 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
          <p className="text-gray-400 text-xs md:text-base font-semibold uppercase tracking-widest sm:normal-case sm:tracking-normal sm:font-medium">
            Supported by:
          </p>
          <div className="flex items-center gap-8 md:gap-12 opacity-50 grayscale brightness-0">
            {logos.map((logo, index) => (
              <img 
                key={index} 
                src={logo.src} 
                alt={logo.alt} 
                className="h-6 md:h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
