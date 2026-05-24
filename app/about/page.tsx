import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Maria Navin-Lassiter | Top Real Estate Agent | Brighton, Westminster, Thornton, Arvada CO",
  description:
    "Meet Maria Navin-Lassiter — Century 21 Moore Real Estate agent with 20+ years of experience and 500+ closed homes across Brighton, Westminster, Thornton, Arvada, Commerce City, and Northglenn, Colorado. Call (720) 401-1889.",
  keywords: [
    "Maria Navin-Lassiter",
    "about Maria Navin-Lassiter realtor",
    "best real estate agent Brighton Colorado",
    "most experienced realtor Westminster CO",
    "top realtor Thornton Colorado",
    "Arvada real estate agent",
    "Commerce City realtor",
    "Northglenn real estate agent",
    "Century 21 Moore Real Estate agent",
    "North Denver metro realtor",
    "Adams County real estate agent",
    "Jefferson County realtor Colorado",
  ],
  alternates: {
    canonical: "https://www.mariacoloradorealty.com/about",
  },
  openGraph: {
    title: "About Maria Navin-Lassiter | Real Estate Agent | Denver Metro CO",
    description: "20+ years, 500+ homes closed. Maria Navin-Lassiter is the trusted real estate agent for Brighton, Westminster, Thornton, Arvada, Commerce City & Northglenn Colorado.",
    url: "https://www.mariacoloradorealty.com/about",
    images: [{ url: "https://www.mariacoloradorealty.com/Maria.jpg" }],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": ["RealEstateAgent", "Person"],
    "name": "Maria Navin-Lassiter",
    "givenName": "Maria",
    "familyName": "Navin-Lassiter",
    "jobTitle": "Licensed Real Estate Agent",
    "description": "Maria Navin-Lassiter is a licensed Colorado real estate agent with over 20 years of experience helping families buy and sell homes across the North Denver metro area. She is affiliated with Century 21 Moore Real Estate and specializes in residential real estate in Brighton, Westminster, Thornton, Arvada, Commerce City, and Northglenn, Colorado.",
    "image": "https://www.mariacoloradorealty.com/Maria.jpg",
    "telephone": "+17204011889",
    "email": "contact@mariacoloradorealty.com",
    "url": "https://www.mariacoloradorealty.com",
    "worksFor": { "@type": "Organization", "name": "Century 21 Moore Real Estate" },
    "areaServed": ["Brighton CO", "Westminster CO", "Thornton CO", "Arvada CO", "Commerce City CO", "Northglenn CO", "Denver CO"],
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <main style={{ fontFamily: "Inter, sans-serif", color: "#0d1426", background: "#fff" }}>

        {/* Nav */}
        <nav style={{ position: "sticky", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e5e7eb", padding: "18px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 100 }}>
          <Link href="/" style={{ fontFamily: "Playfair Display, serif", fontSize: 22, fontWeight: 600, color: "#1a2744", textDecoration: "none" }}>
            Maria <span style={{ color: "#B8960C", fontStyle: "italic" }}>Navin-Lassiter</span>
          </Link>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <Link href="/" style={{ color: "#485267", textDecoration: "none", fontSize: 15 }}>Home</Link>
            <Link href="/#areas" style={{ color: "#485267", textDecoration: "none", fontSize: 15 }}>Areas</Link>
            <Link href="/#valuation" style={{ color: "#485267", textDecoration: "none", fontSize: 15 }}>Valuation</Link>
            <Link href="/#contact" style={{ background: "#B8960C", color: "#fff", padding: "10px 22px", borderRadius: 999, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>Contact</Link>
          </div>
        </nav>

        {/* Hero */}
        <section style={{ background: "#1a2744", color: "#fff", padding: "80px 40px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d4b53a", fontWeight: 700, marginBottom: 20 }}>
                — Century 21 Moore Real Estate
              </div>
              <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: 64, fontWeight: 500, lineHeight: 1.05, margin: "0 0 24px", letterSpacing: "-0.01em" }}>
                Meet Maria<br />
                <em style={{ color: "#d4b53a", fontWeight: 400 }}>Navin-Lassiter</em>
              </h1>
              <p style={{ fontSize: 20, lineHeight: 1.65, color: "rgba(255,255,255,0.82)", maxWidth: "52ch", margin: 0 }}>
                Licensed real estate agent serving the North Denver metro for over 20 years.
                Brighton, Westminster, Thornton, Arvada, Commerce City, and Northglenn —
                these aren&apos;t just cities on a map. They&apos;re the communities where Maria has
                helped more than 500 Colorado families find their home.
              </p>
              <div style={{ marginTop: 36, display: "flex", gap: 16 }}>
                <a href="tel:+17204011889" style={{ background: "#B8960C", color: "#fff", padding: "14px 28px", borderRadius: 999, textDecoration: "none", fontWeight: 700, fontSize: 16 }}>
                  Call (720) 401-1889
                </a>
                <a href="/#valuation" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", padding: "14px 28px", borderRadius: 999, textDecoration: "none", fontWeight: 600, fontSize: 16 }}>
                  Free Home Valuation
                </a>
              </div>
            </div>
            <div style={{ borderRadius: "180px 180px 18px 18px", overflow: "hidden", height: 480, position: "relative", boxShadow: "0 32px 80px -20px rgba(0,0,0,0.6)" }}>
              <Image src="/Maria.jpg" alt="Maria Navin-Lassiter — Licensed Real Estate Agent in Brighton, Westminster, Thornton, Arvada, Commerce City, Northglenn Colorado" fill style={{ objectFit: "cover", objectPosition: "55% 15%" }} />
            </div>
          </div>
        </section>

        {/* Quick stats */}
        <section style={{ background: "#B8960C", padding: "40px", color: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
            {[
              { n: "20+", l: "Years of Experience" },
              { n: "500+", l: "Homes Closed" },
              { n: "6", l: "Communities Served" },
              { n: "★★★★★", l: "Client Reviews" },
            ].map((s) => (
              <div key={s.l}>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: 52, fontWeight: 500, lineHeight: 1 }}>{s.n}</div>
                <div style={{ marginTop: 8, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.85, fontWeight: 600 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About body */}
        <section style={{ padding: "80px 40px", background: "#faf8f3" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 42, fontWeight: 500, margin: "0 0 32px", color: "#1a2744" }}>
              A real estate agent who knows your neighborhood
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "#485267", marginBottom: 24 }}>
              Maria Navin-Lassiter is a licensed Colorado real estate agent affiliated with
              <strong> Century 21 Moore Real Estate</strong>. She has spent more than two decades
              working exclusively in the North and Northwest Denver metro — the communities of
              <strong> Brighton, Westminster, Thornton, Arvada, Commerce City, and Northglenn</strong>.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "#485267", marginBottom: 24 }}>
              Unlike large real estate teams or call-center brokerages, Maria works directly
              with every client from the first showing to closing day. When you call
              <strong> (720) 401-1889</strong>, you&apos;re talking to Maria — not an assistant,
              not a buyer&apos;s agent, not a coordinator. Just Maria.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "#485267", marginBottom: 24 }}>
              Whether you&apos;re a first-time home buyer trying to understand the Brighton market,
              a growing family looking for the right school district in Thornton, a homeowner
              in Westminster ready to sell, or an investor eyeing new construction in Arvada —
              Maria has the local knowledge and experience to guide you through the process.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "#485267" }}>
              Maria is widely regarded as one of the most knowledgeable and trustworthy real
              estate agents in Adams County and Jefferson County, Colorado. Her deep familiarity
              with neighborhoods, pricing trends, builder incentives, and the school systems
              across the North Denver metro makes her uniquely positioned to help both buyers
              and sellers achieve their real estate goals.
            </p>
          </div>
        </section>

        {/* Service areas */}
        <section style={{ padding: "80px 40px", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 42, fontWeight: 500, margin: "0 0 12px", color: "#1a2744", textAlign: "center" }}>
              Communities Maria Serves
            </h2>
            <p style={{ textAlign: "center", color: "#485267", fontSize: 17, marginBottom: 48 }}>
              North and northwest of Denver — Maria&apos;s home turf for over 20 years.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[
                { city: "Brighton", county: "Adams County", desc: "Maria is one of the most experienced real estate agents in Brighton, Colorado. She knows the Brighton Crossing, Aspen Ridge, and Prairie View neighborhoods, the 27J School District, and the new construction market." },
                { city: "Westminster", county: "Jefferson & Adams County", desc: "Maria is a trusted real estate agent in Westminster, Colorado with deep knowledge of the Legacy Ridge, Countryside, and Standley Lake areas. She helps buyers and sellers throughout the Westminster market." },
                { city: "Thornton", county: "Adams County", desc: "As an experienced Thornton Colorado real estate agent, Maria knows the Eastlake, Trail Winds, and Todd Creek neighborhoods and the new construction communities along the I-25 corridor." },
                { city: "Arvada", county: "Jefferson County", desc: "Maria is a top real estate agent in Arvada, Colorado, serving buyers and sellers in Olde Town Arvada, Whisper Creek, and Lake Arbor. She has extensive knowledge of Jefferson County real estate." },
                { city: "Commerce City", county: "Adams County", desc: "Maria Navin-Lassiter helps buyers and sellers in Commerce City, Colorado navigate the growing North Range and River Run communities in Adams County." },
                { city: "Northglenn", county: "Adams County", desc: "Maria serves the Northglenn, Colorado real estate market including buyers looking for affordable North Denver metro homes and sellers ready to take advantage of strong market conditions." },
              ].map((a) => (
                <a key={a.city} href={`/community/${a.city.toLowerCase().replace(" ", "-")}.html`}
                  style={{ display: "block", background: "#f4f6fa", borderRadius: 16, padding: "28px 24px", textDecoration: "none", color: "inherit", border: "1px solid #e5e7eb" }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8960C", fontWeight: 700, marginBottom: 8 }}>{a.county}</div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 26, fontWeight: 500, color: "#1a2744", margin: "0 0 12px" }}>{a.city}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: "#485267", margin: 0 }}>{a.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ padding: "80px 40px", background: "#1a2744", color: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 42, fontWeight: 500, margin: "0 0 48px", textAlign: "center" }}>
              What clients say about Maria
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              {[
                { name: "Kevin Hoff", location: "Brighton, CO", text: "Maria did an outstanding job helping us find our home. Her knowledge of the Brighton area was impressive and she made the whole process smooth and stress-free. She is hands-down the best real estate agent we have ever worked with." },
                { name: "Richard Glantz", location: "Westminster, CO", text: "Very professional agent. Maria guided us through every step of selling our Westminster home and got us above asking price. She knows this market better than anyone. Highly recommend Maria to anyone buying or selling in the North Denver metro." },
              ].map((r) => (
                <div key={r.name} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: "36px 32px" }}>
                  <div style={{ color: "#d4b53a", fontSize: 24, marginBottom: 16 }}>★★★★★</div>
                  <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", margin: "0 0 24px", fontStyle: "italic" }}>&ldquo;{r.text}&rdquo;</p>
                  <div style={{ fontWeight: 700, color: "#fff" }}>{r.name}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{r.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 40px", background: "#f4f6fa", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: 42, fontWeight: 500, color: "#1a2744", margin: "0 0 16px" }}>
              Ready to talk to Maria?
            </h2>
            <p style={{ fontSize: 18, color: "#485267", lineHeight: 1.65, margin: "0 0 36px" }}>
              Whether you&apos;re buying, selling, or just want to know what your home is worth —
              Maria is available to help. Call or text anytime.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+17204011889" style={{ background: "#B8960C", color: "#fff", padding: "16px 36px", borderRadius: 999, textDecoration: "none", fontWeight: 700, fontSize: 18, boxShadow: "0 12px 32px -8px rgba(184,150,12,0.5)" }}>
                Call (720) 401-1889
              </a>
              <a href="/#contact" style={{ background: "#1a2744", color: "#fff", padding: "16px 36px", borderRadius: 999, textDecoration: "none", fontWeight: 600, fontSize: 18 }}>
                Send a message
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: "#0d1426", color: "rgba(255,255,255,0.55)", padding: "32px 40px", textAlign: "center", fontSize: 14 }}>
          <p style={{ margin: 0 }}>
            Maria Navin-Lassiter · Licensed Real Estate Agent · Century 21 Moore Real Estate · Serving Brighton, Westminster, Thornton, Arvada, Commerce City & Northglenn, Colorado · (720) 401-1889
          </p>
        </footer>

      </main>
    </>
  );
}
