import Link from "next/link";
import Navbar from "./components/Navbar";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── NAVBAR ── */}
      <Navbar activePage="home" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744]/90 via-[#1a2744]/75 to-[#1a2744]/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="animate-fadeInUp delay-100 text-[#C9A84C] uppercase tracking-widest text-sm font-semibold mb-4">
              Denver &amp; Surrounding Areas · Century 21 Moore Real Estate
            </p>
            <h1 className="animate-fadeInUp delay-200 font-playfair text-5xl md:text-7xl font-bold leading-tight mb-6">
              Home is<br />
              <span className="text-[#C9A84C] italic">Everything.</span><br />
              <span className="text-3xl md:text-4xl font-normal">Let&apos;s Find Yours.</span>
            </h1>
            <p className="animate-fadeInUp delay-300 text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
              With 20+ years of real estate experience in the Denver metro area,
              Maria Navin-Lassiter brings expertise, dedication, and a personal
              touch to every transaction.
            </p>
            <div className="animate-fadeInUp delay-400 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-[#C9A84C] hover:bg-yellow-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#about"
                className="border-2 border-white/70 hover:bg-white hover:text-[#1a2744] text-white font-bold px-8 py-4 rounded-full text-lg transition-all text-center backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Maria's photo */}
          <div className="animate-fadeIn delay-300 flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#1a2744] blur-sm opacity-70" />
              <img
                src="/Maria.jpg"
                alt="Maria Navin-Lassiter - Century 21 Real Estate Agent"
                className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl object-cover object-top shadow-2xl"
              />
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#C9A84C] text-white rounded-xl px-4 py-2 shadow-lg text-center">
                <div className="font-playfair font-bold text-2xl">20+</div>
                <div className="text-xs uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#C9A84C] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "20+", label: "Years Experience" },
            { number: "500+", label: "Homes Sold" },
            { number: "Denver", label: "Metro Area" },
            { number: "C21", label: "Century 21 Agent" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div className="font-playfair text-4xl font-bold group-hover:scale-110 transition-transform">{stat.number}</div>
              <div className="text-sm opacity-80 mt-1 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <ScrollReveal className="flex-1">
            <p className="text-[#C9A84C] uppercase tracking-widest text-sm font-semibold mb-3">About Maria</p>
            <h2 className="font-playfair text-5xl font-bold text-[#1a2744] mb-6 leading-tight">
              Your Denver<br />Real Estate Expert
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Maria Navin-Lassiter has spent over 20 years helping families
              across Denver and the surrounding communities buy, sell, and invest
              in real estate. Her deep knowledge of the local market, combined
              with her genuine care for every client, makes her the agent people
              call first — and refer to friends and family.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Now with Century 21 Moore Real Estate, Maria brings the same trusted, personal
              approach she&apos;s always been known for — backed by one of the
              world&apos;s most recognized real estate brands.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#1a2744] hover:bg-[#C9A84C] text-white font-semibold px-8 py-3 rounded-full transition-all shadow hover:shadow-lg"
            >
              Work With Maria →
            </a>
          </ScrollReveal>
          <ScrollReveal className="flex-1" delay={150}>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
              <ul className="space-y-5">
                {[
                  "20+ years of Colorado real estate experience",
                  "Expertise in buying, selling & investing",
                  "Deep knowledge of Denver metro neighborhoods",
                  "Century 21 Moore Real Estate agent",
                  "Dedicated to first-time buyers & seasoned investors alike",
                  "Responsive, honest, and always in your corner",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#C9A84C] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY MARIA ── */}
      <section id="why" className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[#C9A84C] uppercase tracking-widest text-sm font-semibold mb-3">Why Choose Maria</p>
            <h2 className="font-playfair text-5xl font-bold text-[#1a2744]">The Maria Difference</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🏡", title: "Local Expertise", desc: "Raised in Westminster, Colorado, Maria has spent her life in this state and knows every neighborhood, school district, and hidden gem the Denver metro has to offer." },
              { icon: "🤝", title: "Personal Service", desc: "You're not just a transaction. Maria takes time to understand your goals, your timeline, and what home truly means to you." },
              { icon: "📈", title: "Proven Results", desc: "20+ years of closings, negotiations, and happy clients. Maria knows how to get deals done — even in tough markets." },
              { icon: "📞", title: "Always Available", desc: "Real estate doesn't run 9 to 5. Maria is accessible, responsive, and will never leave you guessing about where things stand." },
              { icon: "💡", title: "Market Knowledge", desc: "From pricing strategy to timing, Maria uses real data and decades of experience to guide every decision you make." },
              { icon: "⭐", title: "Century 21 Moore Real Estate", desc: "All the personal service of a local agent, backed by the Moore Real Estate team and one of the world's most trusted real estate brands." },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="font-playfair text-xl font-bold text-[#1a2744] mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-[#1a2744]/88" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[#C9A84C] uppercase tracking-widest text-sm font-semibold mb-3">What I Do</p>
            <h2 className="font-playfair text-5xl font-bold text-white">Real Estate Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🔑", title: "Buying a Home", desc: "From your first showing to the closing table, Maria guides buyers through every step with patience and expertise." },
              { icon: "📋", title: "Selling Your Home", desc: "Strategic pricing, professional marketing, and skilled negotiation to get you the best possible outcome." },
              { icon: "💰", title: "Real Estate Investment", desc: "Looking to build wealth through property? Maria helps investors find the right opportunities in the Denver market." },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-[#C9A84C] transition-all h-full">
                  <div className="text-5xl mb-5">{service.icon}</div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16">
          <ScrollReveal className="flex-1">
            <p className="text-[#C9A84C] uppercase tracking-widest text-sm font-semibold mb-3">Get In Touch</p>
            <h2 className="font-playfair text-5xl font-bold text-[#1a2744] mb-6 leading-tight">
              Ready to Find<br />Your Home?
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Whether you&apos;re buying, selling, or just have questions — Maria
              would love to hear from you. Reach out today and let&apos;s start the
              conversation.
            </p>
            <div className="space-y-5">
              <a href="tel:7204011889" className="flex items-center gap-4 text-[#1a2744] hover:text-[#C9A84C] transition-colors group">
                <span className="w-14 h-14 bg-gray-100 group-hover:bg-[#C9A84C] group-hover:text-white rounded-full flex items-center justify-center text-xl transition-all shadow-sm group-hover:shadow-md">📞</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Call Directly</div>
                  <div className="text-lg font-semibold">(720) 401-1889</div>
                </div>
              </a>
              <a href="mailto:contact@mariacoloradorealty.com" className="flex items-center gap-4 text-[#1a2744] hover:text-[#C9A84C] transition-colors group">
                <span className="w-14 h-14 bg-gray-100 group-hover:bg-[#C9A84C] group-hover:text-white rounded-full flex items-center justify-center text-xl transition-all shadow-sm group-hover:shadow-md">✉️</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Email</div>
                  <div className="text-lg font-semibold">contact@mariacoloradorealty.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-[#1a2744]">
                <span className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-xl shadow-sm">📍</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Service Area</div>
                  <div className="text-lg font-semibold">Denver, CO &amp; Surrounding Areas</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex-1" delay={150}>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-playfair text-2xl font-bold text-[#1a2744] mb-6">Send a Message</h3>
              <form action="https://formspree.io/f/xpqkezor" method="POST" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" name="first_name" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-white" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" name="last_name" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-white" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-white" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" name="phone" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-white" placeholder="(720) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">I&apos;m interested in...</label>
                  <select name="interest" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-white">
                    <option>Buying a home</option>
                    <option>Selling my home</option>
                    <option>Real estate investment</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} name="message" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-white resize-none" placeholder="Tell me a little about what you're looking for..." />
                </div>
                <button type="submit" className="w-full bg-[#1a2744] hover:bg-[#C9A84C] text-white font-bold py-4 rounded-full text-lg transition-all shadow hover:shadow-lg">
                  Send Message →
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1a2744] text-blue-200 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <div className="font-playfair text-white font-bold text-lg">Maria Navin-Lassiter</div>
            <div className="text-[#C9A84C] text-xs uppercase tracking-widest">Century 21 Moore Real Estate · Denver, CO</div>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <Link href="/listings" className="hover:text-white transition-colors">Listings</Link>
            <Link href="/mortgage-calculator" className="hover:text-white transition-colors">Calculator</Link>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} Maria Navin-Lassiter. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
