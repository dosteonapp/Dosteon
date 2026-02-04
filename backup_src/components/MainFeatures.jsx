import chefImage from '../assets/chef.png';

const MainFeatures = () => {
  return (
    <div className="bg-white">
      {/* Stock Management Feature */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-dosteon-light p-4 rounded-[40px] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Placeholder for tablet mockup */}
                <div className="aspect-4/3 bg-linear-to-br from-primary/20 to-primary/5 rounded-[32px] flex items-center justify-center border border-primary/10 overflow-hidden">
                  <div className="w-5/6 h-5/6 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
                     <div className="h-8 w-1/3 bg-gray-100 rounded-lg"></div>
                     <div className="grid grid-cols-2 gap-4">
                       <div className="h-24 bg-blue-50 rounded-xl"></div>
                       <div className="h-24 bg-green-50 rounded-xl"></div>
                     </div>
                     <div className="h-32 bg-gray-50 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Track & Manage stock Effortlessly</h2>
              <p className="text-lg text-emerald-600 font-bold mb-4">No more "Out of Stock"</p>
              <p className="text-dosteon-gray text-lg mb-8 leading-relaxed">
                Stay updated with real-time stock levels. Dosteon helps you track every item, from raw ingredients to finished dishes, ensuring you never miss a sale.
              </p>
              <ul className="space-y-4">
                {['Real-time inventory tracking', 'Automatic low-stock alerts', 'Multi-location management'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-semibold">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-10 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all">
                Learn how it works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Your One Stop Shop / Gallery Section */}
      <section className="py-24 bg-accent-purple/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">A system as unique as you are</h2>
            <p className="text-dosteon-gray text-lg max-w-2xl mx-auto">
              Customizable modules that fit your specific workflow, whether you're a dark kitchen, a bistro, or a franchised chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                 <div className="flex gap-4 items-start mb-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">📦</div>
                   <div>
                     <h3 className="text-xl font-bold mb-1">Productivity tools</h3>
                     <p className="text-dosteon-gray">Streamline your daily tasks with integrated calendars and task managers.</p>
                   </div>
                 </div>
               </div>
               <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                 <div className="flex gap-4 items-start mb-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">🤝</div>
                   <div>
                     <h3 className="text-xl font-bold mb-1">Supplier management</h3>
                     <p className="text-dosteon-gray">Connect directly with your suppliers and automate your reordering process.</p>
                   </div>
                 </div>
               </div>
               <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                 <div className="flex gap-4 items-start mb-4">
                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">📱</div>
                   <div>
                     <h3 className="text-xl font-bold mb-1">Mobile accessibility</h3>
                     <p className="text-dosteon-gray">Manage your business from anywhere with our native iOS and Android apps.</p>
                   </div>
                 </div>
               </div>
            </div>
            <div className="relative">
              <div className="bg-white p-4 rounded-3xl shadow-2xl">
                 <div className="aspect-3/4 rounded-2xl bg-gray-100 overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Kitchen operations" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                      <p className="text-xl font-serif font-bold italic">"Dosteon transformed our kitchen workflow in weeks."</p>
                      <p className="text-sm opacity-80 mt-2">— Chef Mark S.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why with us? Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[60px] overflow-hidden rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl">
                <img 
                  src={chefImage} 
                  alt="Professional Chef" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-emerald-500 rounded-full flex flex-col items-center justify-center text-white p-6 text-center shadow-xl border-8 border-white">
                 <span className="text-4xl font-bold">98%</span>
                 <span className="text-xs font-bold uppercase tracking-widest">Satisfaction rate</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Why with us?</h2>
              <div className="space-y-10">
                {[
                  { title: "Stock management", desc: "Keep track of every gram and milliliter. Dosteon helps you manage your inventory with precision and ease." },
                  { title: "Employee tracking", desc: "Monitor performance, attendance, and tasks. Ensure your team is always at its best." },
                  { title: "Supplier management", desc: "Connect directly with vendors. Streamline orders and payments in one central hub." },
                  { title: "Financial reporting", desc: "Instant insights into your profit, loss, and growth trends. Make data-driven decisions." }
                ].map((point, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-xl">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                      <p className="text-dosteon-gray">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainFeatures;
