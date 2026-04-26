import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2744] text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-wide">Maria Navin-Lassiter</span>
            <span className="text-xs text-[#B8960C] tracking-widest uppercase">Century 21 Real Estate</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#B8960C] transition-colors">About</a>
            <a href="#why" className="hover:text-[#B8960C] transition-colors">Why Maria</a>
            <Link href="/listings" className="hover:text-[#B8960C] transition-colors">Listings</Link>
            <a href="#contact" className="hover:text-[#B8960C] transition-colors">Contact</a>
          </div>
          <a
            href="tel:7204011889"
            className="bg-[#B8960C] hover:bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            (720) 401-1889
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#1a2744] to-[#2c3e6b] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#B8960C] uppercase tracking-widest text-sm font-semibold mb-3">
              Denver &amp; Surrounding Areas
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Home is Everything.<br />
              <span className="text-[#B8960C]">Let&apos;s Find Yours.</span>
            </h1>
            <p className="text-lg text-blue-200 mb-8 max-w-lg">
              With 25 years of real estate experience in the Denver metro area,
              Maria Navin-Lassiter brings expertise, dedication, and a personal
              touch to every transaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-[#B8960C] hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors text-center"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#about"
                className="border-2 border-white hover:bg-white hover:text-[#1a2744] text-white font-bold px-8 py-4 rounded-full text-lg transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Maria's photo */}
          <div className="flex-shrink-0">
            <img
              src="/Maria.jpg"
              alt="Maria Navin-Lassiter - Century 21 Real Estate Agent"
              className="w-64 h-80 md:w-80 md:h-96 rounded-2xl border-4 border-[#B8960C] object-cover object-top shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#B8960C] text-white py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "25+", label: "Years Experience" },
            { number: "500+", label: "Homes Sold" },
            { number: "Denver", label: "Metro Area" },
            { number: "C21", label: "Century 21 Agent" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold">{stat.number}</div>
              <div className="text-sm opacity-80 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-[#B8960C] uppercase tracking-widest text-sm font-semibold mb-3">About Maria</p>
            <h2 className="text-4xl font-bold text-[#1a2744] mb-6">
              Your Denver Real Estate Expert
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Maria Navin-Lassiter has spent over 25 years helping families
              across Denver and the surrounding communities buy, sell, and invest
              in real estate. Her deep knowledge of the local market, combined
              with her genuine care for every client, makes her the agent people
              call first — and refer to friends and family.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Now with Century 21, Maria brings the same trusted, personal
              approach she&apos;s always been known for — backed by one of the
              world&apos;s most recognized real estate brands.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#1a2744] hover:bg-[#2c3e6b] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Work With Maria
            </a>
          </div>
          <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <ul className="space-y-4">
              {[
                "25+ years of Denver real estate experience",
                "Expertise in buying, selling & investing",
                "Deep knowledge of Denver metro neighborhoods",
                "Certified Century 21 agent",
                "Dedicated to first-time buyers & seasoned investors alike",
                "Responsive, honest, and always in your corner",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#B8960C] text-xl mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHY MARIA ── */}
      <section id="why" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#B8960C] uppercase tracking-widest text-sm font-semibold mb-3">Why Choose Maria</p>
            <h2 className="text-4xl font-bold text-[#1a2744]">The Maria Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏡",
                title: "Local Expertise",
                desc: "Born and raised in the Denver area, Maria knows every neighborhood, school district, and hidden gem — so you don't have to.",
              },
              {
                icon: "🤝",
                title: "Personal Service",
                desc: "You're not just a transaction. Maria takes time to understand your goals, your timeline, and what home truly means to you.",
              },
              {
                icon: "📈",
                title: "Proven Results",
                desc: "25 years of closings, negotiations, and happy clients. Maria knows how to get deals done — even in tough markets.",
              },
              {
                icon: "📞",
                title: "Always Available",
                desc: "Real estate doesn't run 9 to 5. Maria is accessible, responsive, and will never leave you guessing about where things stand.",
              },
              {
                icon: "💡",
                title: "Market Knowledge",
                desc: "From pricing strategy to timing, Maria uses real data and decades of experience to guide every decision you make.",
              },
              {
                icon: "⭐",
                title: "Century 21 Backed",
                desc: "All the personal service of a local agent, powered by one of the world's largest and most trusted real estate networks.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-[#1a2744] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#B8960C] uppercase tracking-widest text-sm font-semibold mb-3">What I Do</p>
            <h2 className="text-4xl font-bold">Real Estate Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔑",
                title: "Buying a Home",
                desc: "From your first showing to the closing table, Maria guides buyers through every step with patience and expertise.",
              },
              {
                icon: "📋",
                title: "Selling Your Home",
                desc: "Strategic pricing, professional marketing, and skilled negotiation to get you the best possible outcome.",
              },
              {
                icon: "💰",
                title: "Real Estate Investment",
                desc: "Looking to build wealth through property? Maria helps investors find the right opportunities in the Denver market.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-[#2c3e6b] rounded-2xl p-8 border border-blue-800 hover:border-[#B8960C] transition-colors"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-blue-200 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12">
          {/* Info */}
          <div className="flex-1">
            <p className="text-[#B8960C] uppercase tracking-widest text-sm font-semibold mb-3">Get In Touch</p>
            <h2 className="text-4xl font-bold text-[#1a2744] mb-6">
              Ready to Find Your Home?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you&apos;re buying, selling, or just have questions — Maria
              would love to hear from you. Reach out today and let&apos;s start the
              conversation.
            </p>
            <div className="space-y-4">
              <a
                href="tel:7204011889"
                className="flex items-center gap-4 text-[#1a2744] hover:text-[#B8960C] transition-colors group"
              >
                <span className="w-12 h-12 bg-gray-100 group-hover:bg-[#B8960C] group-hover:text-white rounded-full flex items-center justify-center text-xl transition-colors">📞</span>
                <span className="text-lg font-semibold">(720) 401-1889</span>
              </a>
              <a
                href="mailto:marianavinlassiter1966@gmail.com"
                className="flex items-center gap-4 text-[#1a2744] hover:text-[#B8960C] transition-colors group"
              >
                <span className="w-12 h-12 bg-gray-100 group-hover:bg-[#B8960C] group-hover:text-white rounded-full flex items-center justify-center text-xl transition-colors">✉️</span>
                <span className="text-lg font-semibold">marianavinlassiter1966@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-[#1a2744]">
                <span className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">📍</span>
                <span className="text-lg font-semibold">Denver, CO &amp; Surrounding Areas</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <form action="https://formspree.io/f/xpqkezor" method="POST" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8960C] bg-white"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8960C] bg-white"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8960C] bg-white"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8960C] bg-white"
                  placeholder="(720) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">I&apos;m interested in...</label>
                <select name="interest" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8960C] bg-white">
                  <option>Buying a home</option>
                  <option>Selling my home</option>
                  <option>Real estate investment</option>
                  <option>Just exploring</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8960C] bg-white resize-none"
                  placeholder="Tell me a little about what you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#B8960C] hover:bg-yellow-600 text-white font-bold py-4 rounded-full text-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1a2744] text-blue-200 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <span className="font-bold text-white">Maria Navin-Lassiter</span> · Century 21 Real Estate
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} Maria Navin-Lassiter. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
