import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, MapPin, Menu, Phone, X } from "lucide-react";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({ component: Index });

const collections = [
  {
    number: "01",
    title: "Vintage + Y2K",
    copy: "Graphic tees, denim, standout layers, and pieces with a little history.",
    image: "/assets/global-threadz/clothing.jpg",
    alt: "A curated selection of vintage-inspired clothing",
    className: "collection-large",
  },
  {
    number: "02",
    title: "Vinyl + music",
    copy: "Dig through records and find something worth taking home.",
    image: "/assets/global-threadz/vinyl.jpg",
    alt: "Vinyl records and music listening culture",
    className: "collection-records",
  },
  {
    number: "03",
    title: "The little things",
    copy: "Jewelry, posters, VHS, Pokémon cards, and the unexpected.",
    image: "/assets/global-threadz/records.jpg",
    alt: "Music and collectible culture",
    className: "collection-small",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="gt-site">
      <header className="gt-header">
        <a className="gt-brand" href="#top" aria-label="Global Threadz & Thrifts home">
          <span className="gt-brand-mark">GT<span>+</span></span>
          <span className="gt-brand-name">GLOBAL THREADZ<br />&amp; THRIFTS</span>
        </a>
        <nav className={`gt-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#finds" onClick={() => setMenuOpen(false)}>The finds</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our world</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>Visit the shop</a>
          <a className="gt-nav-cta" href="https://www.instagram.com/globalthreadz/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Follow along <ArrowUpRight size={15} /></a>
        </nav>
        <button className="gt-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div id="top" className="gt-hero-wrap">
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} className="gt-scroll-hero" />
        <div className="gt-hero-note"><span className="gt-note-line" /> DOWNTOWN FREDERICKSBURG, VA</div>
        <a className="gt-hero-down" href="#finds" aria-label="Explore the store"><span>Explore the store</span><ArrowDownRight size={19} /></a>
      </div>

      <section id="finds" className="gt-finds gt-section">
        <div className="gt-section-head reveal">
          <p className="gt-eyebrow">Good stuff, no two alike</p>
          <h2>Come for one thing.<br /><span>Leave with a story.</span></h2>
          <p className="gt-section-intro">Part vintage shop, part treasure hunt. Take your time and see what finds you.</p>
        </div>
        <div className="gt-collection-grid">
          {collections.map((item) => (
            <article className={`gt-collection ${item.className} reveal`} key={item.number}>
              <a className="gt-collection-image" href="https://www.instagram.com/globalthreadz/" target="_blank" rel="noreferrer" aria-label={`See ${item.title} on Instagram`}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="gt-image-arrow"><ArrowUpRight size={20} /></span>
              </a>
              <div className="gt-collection-copy">
                <span className="gt-item-number">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              </div>
            </article>
          ))}
        </div>
        <div className="gt-more-line reveal">
          <span>And plenty more to discover in person.</span>
          <a href="https://www.instagram.com/globalthreadz/" target="_blank" rel="noreferrer">See what’s new <ArrowRight size={17} /></a>
        </div>
      </section>

      <section id="story" className="gt-story">
        <div className="gt-story-image reveal"><img src="/assets/global-threadz/style.jpg" alt="A look at vintage style and personal expression" loading="lazy" /></div>
        <div className="gt-story-copy reveal">
          <p className="gt-eyebrow">A shop with character</p>
          <h2>For people who like things with a little <em>personality.</em></h2>
          <p>Global Threadz &amp; Thrifts is a downtown stop for curious shoppers, collectors, and anyone who likes finding something they did not know they were looking for.</p>
          <p>Browse vintage and Y2K clothing, jewelry, records, posters, VHS, Pokémon cards, and more. The best part is seeing what turns up.</p>
          <a className="gt-text-link" href="https://www.instagram.com/globalthreadz/" target="_blank" rel="noreferrer">Follow the latest finds <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="gt-review-band">
        <div className="gt-review-top reveal"><span className="gt-stars" aria-label="Rated 4.7 out of 5">★★★★★</span><span>GOOGLE REVIEWS</span></div>
        <div className="gt-review-main reveal">
          <p className="gt-rating">4.7 <span>/ 5</span></p>
          <div className="gt-review-quote"><blockquote>“There were so many quality and quirky options in a variety of sizes and styles.”</blockquote><p>Customer review</p></div>
          <a className="gt-review-link" href="https://www.google.com/search?q=Global+Threadz+%26+Thrifts+Fredericksburg+reviews" target="_blank" rel="noreferrer">Read customer reviews <ArrowUpRight size={17} /></a>
        </div>
        <p className="gt-review-foot">Based on 85 Google reviews. Ratings may change over time.</p>
      </section>

      <section id="visit" className="gt-visit gt-section">
        <div className="gt-visit-copy reveal">
          <p className="gt-eyebrow">Your next find is downtown</p>
          <h2>Make a day<br />of the <span>hunt.</span></h2>
          <p>Stop by on Caroline Street, browse at your own pace, and leave room for the unexpected.</p>
          <div className="gt-address"><MapPin size={20} /><div><strong>Global Threadz &amp; Thrifts</strong><span>602 Caroline St<br />Fredericksburg, VA 22401</span></div></div>
          <div className="gt-visit-actions">
            <a className="gt-button-primary" href="https://www.google.com/maps/dir/?api=1&destination=602+Caroline+St%2C+Fredericksburg%2C+VA+22401" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a>
            <a className="gt-phone-link" href="tel:+15403681690"><Phone size={16} /> 540-368-1690</a>
          </div>
          <p className="gt-hours-note">Hours can change. Check the shop’s social page before heading over.</p>
        </div>
        <div className="gt-map-card reveal">
          <div className="gt-map-image"><img src="/assets/global-threadz/style.jpg" alt="Vintage fashion details" loading="lazy" /><span className="gt-map-pin"><MapPin size={25} /></span></div>
          <div className="gt-map-caption"><span>ON CAROLINE STREET</span><a href="https://www.google.com/maps/search/?api=1&query=Global+Threadz+%26+Thrifts+Fredericksburg+VA" target="_blank" rel="noreferrer">Open in Maps <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="gt-social-cta">
        <p className="gt-eyebrow">The good finds keep coming</p>
        <h2>Stay in the loop.</h2>
        <p>New discoveries, shop updates, and a little vintage inspiration.</p>
        <a href="https://www.instagram.com/globalthreadz/" target="_blank" rel="noreferrer">Follow @globalthreadz <ArrowUpRight size={18} /></a>
      </section>

      <footer className="gt-footer">
        <a className="gt-brand gt-brand-footer" href="#top"><span className="gt-brand-mark">GT<span>+</span></span><span className="gt-brand-name">GLOBAL THREADZ<br />&amp; THRIFTS</span></a>
        <p>Vintage, vinyl, jewelry, collectibles, and more.</p>
        <div className="gt-footer-links"><a href="https://www.instagram.com/globalthreadz/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a><a href="https://www.google.com/maps/dir/?api=1&destination=602+Caroline+St%2C+Fredericksburg%2C+VA+22401" target="_blank" rel="noreferrer">Directions <ArrowUpRight size={14} /></a></div>
        <span className="gt-copyright">© {new Date().getFullYear()} Global Threadz &amp; Thrifts</span>
      </footer>
    </main>
  );
}
