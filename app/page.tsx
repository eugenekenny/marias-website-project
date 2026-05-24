"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [interest, setInterest] = useState("buying");

  // Nav scroll glassmorphism
  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 60) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Carousel scroll
  const scrollCarousel = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".spotlight-card") as HTMLElement | null;
    const w = card ? card.getBoundingClientRect().width + 26 : 400;
    track.scrollBy({ left: dir === "next" ? w : -w, behavior: "smooth" });
  };

  const starSVG = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const arrowUpRight = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );

  const heartSVG = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );

  const checkSVG = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <>
      {/* ============ NAV ============ */}
      <header className="nav" id="nav">
        <div className="container-wide nav-inner">
          <a className="brand" href="#top">
            <div className="brand-mark">M</div>
            <div>
              <div className="brand-name">Maria Navin-Lassiter</div>
              <div className="brand-tag">Century 21 The Moore Team</div>
            </div>
          </a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#areas">Service Areas</a>
            <a href="#listings">Listings</a>
            <a href="#spotlights">Communities</a>
            <a href="#testimonials">Reviews</a>
            <a href="/about">Full Bio</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a className="nav-phone" href="tel:7204011889">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (720) 401-1889
            </a>
            <a className="btn btn-primary" href="#contact">
              Let&apos;s Talk <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="hero" id="top">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?w=2000&q=80"
            alt="Colorado Rocky Mountains at sunrise"
          />
        </div>
        <div className="container-wide">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
                Denver Metro · Est. 2004
              </span>
              <h1>
                The Denver Metro Area is home. <em>Let me help you find yours.</em>
              </h1>
              <p className="hero-lead">
                For over twenty years, I&apos;ve helped Colorado families discover where they belong — from Brighton&apos;s wide-open spaces to Arvada&apos;s tree-lined streets. Personal service, deep local roots, no corporate runaround.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#contact">
                  Let&apos;s Talk <span className="arrow">→</span>
                </a>
                <a className="btn btn-ghost-light" href="#listings">
                  See Listings
                </a>
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item">
                  <div className="hero-meta-num">20+</div>
                  <div className="hero-meta-label">Years Experience</div>
                </div>
                <div className="hero-meta-item">
                  <div className="hero-meta-num">500+</div>
                  <div className="hero-meta-label">Families Served</div>
                </div>
                <div className="hero-meta-item">
                  <div className="hero-meta-num">6</div>
                  <div className="hero-meta-label">Communities Covered</div>
                </div>
              </div>
            </div>
            <div className="hero-portrait reveal delay-2">
              <div className="portrait-ornament"></div>
              <div className="portrait-frame">
                <Image
                  src="/Maria.jpg"
                  alt="Maria Navin-Lassiter, Realtor"
                  width={500}
                  height={660}
                  style={{ objectPosition: "55% 25%" }}
                  priority
                />
              </div>
              <div className="portrait-badge">
                <div className="portrait-badge-num">★</div>
                <div className="portrait-badge-text">
                  <strong>Century 21 Moore</strong>
                  Top-producing agent · Denver Metro
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-photo reveal">
              <div className="about-tag">
                <small>Hello, I&apos;m</small>
                Maria
              </div>
              <div className="about-photo-main">
                <Image
                  src="/Maria.jpg"
                  alt="Maria Navin-Lassiter"
                  width={480}
                  height={560}
                  style={{ objectPosition: "55% 30%" }}
                />
              </div>
              <div className="about-photo-accent">
                <img
                  src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500&q=80"
                  alt="A Colorado neighborhood Maria serves"
                />
              </div>
            </div>
            <div className="about-copy reveal delay-1">
              <span className="eyebrow">About Maria</span>
              <h2>Twenty years of finding Colorado families their forever home.</h2>
              <p>
                I&apos;m not a team. I&apos;m not a hotline. I&apos;m the agent who picks up the phone when you call — the one who&apos;s walked the cul-de-sacs in Brighton, watched Arvada&apos;s old town grow up, and helped families plant roots in new builds from Thornton to Northglenn.
              </p>
              <p>
                With <strong>Century 21 Moore Real Estate</strong> behind me, you get the resources of a trusted national network with the warmth of someone who knows your school district, your favorite coffee spot, and the best place to grab green chile on a Tuesday. Whether you&apos;re buying your first home or selling the one you raised your kids in, I&apos;m here for the whole journey — not just the closing.
              </p>
              <div className="about-signature">
                <div className="about-signature-name">Maria Navin-Lassiter</div>
                <div className="about-signature-line"></div>
                <div className="about-signature-role">Realtor · CO License</div>
              </div>
              <div style={{ marginTop: 32 }}>
                <a className="btn btn-navy" href="#contact">
                  Meet Maria <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREAS ============ */}
      <section id="areas">
        <div className="container-wide">
          <div className="section-head">
            <div className="section-head-copy reveal">
              <span className="eyebrow">Service Areas</span>
              <h2>The neighborhoods I know by heart.</h2>
            </div>
            <p className="reveal delay-1" style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 420 }}>
              Six communities, twenty years of relationships. Every street has a story — and I probably know it.
            </p>
          </div>
          <div className="areas-grid">
            {[
              { name: "Brighton", slug: "brighton", tag: "North Metro", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80", meta: "42 active listings · Avg $565K", delay: "" },
              { name: "Westminster", slug: "westminster", tag: "Northwest Metro", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80", meta: "61 active listings · Avg $612K", delay: "delay-1" },
              { name: "Thornton", slug: "thornton", tag: "North Metro", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80", meta: "78 active listings · Avg $548K", delay: "delay-2" },
              { name: "Arvada", slug: "arvada", tag: "Northwest Metro", img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&q=80", meta: "54 active listings · Avg $685K", delay: "" },
              { name: "Commerce City", slug: "commerce-city", tag: "Northeast Metro", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80", meta: "36 active listings · Avg $498K", delay: "delay-1" },
              { name: "Northglenn", slug: "northglenn", tag: "North Metro", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", meta: "29 active listings · Avg $475K", delay: "delay-2" },
            ].map((area) => (
              <a key={area.name} className={`area-card reveal ${area.delay}`} href={`/community/${area.slug}.html`}>
                <img src={area.img} alt={`${area.name}, Colorado`} />
                <div className="area-card-arrow">{arrowUpRight}</div>
                <div className="area-card-content">
                  <div className="area-card-tag">{area.tag}</div>
                  <div className="area-card-name">{area.name}</div>
                  <div className="area-card-meta">{area.meta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY MARIA ============ */}
      <section className="why" id="why">
        <div className="container-wide">
          <div className="section-head">
            <div className="section-head-copy reveal">
              <span className="eyebrow">Why Work With Maria</span>
              <h2>A personal agent. A trusted network. Two decades of know-how.</h2>
              <p>You don&apos;t get passed off to a junior. You don&apos;t sit on hold. You get me — every call, every showing, every signature.</p>
            </div>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-card-num">01</div>
              <div className="why-card-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>20+ Years Experience</h3>
              <p>Two decades navigating Denver&apos;s market — through booms, busts, and everything in between. I&apos;ve seen it. I&apos;ve handled it.</p>
            </div>
            <div className="why-card reveal delay-1">
              <div className="why-card-num">02</div>
              <div className="why-card-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Local Community Expert</h3>
              <p>I live here, shop here, raised kids here. I&apos;ll tell you which subdivisions flood, which schools are climbing, and where the new lightrail&apos;s headed.</p>
            </div>
            <div className="why-card reveal delay-2">
              <div className="why-card-num">03</div>
              <div className="why-card-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L3 7l9 5 9-5-9-5z" /><path d="M3 17l9 5 9-5" /><path d="M3 12l9 5 9-5" />
                </svg>
              </div>
              <h3>Century 21 Network</h3>
              <p>Backed by Century 21 Moore — national marketing reach, mortgage partners, relocation services. Big resources, personal service.</p>
            </div>
            <div className="why-card reveal delay-3">
              <div className="why-card-num">04</div>
              <div className="why-card-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 11h-6" /><path d="M19 8v6" />
                </svg>
              </div>
              <h3>Hands-On Service</h3>
              <p>One agent. One direct line. No call centers, no assistants. From first showing to closing day, you&apos;ll always be working with me.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED LISTINGS ============ */}
      <section className="listings" id="listings">
        <div className="container-wide">
          <div className="section-head">
            <div className="section-head-copy reveal">
              <span className="eyebrow">Featured Listings</span>
              <h2>Homes you&apos;ll want to walk through.</h2>
            </div>
            <a className="btn btn-ghost reveal delay-1" href="#contact">
              View All Listings <span className="arrow">→</span>
            </a>
          </div>
          <div className="listings-grid">
            <article className="listing-card reveal">
              <div className="listing-image">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" alt="Modern Brighton home" />
                <span className="listing-tag">New Listing</span>
                <div className="listing-fav">{heartSVG}</div>
              </div>
              <div className="listing-body">
                <div className="listing-price">$689,000</div>
                <div className="listing-address">2847 Meadowlark Drive</div>
                <div className="listing-city">Brighton, CO 80601</div>
                <div className="listing-specs">
                  <div className="listing-spec"><strong>4</strong> beds</div>
                  <div className="listing-spec"><strong>3</strong> baths</div>
                  <div className="listing-spec"><strong>2,840</strong> sqft</div>
                </div>
              </div>
            </article>

            <article className="listing-card reveal delay-1">
              <div className="listing-image">
                <img src="https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?w=900&q=80" alt="Arvada craftsman home" />
                <span className="listing-tag">Open Sunday</span>
                <div className="listing-fav">{heartSVG}</div>
              </div>
              <div className="listing-body">
                <div className="listing-price">$745,000</div>
                <div className="listing-address">8132 W. 68th Avenue</div>
                <div className="listing-city">Arvada, CO 80004</div>
                <div className="listing-specs">
                  <div className="listing-spec"><strong>5</strong> beds</div>
                  <div className="listing-spec"><strong>3.5</strong> baths</div>
                  <div className="listing-spec"><strong>3,210</strong> sqft</div>
                </div>
              </div>
            </article>

            <article className="listing-card reveal delay-2">
              <div className="listing-image">
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=900&q=80" alt="Thornton ranch home" />
                <span className="listing-tag">Price Reduced</span>
                <div className="listing-fav">{heartSVG}</div>
              </div>
              <div className="listing-body">
                <div className="listing-price">$525,000</div>
                <div className="listing-address">11420 Grant Street</div>
                <div className="listing-city">Thornton, CO 80233</div>
                <div className="listing-specs">
                  <div className="listing-spec"><strong>3</strong> beds</div>
                  <div className="listing-spec"><strong>2</strong> baths</div>
                  <div className="listing-spec"><strong>1,985</strong> sqft</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ NEIGHBORHOOD SPOTLIGHTS ============ */}
      <section className="spotlights" id="spotlights">
        <div className="container-wide">
          <div className="section-head">
            <div className="section-head-copy reveal">
              <span className="eyebrow">Neighborhood Spotlights</span>
              <h2>New construction, new beginnings.</h2>
              <p>Master-planned communities I cover closely — with floor plans, build timelines, and incentives most agents miss.</p>
            </div>
            <div className="carousel-controls reveal delay-1">
              <button className="carousel-btn" onClick={() => scrollCarousel("prev")} aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="carousel-btn" onClick={() => scrollCarousel("next")} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="spotlight-track-wrap">
            <div className="spotlight-track" ref={trackRef}>
              <article className="spotlight-card">
                <div className="spotlight-image">
                  <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=80" alt="Brookside community" />
                  <span className="spotlight-status">Move-in Ready</span>
                </div>
                <div className="spotlight-body">
                  <div className="spotlight-city">Brighton</div>
                  <div className="spotlight-name">Brookside at Brighton Crossing</div>
                  <div className="spotlight-desc">Open-concept new builds with mountain views, walking trails, and an on-site elementary. Lennar&apos;s flagship north-metro community.</div>
                  <div className="spotlight-meta">
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">From</span><span className="spotlight-meta-value">$549K</span></div>
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">Plans</span><span className="spotlight-meta-value">8</span></div>
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">Available</span><span className="spotlight-meta-value">14</span></div>
                  </div>
                </div>
              </article>

              <article className="spotlight-card">
                <div className="spotlight-image">
                  <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80" alt="Heritage Todd Creek" />
                  <span className="spotlight-status">Phase 3 Open</span>
                </div>
                <div className="spotlight-body">
                  <div className="spotlight-city">Thornton</div>
                  <div className="spotlight-name">Heritage Todd Creek</div>
                  <div className="spotlight-desc">55+ active-adult community with championship golf, clubhouse, pickleball courts, and ranch-style homes built for easy living.</div>
                  <div className="spotlight-meta">
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">From</span><span className="spotlight-meta-value">$625K</span></div>
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">Plans</span><span className="spotlight-meta-value">12</span></div>
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">Available</span><span className="spotlight-meta-value">22</span></div>
                  </div>
                </div>
              </article>

              <article className="spotlight-card">
                <div className="spotlight-image">
                  <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80" alt="Candelas community" />
                  <span className="spotlight-status coming">Coming Soon</span>
                </div>
                <div className="spotlight-body">
                  <div className="spotlight-city">Arvada</div>
                  <div className="spotlight-name">Candelas — Skyline Ridge</div>
                  <div className="spotlight-desc">Foothills views, two rec centers, and miles of bike paths. The newest phase opens this fall — get on the priority list early.</div>
                  <div className="spotlight-meta">
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">From</span><span className="spotlight-meta-value">$720K</span></div>
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">Plans</span><span className="spotlight-meta-value">6</span></div>
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">Reserve</span><span className="spotlight-meta-value">Now</span></div>
                  </div>
                </div>
              </article>

              <article className="spotlight-card">
                <div className="spotlight-image">
                  <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80" alt="Reunion community" />
                  <span className="spotlight-status">Move-in Ready</span>
                </div>
                <div className="spotlight-body">
                  <div className="spotlight-city">Commerce City</div>
                  <div className="spotlight-name">Reunion Village</div>
                  <div className="spotlight-desc">Resort-style pool, lake, and trail system in the heart of north metro — easy commute to DIA and downtown Denver. First-time buyer friendly.</div>
                  <div className="spotlight-meta">
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">From</span><span className="spotlight-meta-value">$485K</span></div>
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">Plans</span><span className="spotlight-meta-value">10</span></div>
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">Available</span><span className="spotlight-meta-value">31</span></div>
                  </div>
                </div>
              </article>

              <article className="spotlight-card">
                <div className="spotlight-image">
                  <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80" alt="Bradburn community" />
                  <span className="spotlight-status">Final Phase</span>
                </div>
                <div className="spotlight-body">
                  <div className="spotlight-city">Westminster</div>
                  <div className="spotlight-name">Bradburn Village</div>
                  <div className="spotlight-desc">Walkable new-urbanist community with shops, restaurants, and parks woven through tree-lined streets. Final lots releasing this summer.</div>
                  <div className="spotlight-meta">
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">From</span><span className="spotlight-meta-value">$675K</span></div>
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">Plans</span><span className="spotlight-meta-value">5</span></div>
                    <div className="spotlight-meta-item"><span className="spotlight-meta-label">Available</span><span className="spotlight-meta-value">7</span></div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-head" style={{ justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center" }}>
            <div className="section-head-copy reveal" style={{ textAlign: "center" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>Client Stories</span>
              <h2>The families I&apos;ve helped come home.</h2>
            </div>
          </div>
          <div className="testimonials-grid">
            <article className="testimonial reveal">
              <div className="testimonial-quote">&ldquo;</div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => <span key={i}>{starSVG}</span>)}
              </div>
              <p className="testimonial-text">
                Maria did an outstanding job selling our house. She listened to all our concerns and wishes. Walked us through the process and explained everything we needed to do. Her photography team took gorgeous pictures that I believe truly showcased the property. Highly recommend anyone to use Maria as your realtor.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">K</div>
                <div>
                  <div className="testimonial-name">Kevin Hoff</div>
                  <div className="testimonial-detail">Google Review · ★★★★★</div>
                </div>
              </div>
            </article>

            <article className="testimonial reveal delay-1">
              <div className="testimonial-quote">&ldquo;</div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => <span key={i}>{starSVG}</span>)}
              </div>
              <p className="testimonial-text">
                Very professional agent and very courteous — always had my back and looked out for my interest. This is the best agent &amp; SOLD SOLD SOLD. Thank you.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">R</div>
                <div>
                  <div className="testimonial-name">Richard Glantz</div>
                  <div className="testimonial-detail">Google Review · ★★★★★</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ VALUATION CTA ============ */}
      <section className="valuation" id="valuation">
        <div className="container">
          <div className="valuation-grid">
            <div className="valuation-copy reveal">
              <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
                Free · 24-Hour Turnaround
              </span>
              <h2>What&apos;s your home worth?</h2>
              <p className="valuation-lead">
                Get a personalized valuation from someone who actually knows your block. Not an algorithm — me, with twenty years of comparable sales in your back pocket.
              </p>
              <div className="valuation-points">
                <div className="valuation-point">{checkSVG} Detailed comparable market analysis</div>
                <div className="valuation-point">{checkSVG} Neighborhood-specific pricing strategy</div>
                <div className="valuation-point">{checkSVG} No obligation, no spam, no pressure</div>
              </div>
            </div>
            <form
              className="valuation-form reveal delay-1"
              action="https://formspree.io/f/xpqkezor"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Home Valuation Request" />
              <input type="hidden" name="_next" value="https://www.mariacoloradorealty.com/thank-you" />
              <h3>Request your free valuation</h3>
              <p className="valuation-form-lead">Tell me a little about your home and I&apos;ll get back to you within 24 hours.</p>
              <div className="form-field">
                <label>Full name</label>
                <input type="text" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="form-field">
                <label>Property address</label>
                <input type="text" name="address" required placeholder="123 Main Street, Brighton, CO" />
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" name="email" required placeholder="you@email.com" />
                </div>
                <div className="form-field">
                  <label>Phone</label>
                  <input type="tel" name="phone" required placeholder="(720) 555-0100" />
                </div>
              </div>
              <button className="btn btn-primary form-submit" type="submit">
                Get My Free Valuation <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card reveal">
              <div className="contact-card-img">
                <Image
                  src="/Maria.jpg"
                  alt="Maria Navin-Lassiter"
                  width={400}
                  height={480}
                  style={{ objectPosition: "55% 25%" }}
                />
              </div>
              <div className="contact-card-body">
                <div className="contact-card-name">Maria Navin-Lassiter</div>
                <div className="contact-card-role">Realtor · Century 21 Moore Real Estate</div>
                <a className="contact-detail" href="tel:7204011889">
                  <div className="contact-detail-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Direct line</div>
                    <div className="contact-detail-value">(720) 401-1889</div>
                  </div>
                </a>
                <a className="contact-detail" href="mailto:maria@mariacoloradorealty.com">
                  <div className="contact-detail-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Email</div>
                    <div className="contact-detail-value">maria@mariacoloradorealty.com</div>
                  </div>
                </a>
                <a className="contact-detail" href="https://mariacoloradorealty.com">
                  <div className="contact-detail-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Website</div>
                    <div className="contact-detail-value">mariacoloradorealty.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-form-wrap reveal delay-1">
              <span className="eyebrow">Get in Touch</span>
              <h2>Let&apos;s start a conversation.</h2>
              <p>Buying, selling, or just exploring? Tell me where you&apos;re headed and I&apos;ll be in touch — usually within a few hours.</p>
              <form
                action="https://formspree.io/f/xpqkezor"
                method="POST"
              >
                <input type="hidden" name="_next" value="https://www.mariacoloradorealty.com/thank-you" />
                <input type="hidden" name="interest" value={interest} />
                <div className="form-row">
                  <div className="form-field">
                    <label>Name</label>
                    <input type="text" name="name" required placeholder="Your name" />
                  </div>
                  <div className="form-field">
                    <label>Email</label>
                    <input type="email" name="email" required placeholder="you@email.com" />
                  </div>
                </div>
                <div className="form-field">
                  <label>Phone</label>
                  <input type="tel" name="phone" required placeholder="(720) 555-0100" />
                </div>
                <div className="form-field">
                  <label>I&apos;m interested in</label>
                  <div className="interest-pills">
                    {["buying", "selling", "investing", "just-exploring"].map((val) => (
                      <button
                        key={val}
                        type="button"
                        className={`interest-pill${interest === val ? " active" : ""}`}
                        onClick={() => setInterest(val)}
                      >
                        {val.charAt(0).toUpperCase() + val.slice(1).replace("-", " ")}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-field">
                  <label>Tell me more</label>
                  <textarea name="message" placeholder="A little about what you're looking for, your timeline, or any questions..." />
                </div>
                <button className="btn btn-navy" type="submit" style={{ width: "100%", padding: "16px" }}>
                  Send Message <span className="arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container-wide">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand" style={{ color: "#fff" }}>
                <div className="brand-mark">M</div>
                <div>
                  <div className="brand-name" style={{ color: "#fff" }}>Maria Navin-Lassiter</div>
                  <div className="brand-tag" style={{ color: "var(--gold-soft)" }}>Century 21 The Moore Team</div>
                </div>
              </div>
              <p>Helping families across the Denver Metro find — and sell — homes they love. Twenty years strong, one handshake at a time.</p>
              <div className="c21-badge">
                <div className="c21-badge-mark">21</div>
                Century 21 Moore Real Estate
              </div>
            </div>

            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#about">About Maria</a></li>
                <li><a href="#areas">Service Areas</a></li>
                <li><a href="#listings">Featured Listings</a></li>
                <li><a href="#spotlights">Communities</a></li>
                <li><a href="#testimonials">Reviews</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Service Areas</h4>
              <ul>
                <li><a href="#areas">Brighton</a></li>
                <li><a href="#areas">Westminster</a></li>
                <li><a href="#areas">Thornton</a></li>
                <li><a href="#areas">Arvada</a></li>
                <li><a href="#areas">Commerce City</a></li>
                <li><a href="#areas">Northglenn</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:7204011889">(720) 401-1889</a></li>
                <li><a href="mailto:maria@mariacoloradorealty.com">maria@mariacoloradorealty.com</a></li>
                <li><a href="https://mariacoloradorealty.com">mariacoloradorealty.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2026 Maria Navin-Lassiter · Century 21 Moore Real Estate · All rights reserved.</div>
            <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Fair Housing</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
