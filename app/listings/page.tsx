import Link from "next/link";
import Navbar from "../components/Navbar";

const listings = [
  {
    id: 1,
    address: "4231 Prairie Drive",
    city: "Brighton, CO 80601",
    price: "$590,000",
    pricePerSqft: "$192/sq ft",
    beds: 3,
    baths: 3,
    sqft: "3,071",
    lotSize: "0.18 acres",
    yearBuilt: 2018,
    garage: "3-car tandem garage",
    hoa: "$74/month",
    status: "Active",
    style: "Contemporary · 2-Story",
    mls: "4674551",
    description:
      "Stunning contemporary home featuring a gorgeous facade with stone accents and a sizeable front yard. Inside enjoy high ceilings, wood-look flooring, a cozy fireplace, and a gourmet kitchen equipped with ample cabinetry, pantry, granite counters, tile backsplash, stainless steel appliances, and a center island. Upstairs you'll find a spacious loft, a luxurious primary suite with dual sinks and walk-in closet, plus two additional bedrooms. The unfinished basement offers endless potential. Outside, enjoy a meticulously landscaped backyard with a patio and storage shed. WiFi-programmed sprinkler system and garage door opener included.",
    features: [
      "Gourmet kitchen with granite counters & center island",
      "High ceilings & wood-look flooring throughout",
      "Cozy fireplace in living area",
      "Primary suite with dual sinks & walk-in closet",
      "Spacious loft area",
      "Unfinished basement — endless potential",
      "3-car tandem garage",
      "WiFi-programmed sprinkler & garage door opener",
      "Meticulously landscaped backyard with patio & shed",
    ],
    schools: {
      elementary: "Northeast Elementary",
      middle: "Overland Trail Middle",
      high: "Brighton High School",
    },
    century21Link:
      "https://www.century21.com/homes/detail/co/brighton/4231-prairie-dr/lid-P00800000H85eMRQeLrYKjZB0F9LyXKw0iAOChhJ",
    photo: null, // Add photo URL here when available
  },
];

export default function Listings() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── NAVBAR ── */}
      <Navbar activePage="listings" />

      {/* ── HERO ── */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-[#1a2744] to-[#2c3e6b] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#B8960C] uppercase tracking-widest text-sm font-semibold mb-3">
            Denver Metro Area
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Current Listings</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Hand-picked properties represented by Maria Navin-Lassiter.
            Call <a href="tel:7204011889" className="text-[#B8960C] font-semibold hover:underline">(720) 401-1889</a> to schedule a showing.
          </p>
        </div>
      </section>

      {/* ── LISTINGS ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10"
            >
              {/* Photo */}
              <div className="relative">
                {listing.photo ? (
                  <img
                    src={listing.photo}
                    alt={listing.address}
                    className="w-full h-72 object-cover"
                  />
                ) : (
                  <div className="w-full h-72 bg-gradient-to-br from-[#1a2744] to-[#2c3e6b] flex items-center justify-center">
                    <div className="text-center text-blue-300">
                      <div className="text-5xl mb-2">🏡</div>
                      <p className="text-sm">Photos Coming Soon</p>
                      <a
                        href={listing.century21Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-[#B8960C] text-sm underline hover:text-yellow-400"
                      >
                        View on Century 21 →
                      </a>
                    </div>
                  </div>
                )}
                <span className="absolute top-4 left-4 bg-[#B8960C] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {listing.status}
                </span>
                <span className="absolute top-4 right-4 bg-[#1a2744] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  MLS# {listing.mls}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a2744]">{listing.address}</h2>
                    <p className="text-gray-500">{listing.city}</p>
                    <p className="text-sm text-gray-400 mt-1">{listing.style}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#B8960C]">{listing.price}</div>
                    <div className="text-sm text-gray-400">{listing.pricePerSqft}</div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-xl p-4 mb-6">
                  {[
                    { icon: "🛏", label: "Bedrooms", value: listing.beds },
                    { icon: "🛁", label: "Bathrooms", value: listing.baths },
                    { icon: "📐", label: "Sq Footage", value: `${listing.sqft} sq ft` },
                    { icon: "🚗", label: "Garage", value: listing.garage },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                      <div className="font-semibold text-[#1a2744]">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">{listing.description}</p>

                {/* Features + Schools */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold text-[#1a2744] mb-3">✨ Key Features</h3>
                    <ul className="space-y-2">
                      {listing.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#B8960C] font-bold mt-0.5">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2744] mb-3">🏫 Schools</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-400">Elementary</span>
                        <span className="font-medium">{listing.schools.elementary}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-400">Middle</span>
                        <span className="font-medium">{listing.schools.middle}</span>
                      </div>
                      <div className="flex justify-between pb-2">
                        <span className="text-gray-400">High School</span>
                        <span className="font-medium">{listing.schools.high}</span>
                      </div>
                    </div>
                    <div className="mt-4 bg-gray-50 rounded-xl p-3 text-sm text-gray-600">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Year Built</span>
                        <span className="font-medium">{listing.yearBuilt}</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Lot Size</span>
                        <span className="font-medium">{listing.lotSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">HOA</span>
                        <span className="font-medium">{listing.hoa}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:7204011889"
                    className="flex-1 text-center bg-[#B8960C] hover:bg-yellow-600 text-white font-bold py-3 rounded-full transition-colors"
                  >
                    📞 Schedule a Showing
                  </a>
                  <a
                    href={listing.century21Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border-2 border-[#1a2744] hover:bg-[#1a2744] hover:text-white text-[#1a2744] font-bold py-3 rounded-full transition-colors"
                  >
                    View on Century 21 →
                  </a>
                  <Link
                    href="/#contact"
                    className="flex-1 text-center border-2 border-[#B8960C] hover:bg-[#B8960C] hover:text-white text-[#B8960C] font-bold py-3 rounded-full transition-colors"
                  >
                    ✉️ Send a Message
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1a2744] text-blue-200 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <span className="font-bold text-white">Maria Navin-Lassiter</span> · Century 21 Moore Real Estate
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/listings" className="hover:text-white transition-colors">Listings</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div>© {new Date().getFullYear()} Maria Navin-Lassiter. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
