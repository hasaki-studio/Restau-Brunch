/**
 * Restaurant Café Pivoine — Page principale
 * Design: Jardin Botanique Contemporain
 * Palette: Blanc pur, Rose Pivoine (#C8647A), Or doux (#C9A96E)
 * Typo: Cormorant Garamond (titres), Lato (corps), Dancing Script (accents)
 */
import { useState, useEffect, useRef } from 'react';
import GradientWaves from '@/components/GradientWaves';
import { MapView } from '@/components/Map';

// ── Icônes SVG inline ──────────────────────────────────────────────────────
// Fine-line botanical peony illustration (Art Nouveau line art)
const PeonyLineart = ({ className = '', color = '#C8647A', opacity = 0.12 }: { className?: string; color?: string; opacity?: number }) => (
  <svg className={className} viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M100 240 C100 200 98 170 100 140" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M100 190 C80 175 60 180 55 165 C70 160 90 168 100 190Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.08"/>
    <path d="M100 175 C120 160 140 165 145 150 C130 145 110 153 100 175Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.08"/>
    <path d="M100 140 C85 120 70 115 68 100 C80 95 95 108 100 140Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.06"/>
    <path d="M100 140 C115 120 130 115 132 100 C120 95 105 108 100 140Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.06"/>
    <path d="M100 140 C78 130 65 118 60 105 C72 98 88 112 100 140Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.06"/>
    <path d="M100 140 C122 130 135 118 140 105 C128 98 112 112 100 140Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.06"/>
    <path d="M100 140 C88 110 88 90 100 80 C112 90 112 110 100 140Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.06"/>
    <path d="M100 130 C88 115 84 103 88 95 C96 92 104 100 100 130Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.1"/>
    <path d="M100 130 C112 115 116 103 112 95 C104 92 96 100 100 130Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.1"/>
    <circle cx="100" cy="108" r="8" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.15"/>
    <circle cx="100" cy="108" r="3" fill="#C9A96E" fillOpacity="0.4"/>
  </svg>
);

const BotanicalDivider = ({ color = '#C8647A' }: { color?: string }) => (
  <div className="flex items-center justify-center gap-4 my-5">
    <div style={{ height: 1, width: 60, background: `linear-gradient(to right, transparent, ${color}50)` }} />
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2" fill={color} fillOpacity="0.7"/>
      <path d="M10 10 C6 6 2 7 1 4 C4 3 8 5 10 10Z" fill={color} fillOpacity="0.35"/>
      <path d="M10 10 C14 6 18 7 19 4 C16 3 12 5 10 10Z" fill={color} fillOpacity="0.35"/>
      <path d="M10 10 C6 14 2 13 1 16 C4 17 8 15 10 10Z" fill={color} fillOpacity="0.25"/>
      <path d="M10 10 C14 14 18 13 19 16 C16 17 12 15 10 10Z" fill={color} fillOpacity="0.25"/>
    </svg>
    <div style={{ height: 1, width: 60, background: `linear-gradient(to left, transparent, ${color}50)` }} />
  </div>
);

// ── Composant Navigation ───────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Happy Hour', href: '#happyhour' },
    { label: 'Brunch', href: '#brunch' },
    { label: 'Menu Saisonnier', href: '#menu' },
    { label: 'Réserver', href: '#reservation' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(200,100,122,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/pivoine-logo_113fe9cf.png"
            alt="Logo Café Pivoine"
            className="w-10 h-10 object-contain"
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem',
              fontWeight: 600,
              color: scrolled ? '#C8647A' : '#fff',
              letterSpacing: '0.04em',
              textShadow: scrolled ? 'none' : '0 2px 12px rgba(0,0,0,0.4)',
              transition: 'color 0.4s',
            }}
          >
            Café Pivoine
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: scrolled ? '#3a2a2e' : '#fff',
                textShadow: scrolled ? 'none' : '0 1px 8px rgba(0,0,0,0.5)',
                transition: 'color 0.3s',
                textDecoration: 'none',
              }}
              className="hover:text-[#C8647A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#fff',
              background: '#C8647A',
              padding: '0.55rem 1.4rem',
              borderRadius: '2rem',
              textDecoration: 'none',
              transition: 'background 0.3s, transform 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#a84e62')}
            onMouseLeave={e => (e.currentTarget.style.background = '#C8647A')}
          >
            Réserver
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: scrolled ? '#C8647A' : '#fff' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#f0d8dc] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.9rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#3a2a2e',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// ── Composant Hero ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative w-full" style={{ height: '100vh', minHeight: 600 }}>
      {/* Photo façade */}
      <img
        src="/images/restaurant-interior_4304db63.png"
        alt="Intérieur du restaurant Café Pivoine"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />
      {/* Overlay dégradé */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(20,5,10,0.18) 0%, rgba(20,5,10,0.30) 55%, rgba(180,80,100,0.18) 100%)',
        }}
      />
      {/* Contenu hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            color: '#F5C6CE',
            marginBottom: '0.75rem',
            letterSpacing: '0.06em',
          }}
        >
          Bienvenue chez
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            textShadow: '0 4px 24px rgba(0,0,0,0.35)',
            marginBottom: '1rem',
          }}
        >
          Café Pivoine
        </h1>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.88)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}
        >
          Là où les saisons ont un goût
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#happyhour"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#fff',
                background: '#C8647A',
                padding: '0.7rem 1.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                transition: 'background 0.3s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a84e62'; e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#C8647A'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Happy Hour
            </a>
            <a
              href="#brunch"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#fff',
                background: '#C8647A',
                padding: '0.7rem 1.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                transition: 'background 0.3s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a84e62'; e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#C8647A'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Brunch
            </a>
            <a
              href="#menu"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#fff',
                background: '#C8647A',
                padding: '0.7rem 1.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                transition: 'background 0.3s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a84e62'; e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#C8647A'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Menu Saisonnier
            </a>
          </div>
          <a
            href="#reservation"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.7)',
              padding: '0.8rem 2rem',
              borderRadius: '2rem',
              textDecoration: 'none',
              transition: 'background 0.3s, border-color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            Réserver une table
          </a>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span style={{ fontFamily: "'Lato'", fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Défiler</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10l6 6 6-6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
    </section>
  );
}

// ── Composant Wave Divider ─────────────────────────────────────────────────
function WaveDivider({ flip = false, color = '#fff' }: { flip?: boolean; color?: string }) {
  return (
    <div style={{ lineHeight: 0, transform: flip ? 'scaleY(-1)' : 'none', background: 'transparent' }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}>
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill={color} />
      </svg>
    </div>
  );
}

// ── Section À propos ───────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Pivoine décorative fond */}
      <PeonyLineart className="absolute -top-10 -right-10 w-80 h-80 pointer-events-none" opacity={0.10} />
      <PeonyLineart className="absolute bottom-0 left-0 w-56 h-56 pointer-events-none" color="#C9A96E" opacity={0.07} />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#C8647A', marginBottom: '0.5rem' }}>
            Notre histoire
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2a1a1e', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Un écrin floral<br /><em>au cœur de la ville</em>
          </h2>
          <BotanicalDivider />
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#5a3a42', lineHeight: 1.85, marginBottom: '1.2rem' }}>
            Café Pivoine est un lieu où l'élégance florale rencontre la gastronomie vivante. Dans un décor aux reflets dorés et aux lumières tamisées, chaque repas devient une parenthèse hors du temps.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#5a3a42', lineHeight: 1.85 }}>
            Notre cuisine évolue au rythme des saisons, sublimant les produits frais du marché avec une touche créative et généreuse. Du brunch dominical au dîner intime, nous cultivons l'art de recevoir.
          </p>
          <div className="flex gap-3 mt-8">
            {[{ n: 'Happy Hour', t: 'Chaque soir' }, { n: 'Brunch', t: 'Sam. & Dim.' }, { n: 'Menu Saison', t: 'Renouvelé' }].map(item => (
              <div key={item.n} className="text-center px-4 py-3 rounded-xl" style={{ background: '#FDF0F2', border: '1px solid #F0D0D8' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem', fontWeight: 600, color: '#C8647A' }}>{item.n}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.72rem', color: '#8a5a62', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>{item.t}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Image intérieur */}
        <div className="relative">
          <div
            className="overflow-hidden shadow-2xl"
            style={{ borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%', aspectRatio: '4/5' }}
          >
            <img
              src="/images/restaurant-interior_4304db63.png"
              alt="Ambiance Café Pivoine"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 40%' }}
            />
          </div>
          {/* Badge flottant */}
          <div
            className="absolute -bottom-4 -left-4 rounded-full flex flex-col items-center justify-center shadow-lg"
            style={{ width: 90, height: 90, background: '#C8647A' }}
          >
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>2019</span>
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.6rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Depuis</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section Happy Hour ─────────────────────────────────────────────────────
function HappyHourSection() {
  const cocktails = [
    { name: 'Pivoine Royale', desc: 'Champagne, liqueur de rose, framboise fraîche', price: '9€', emoji: '🥂' },
    { name: 'Sunset Pétale', desc: 'Gin, sirop de pivoine, citron, eau pétillante', price: '8€', emoji: '🌸' },
    { name: 'Or & Velours', desc: 'Whisky, miel, gingembre, citron vert', price: '9€', emoji: '✨' },
    { name: 'Mocktail Floral', desc: 'Hibiscus, grenadine, citron, soda', price: '6€', emoji: '🌺' },
  ];

  return (
    <section id="happyhour" className="relative bg-white">
      <div style={{ height: 5, background: 'linear-gradient(to right, transparent, #C8647A30, transparent)' }} />
      <div className="py-20 px-6 relative overflow-hidden">
        <PeonyLineart className="absolute top-0 right-0 w-80 h-80 pointer-events-none" opacity={0.06} />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#C8647A', marginBottom: '0.4rem' }}>
              Chaque soir de 17h à 20h
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2a1a1e', marginBottom: '1rem' }}>
              Happy Hour
            </h2>
            <BotanicalDivider />
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#6a4a52', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              Retrouvez-nous en fin de journée pour des cocktails signature et des planches à partager, dans l'atmosphère chaleureuse de Café Pivoine.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cocktails.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 cursor-default"
                style={{ background: '#fff', border: '1px solid #F0D0D8', boxShadow: '0 4px 20px rgba(200,100,122,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(200,100,122,0.14)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(200,100,122,0.06)'; }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="4" fill="#C8647A" fillOpacity="0.7"/>
                  {[0,60,120,180,240,300].map((a, idx) => (
                    <ellipse key={idx} cx={14 + 7*Math.cos(a*Math.PI/180)} cy={14 + 7*Math.sin(a*Math.PI/180)} rx="3.5" ry="2.2"
                      fill="#C8647A" fillOpacity="0.35"
                      transform={`rotate(${a} ${14 + 7*Math.cos(a*Math.PI/180)} ${14 + 7*Math.sin(a*Math.PI/180)})`}/>
                  ))}
                  <circle cx="14" cy="14" r="1.5" fill="#C9A96E"/>
                </svg>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 600, color: '#2a1a1e', marginBottom: '0.3rem' }}>{c.name}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', color: '#7a5a62', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
                <div style={{ marginTop: 'auto', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 700, color: '#C8647A' }}>{c.price}</div>
              </div>
            ))}
          </div>

          {/* GradientWaves décoratif */}
          <div className="mt-16 rounded-3xl overflow-hidden" style={{ height: 160 }}>
            <GradientWaves
              horizonColor="#F9E8EC"
              waveColor="#E8A0B0"
              crestColor="#FFFFFF"
              speed={0.25}
              amplitude={1.8}
              waveScale={0.45}
              fogDepth={12}
              opacity={0.85}
              grain={true}
              grainIntensity={0.02}
            />
          </div>
        </div>
      </div>
      <div style={{ height: 5, background: 'linear-gradient(to right, transparent, #C8647A30, transparent)' }} />
    </section>
  );
}

// ── Section Brunch ─────────────────────────────────────────────────────────
function BrunchSection() {
  return (
    <section id="brunch" className="py-24 px-6 bg-white relative overflow-hidden">
      <PeonyLineart className="absolute top-0 left-0 w-72 h-72 pointer-events-none -translate-x-1/4 -translate-y-1/4" color="#C9A96E" opacity={0.08} />
      <PeonyLineart className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none translate-x-1/4 translate-y-1/4" opacity={0.07} />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <div>
            <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#C8647A', marginBottom: '0.4rem' }}>
              Samedi & Dimanche · 10h–15h
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2a1a1e', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Le Brunch<br /><em>de Café Pivoine</em>
            </h2>
            <BotanicalDivider />
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#5a3a42', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              Un brunch généreux et raffiné, pensé pour les matins qui s'étirent. Œufs bénédicte, tartines créatives, viennoiseries maison et jus pressés à la minute — tout ce qu'il faut pour bien commencer le week-end.
            </p>
            <div className="space-y-3 mb-8">
              {[
                'Tartine avocat, saumon gravlax & Å“uf poché',
                'Granola maison, yaourt grec, fruits de saison',
                'Pancakes à la fleur d\'oranger, sirop d\'érable',
                'Planche charcuterie & fromages affinés',
                'Jus de fruits frais & smoothies du moment',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span style={{ color: '#C8647A', marginTop: 3, flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="#C8647A"/></svg>
                  </span>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.95rem', color: '#5a3a42', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 700, color: '#C8647A' }}>29€</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.75rem', color: '#8a5a62', letterSpacing: '0.08em', textTransform: 'uppercase' }}>par personne</div>
              </div>
              <a
                href="#reservation"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  background: '#C8647A',
                  padding: '0.75rem 1.8rem',
                  borderRadius: '2rem',
                  textDecoration: 'none',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#a84e62')}
                onMouseLeave={e => (e.currentTarget.style.background = '#C8647A')}
              >
                Réserver le brunch
              </a>
            </div>
          </div>

          {/* Photo brunch */}
          <div className="relative">
            <div
              className="overflow-hidden shadow-2xl"
              style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 60% 40%', aspectRatio: '4/5' }}
            >
              <img
                src="/images/brunch-dish_c6b33f50.png"
                alt="Brunch Café Pivoine — Tartine avocat saumon"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Étiquette flottante */}
            <div
              className="absolute top-6 -right-4 rounded-2xl px-4 py-3 shadow-lg"
              style={{ background: '#C9A96E' }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 600, color: '#fff' }}>Fait maison</div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.08em' }}>chaque matin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section Menu Saisonnier ────────────────────────────────────────────────
function SeasonalMenuSection() {
  const [activeSeason, setActiveSeason] = useState('printemps');

  const seasons: Record<string, { label: string; icon: string; color: string; starters: string[]; mains: string[]; desserts: string[] }> = {
    printemps: {
      label: 'Printemps', icon: '🌸', color: '#C8647A',
      starters: ['Velouté d\'asperges vertes, huile de truffe', 'Tartare de daurade, fleurs comestibles', 'Burrata, petits pois, menthe fraîche'],
      mains: ['Agneau de lait, jus d\'herbes, légumes primeurs', 'Risotto aux morilles, parmesan 24 mois', 'Saint-Jacques poêlées, purée de topinambour'],
      desserts: ['Pavlova aux fraises Gariguette', 'Tarte fine rhubarbe, crème légère', 'Panna cotta fleur de sureau'],
    },
    ete: {
      label: 'Été', icon: '☀️', color: '#C9A96E',
      starters: ['Gratin de quinoa et petis légumes', 'Ravioles aux champignons et à la crème de truffe, parmesan', 'Salade de melon, jambon de Bayonne, roquette'],
      mains: ['Filet de bar, ratatouille confite, pistou', 'Poulet fermier rôti, légumes du soleil', 'Penne aux courgettes, ricotta, citron'],
      desserts: ['Fromage blanc, fruits de saisons & crumble noisettes', 'Crème brûlée à la vanille', 'Clafoutis aux cerises noires'],
    },
    automne: {
      label: 'Automne', icon: '🍂', color: '#B8734A',
      starters: ['Gratin de quinoa et petis légumes', 'Ravioles aux champignons et à la crème de truffe, parmesan', 'Salade de betteraves, chèvre, noix'],
      mains: ['Pavé de lieu, crème de paprika', 'Tartare de boeuf préparé, frites maison', 'Mac and cheese (and beef)'],
      desserts: ['Tarte aux poires, amandes effilées', 'Moelleux au chocolat, caramel beurre salé', 'Crumble pommes-cannelle'],
    },
    hiver: {
      label: 'Hiver', icon: '❄️', color: '#6A8FAF',
      starters: ['Soupe à l\'oignon gratinée', 'Huîtres fines de Bretagne, mignonette', 'Terrine de gibier, cornichons maison'],
      mains: ['BÅ“uf bourguignon, purée Robuchon', 'Homard breton, bisque crémeuse', 'Ravioles de Romans, beurre de sauge'],
      desserts: ['Bûche aux marrons glacés', 'Île flottante, pralin maison', 'Fondant au chocolat noir 72%'],
    },
  };

  const current = seasons[activeSeason];

  return (
    <section id="menu" className="relative bg-white">
      <div style={{ height: 5, background: 'linear-gradient(to right, transparent, #C8647A30, transparent)' }} />
      <div className="py-20 px-6 relative overflow-hidden">
        <PeonyLineart className="absolute -bottom-10 -left-10 w-80 h-80 pointer-events-none" color="#C9A96E" opacity={0.07} />
        <PeonyLineart className="absolute top-10 right-0 w-64 h-64 pointer-events-none" opacity={0.06} />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#C8647A', marginBottom: '0.4rem' }}>
              Renouvelé chaque saison
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2a1a1e', marginBottom: '1rem' }}>
              Menu Saisonnier
            </h2>
            <BotanicalDivider />
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#6a4a52', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Notre cuisine suit le rythme de la nature. Chaque saison apporte ses saveurs, ses textures et ses émotions.
            </p>
          </div>

          {/* Sélecteur de saison */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(seasons).map(([key, s]) => (
              <button
                key={key}
                onClick={() => setActiveSeason(key)}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: activeSeason === key ? 700 : 400,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: activeSeason === key ? '#fff' : '#5a3a42',
                  background: activeSeason === key ? s.color : '#fff',
                  border: `1.5px solid ${activeSeason === key ? s.color : '#E0C0C8'}`,
                  padding: '0.6rem 1.5rem',
                  borderRadius: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>{s.icon}</span> {s.label}
              </button>
            ))}
          </div>

          {/* Cartes menu */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Entrées', items: current.starters, icon: '🌿' },
              { title: 'Plats', items: current.mains, icon: '🍽️' },
              { title: 'Desserts', items: current.desserts, icon: '🌸' },
            ].map((cat, i) => (
              <div
                key={i}
                className="rounded-2xl p-7"
                style={{ background: '#fff', border: '1px solid #F0D0D8', boxShadow: '0 4px 20px rgba(200,100,122,0.06)' }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span style={{ fontSize: '1.4rem' }}>{cat.icon}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: '#2a1a1e' }}>{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="pb-3" style={{ borderBottom: j < cat.items.length - 1 ? '1px solid #F5E0E4' : 'none' }}>
                      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.9rem', color: '#3a2a2e', lineHeight: 1.5 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Prix menu */}
          <div className="mt-10 text-center">
            <div className="inline-flex gap-8 rounded-2xl px-10 py-6" style={{ background: '#fff', border: '1px solid #F0D0D8', boxShadow: '0 4px 20px rgba(200,100,122,0.06)' }}>
              {[{ label: 'Entrée + Plat', price: '32€' }, { label: 'Plat + Dessert', price: '32€' }, { label: 'Menu complet', price: '42€' }].map((m, i) => (
                <div key={i} className="text-center">
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: '#C8647A' }}>{m.price}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.75rem', color: '#8a5a62', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 5, background: 'linear-gradient(to right, transparent, #C8647A30, transparent)' }} />
    </section>
  );
}

// ── Section Réservation ────────────────────────────────────────────────────
function ReservationSection() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: '2', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Lato', sans-serif",
    fontSize: '0.9rem',
    color: '#3a2a2e',
    background: '#fff',
    border: '1.5px solid #E0C0C8',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Lato', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#8a5a62',
    marginBottom: '0.4rem',
    display: 'block',
  };

  return (
    <section id="reservation" className="py-24 px-6 bg-white relative overflow-hidden">
      <PeonyLineart className="absolute -bottom-20 -left-20 w-96 h-96 pointer-events-none" opacity={0.08} />
      <PeonyLineart className="absolute -top-10 right-10 w-72 h-72 pointer-events-none" color="#C9A96E" opacity={0.06} />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#C8647A', marginBottom: '0.4rem' }}>
            Nous vous attendons
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2a1a1e', marginBottom: '1rem' }}>
            Réserver une table
          </h2>
          <BotanicalDivider />
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#6a4a52', maxWidth: 420, margin: '0 auto', lineHeight: 1.7 }}>
            Pour toute demande spéciale ou événement privé, n'hésitez pas à nous contacter directement.
          </p>
        </div>

        {sent ? (
          <div className="text-center py-16">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌸</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 600, color: '#C8647A', marginBottom: '0.75rem' }}>
              Merci pour votre réservation !
            </h3>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#6a4a52' }}>
              Nous vous confirmerons votre table par e-mail dans les plus brefs délais.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label style={labelStyle}>Nom complet</label>
              <input
                type="text"
                required
                placeholder="Marie Dupont"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#C8647A')}
                onBlur={e => (e.target.style.borderColor = '#E0C0C8')}
              />
            </div>
            <div>
              <label style={labelStyle}>E-mail</label>
              <input
                type="email"
                required
                placeholder="marie@exemple.fr"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#C8647A')}
                onBlur={e => (e.target.style.borderColor = '#E0C0C8')}
              />
            </div>
            <div>
              <label style={labelStyle}>Date</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#C8647A')}
                onBlur={e => (e.target.style.borderColor = '#E0C0C8')}
              />
            </div>
            <div>
              <label style={labelStyle}>Heure</label>
              <select
                required
                value={form.time}
                onChange={e => setForm({ ...form, time: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#C8647A')}
                onBlur={e => (e.target.style.borderColor = '#E0C0C8')}
              >
                <option value="">Choisir un horaire</option>
                {['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Nombre de couverts</label>
              <select
                value={form.guests}
                onChange={e => setForm({ ...form, guests: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#C8647A')}
                onBlur={e => (e.target.style.borderColor = '#E0C0C8')}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'personne' : 'personnes'}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Message (optionnel)</label>
              <textarea
                placeholder="Allergie, occasion spéciale..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={1}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => (e.target.style.borderColor = '#C8647A')}
                onBlur={e => (e.target.style.borderColor = '#E0C0C8')}
              />
            </div>
            <div className="md:col-span-2 flex justify-center mt-2">
              <button
                type="submit"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  background: '#C8647A',
                  padding: '0.9rem 3rem',
                  borderRadius: '2rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.3s, transform 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#a84e62'; (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#C8647A'; (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
              >
                Confirmer la réservation
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}


// ── Section Contact avec Carte ────────────────────────────────────────────
function ContactSection() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: { lat: 48.8566, lng: 2.3522 },
      title: 'Restaurant Café Pivoine',
    });
  };

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <PeonyLineart className="absolute top-0 right-0 w-80 h-80 pointer-events-none" opacity={0.06} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#C8647A', marginBottom: '0.4rem' }}>
            Nous trouver
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#2a1a1e', marginBottom: '1rem' }}>
            Localisation & Contact
          </h2>
          <BotanicalDivider />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid #EDD5DB', boxShadow: '0 2px 16px rgba(200,100,122,0.05)' }}>
              <div className="flex items-start gap-4 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#C8647A"/></svg>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#2a1a1e', marginBottom: '0.3rem' }}>Adresse</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.95rem', color: '#5a3a42', lineHeight: 1.6 }}>12 rue des Fleurs<br />75006 Paris, France</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid #EDD5DB', boxShadow: '0 2px 16px rgba(200,100,122,0.05)' }}>
              <div className="flex items-start gap-4 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.92 7.02C17.45 6.18 16.84 5.46 16.07 4.91C15.29 4.36 14.41 4 13.5 4C11.57 4 10 5.57 10 7.5C10 8.5 10.35 9.41 10.93 10.12C10.31 10.59 9.77 11.13 9.31 11.74C8.35 13.02 7.8 14.56 7.8 16.2C7.8 19.63 10.57 22.4 14 22.4C17.43 22.4 20.2 19.63 20.2 16.2C20.2 14.56 19.65 13.02 18.69 11.74C18.23 11.13 17.69 10.59 17.07 10.12C17.65 9.41 18 8.5 18 7.5C18 6.5 17.65 5.59 17.07 4.88L17.92 7.02Z" fill="#C8647A"/></svg>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#2a1a1e', marginBottom: '0.3rem' }}>Téléphone</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.95rem', color: '#5a3a42', lineHeight: 1.6 }}><a href="tel:+33142000000" style={{ color: '#C8647A', textDecoration: 'none' }}>+33 1 42 00 00 00</a></p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid #EDD5DB', boxShadow: '0 2px 16px rgba(200,100,122,0.05)' }}>
              <div className="flex items-start gap-4 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#C8647A"/></svg>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#2a1a1e', marginBottom: '0.3rem' }}>Email</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.95rem', color: '#5a3a42', lineHeight: 1.6 }}><a href="mailto:contact@lapivoine.fr" style={{ color: '#C8647A', textDecoration: 'none' }}>contact@lapivoine.fr</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid #EDD5DB', minHeight: 400 }}>
            <MapView initialCenter={{ lat: 48.8566, lng: 2.3522 }} initialZoom={15} onMapReady={handleMapReady} className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#2a1a1e' }} className="relative overflow-hidden">
      {/* Vague de transition */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>
      <div className="px-6 pt-8 pb-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/pivoine-logo_113fe9cf.png" alt="Logo" className="w-8 h-8 object-contain opacity-90" />
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: '#F5C6CE' }}>Café Pivoine</span>
            </div>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              Un restaurant où chaque repas est une célébration des saisons et du goût.
            </p>
          </div>
          {/* Horaires */}
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#F5C6CE', marginBottom: '1rem' }}>Horaires</h4>
            <div className="space-y-2">
              {[
                { j: 'Lun – Ven', h: '12h–14h30 · 19h–23h' },
                { j: 'Sam – Dim', h: 'Brunch 10h–15h · Dîner 19h–23h' },
                { j: 'Happy Hour', h: 'Tous les soirs 17h–20h' },
              ].map(item => (
                <div key={item.j} className="flex justify-between gap-4">
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>{item.j}</span>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>{item.h}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#F5C6CE', marginBottom: '1rem' }}>Contact</h4>
            <div className="space-y-2">
              {[
                { icon: '📍', text: '12 rue des Fleurs, 75006 Paris' },
                { icon: '📞', text: '+33 1 42 00 00 00' },
                { icon: '✉️', text: 'contact@lapivoine.fr' },
              ].map(item => (
                <div key={item.icon} className="flex items-start gap-2">
                  <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Restaurant Café Pivoine — Tous droits réservés
          </p>
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1rem', color: '#C8647A' }}>
            Là où les saisons ont un goût ✦
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Page principale ────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <HappyHourSection />
      <BrunchSection />
      <SeasonalMenuSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}



