import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 text-center md:text-left">
          <div className="md:col-span-4">
            <div className="mb-8">
              <img src={logo} alt="Dosteon Logo" className="h-12 w-auto object-contain mx-auto md:mx-0" />
            </div>
            <p className="text-dosteon-gray text-base leading-relaxed mb-10 max-w-sm mx-auto md:mx-0 font-medium">
              Empowering food businesses with effortless management and real-time operations. We're bridging the gap in Africa's food supply chain.
            </p>
            <div className="flex justify-center md:justify-start gap-5">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 border border-gray-100 rounded-2xl flex items-center justify-center hover:bg-primary/5 transition-all text-dosteon-black opacity-60 hover:opacity-100">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-8 text-dosteon-black">Company</h4>
            <ul className="space-y-4 text-dosteon-gray font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-8 text-dosteon-black">Product</h4>
            <ul className="space-y-4 text-dosteon-gray font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Demo</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-lg mb-8 text-dosteon-black">Stay Updated</h4>
            <p className="text-dosteon-gray mb-6 font-medium">Join our newsletter for the latest in food systems.</p>
            <div className="flex max-w-sm mx-auto md:mx-0">
               <input type="email" placeholder="Email address" className="bg-gray-50 border-none rounded-l-xl px-5 py-3 w-full focus:ring-1 focus:ring-primary/20" />
               <button className="bg-primary text-white px-5 py-3 rounded-r-xl font-bold hover:bg-primary-dark transition-colors">→</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-gray-400 font-medium">
          <p>© 2024 Dosteon. Built with heart for the African food industry.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-primary transition-colors">English (US)</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
