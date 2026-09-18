/**
 * Restaurant Café Pivoine — Page principale
 * Design: Brasserie Parisienne (store à rayures, fer forgé, pierre de taille)
 * Palette: Blanc pur, Ocre moutarde (#B8872A), Brass antique (#8C6A35)
 * Typo: Cormorant Garamond (titres), Lato (corps), Dancing Script (accents)
 */
import { useState, useEffect, useRef } from 'react';
import GradientWaves from '@/components/GradientWaves';
import { MapView } from '@/components/Map';
import { LangProvider, useLang } from '@/contexts/LangContext';
import type { SeasonKey } from '@/lib/i18n';

// ── Séparateur de section (rayures façon store de brasserie) ───────────────
const SectionDivider = ({ color = '#B8872A' }: { color?: string }) => (
  <div className="flex items-center justify-center gap-4 my-5">
    <div style={{ height: 1, width: 60, background: `linear-gradient(to right, transparent, ${color}50)` }} />
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="16" height="16" rx="2" stroke={color} strokeWidth="1.4"/>
      <rect x="6" y="6" width="6" height="6" fill={color} fillOpacity="0.5"/>
    </svg>
    <div style={{ height: 1, width: 60, background: `linear-gradient(to left, transparent, ${color}50)` }} />
  </div>
);

// ── Sélecteur de langue ──────────────────────────────────────────────────
function LangSwitch({ light = false }: { light?: boolean }) {
  const { lang, toggleLang } = useLang();
  return (
    <button
      onClick={toggleLang}
      aria-label="Switch language / Changer de langue"
      style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: light ? '#fff' : '#241E1A',
        background: 'transparent',
        border: `1.5px solid ${light ? 'rgba(255,255,255,0.7)' : '#E6D9BC'}`,
        borderRadius: '2rem',
        padding: '0.35rem 0.75rem',
        cursor: 'pointer',
        transition: 'border-color 0.3s, color 0.3s',
      }}
    >
      {lang === 'fr' ? 'FR' : 'EN'} / {lang === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}

// ── Composant Navigation ───────────────────────────────────────────────────
function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.happyHour, href: '#happyhour' },
    { label: t.nav.brunch, href: '#brunch' },
    { label: t.nav.seasonalMenu, href: '#menu' },
    { label: t.nav.reserve, href: '#reservation' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(90,70,30,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 40,
              height: 40,
              borderRadius: '0.4rem',
              border: `1.5px solid ${scrolled ? '#B8872A' : 'rgba(255,255,255,0.85)'}`,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem',
              fontWeight: 600,
              color: scrolled ? '#B8872A' : '#fff',
              transition: 'color 0.4s, border-color 0.4s',
            }}
          >
            CP
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem',
              fontWeight: 600,
              color: scrolled ? '#B8872A' : '#fff',
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
                color: scrolled ? '#241E1A' : '#fff',
                textShadow: scrolled ? 'none' : '0 1px 8px rgba(0,0,0,0.5)',
                transition: 'color 0.3s',
                textDecoration: 'none',
              }}
              className="hover:text-[#B8872A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LangSwitch light={!scrolled} />
          <a
            href="#reservation"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#fff',
              background: '#B8872A',
              padding: '0.55rem 1.4rem',
              borderRadius: '2rem',
              textDecoration: 'none',
              transition: 'background 0.3s, transform 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#93691E')}
            onMouseLeave={e => (e.currentTarget.style.background = '#B8872A')}
          >
            {t.nav.reserve}
          </a>
        </nav>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-3">
          <LangSwitch light={!scrolled} />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all duration-300"
                style={{ background: scrolled ? '#B8872A' : '#fff' }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E6D9BC] px-6 py-4 flex flex-col gap-4">
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
                color: '#241E1A',
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
  const { t } = useLang();
  return (
    <section className="relative w-full" style={{ height: '100vh', minHeight: 600 }}>
      {/* Photo façade */}
      <img
        src="/images/facade-terrasse.webp"
        alt="Façade et terrasse du restaurant Café Pivoine"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />
      {/* Overlay dégradé */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(20,5,10,0.18) 0%, rgba(20,5,10,0.30) 55%, rgba(150,110,40,0.22) 100%)',
        }}
      />
      {/* Contenu hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            color: '#F4E3B8',
            marginBottom: '0.75rem',
            letterSpacing: '0.06em',
          }}
        >
          {t.hero.welcome}
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
          {t.hero.subtitle}
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
                background: '#B8872A',
                padding: '0.7rem 1.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                transition: 'background 0.3s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#93691E'; e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B8872A'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              {t.hero.ctaHappyHour}
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
                background: '#B8872A',
                padding: '0.7rem 1.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                transition: 'background 0.3s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#93691E'; e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B8872A'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              {t.hero.ctaBrunch}
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
                background: '#B8872A',
                padding: '0.7rem 1.5rem',
                borderRadius: '2rem',
                textDecoration: 'none',
                transition: 'background 0.3s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#93691E'; e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B8872A'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              {t.hero.ctaMenu}
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
            {t.hero.ctaReserve}
          </a>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span style={{ fontFamily: "'Lato'", fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.hero.scroll}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10l6 6 6-6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
    </section>
  );
}

// ── Section À propos ───────────────────────────────────────────────────────
function AboutSection() {
  const { t } = useLang();
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#B8872A', marginBottom: '0.5rem' }}>
            {t.about.kicker}
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#241E1A', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            {t.about.titleLine1}<br /><em>{t.about.titleLine2}</em>
          </h2>
          <SectionDivider />
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#4A4038', lineHeight: 1.85, marginBottom: '1.2rem' }}>
            {t.about.paragraph1}
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#4A4038', lineHeight: 1.85 }}>
            {t.about.paragraph2}
          </p>
          <div className="flex gap-3 mt-8">
            {t.about.badges.map(item => (
              <div key={item.n} className="text-center px-4 py-3 rounded-xl" style={{ background: '#F7F0DC', border: '1px solid #E6D9BC' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem', fontWeight: 600, color: '#B8872A' }}>{item.n}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.72rem', color: '#8C8171', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>{item.t}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Image façade */}
        <div className="relative">
          <div
            className="overflow-hidden shadow-2xl"
            style={{ borderRadius: '60% 40% 55% 45% / 45% 55% 45% 55%', aspectRatio: '4/5' }}
          >
            <img
              src="/images/facade-terrasse.webp"
              alt="Façade du restaurant Café Pivoine"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 40%' }}
            />
          </div>
          {/* Badge flottant */}
          <div
            className="absolute -bottom-4 -left-4 rounded-full flex flex-col items-center justify-center shadow-lg"
            style={{ width: 90, height: 90, background: '#B8872A' }}
          >
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>2019</span>
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.6rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.about.sinceLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section Happy Hour ─────────────────────────────────────────────────────
function HappyHourSection() {
  const { t } = useLang();
  const cocktails = t.happyHour.cocktails;

  return (
    <section id="happyhour" className="relative bg-white">
      <div style={{ height: 5, background: 'linear-gradient(to right, transparent, #B8872A30, transparent)' }} />
      <div className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#B8872A', marginBottom: '0.4rem' }}>
              {t.happyHour.kicker}
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#241E1A', marginBottom: '1rem' }}>
              {t.happyHour.title}
            </h2>
            <SectionDivider />
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#6E6355', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              {t.happyHour.intro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cocktails.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 cursor-default"
                style={{ background: '#fff', border: '1px solid #E6D9BC', boxShadow: '0 4px 20px rgba(90,70,30,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(90,70,30,0.14)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(90,70,30,0.06)'; }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 6h16l-7 9v6h4v2H9v-2h4v-6L6 6Z" stroke="#B8872A" strokeWidth="1.6" strokeLinejoin="round"/>
                  <circle cx="20" cy="8" r="1.4" fill="#8C6A35"/>
                </svg>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 600, color: '#241E1A', marginBottom: '0.3rem' }}>{c.name}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', color: '#6E6355', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
                <div style={{ marginTop: 'auto', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 700, color: '#B8872A' }}>{c.price}</div>
              </div>
            ))}
          </div>

          {/* GradientWaves décoratif */}
          <div className="mt-16 rounded-3xl overflow-hidden" style={{ height: 160 }}>
            <GradientWaves
              horizonColor="#F7F0DC"
              waveColor="#D9B36B"
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
      <div style={{ height: 5, background: 'linear-gradient(to right, transparent, #B8872A30, transparent)' }} />
    </section>
  );
}

// ── Section Brunch ─────────────────────────────────────────────────────────
function BrunchSection() {
  const { t } = useLang();
  return (
    <section id="brunch" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <div>
            <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#B8872A', marginBottom: '0.4rem' }}>
              {t.brunch.kicker}
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#241E1A', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              {t.brunch.titleLine1}<br /><em>{t.brunch.titleLine2}</em>
            </h2>
            <SectionDivider />
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#4A4038', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              {t.brunch.paragraph}
            </p>
            <div className="space-y-3 mb-8">
              {t.brunch.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span style={{ color: '#B8872A', marginTop: 3, flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="#B8872A"/></svg>
                  </span>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.95rem', color: '#4A4038', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 700, color: '#B8872A' }}>{t.brunch.price}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.75rem', color: '#8C8171', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t.brunch.perPerson}</div>
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
                  background: '#B8872A',
                  padding: '0.75rem 1.8rem',
                  borderRadius: '2rem',
                  textDecoration: 'none',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#93691E')}
                onMouseLeave={e => (e.currentTarget.style.background = '#B8872A')}
              >
                {t.brunch.cta}
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
                src="/images/brunch-table.webp"
                alt="Table de brunch Café Pivoine — croissant, tartine et jus pressé"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Étiquette flottante */}
            <div
              className="absolute top-6 -right-4 rounded-2xl px-4 py-3 shadow-lg"
              style={{ background: '#8C6A35' }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{t.brunch.badgeTitle}</div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.08em' }}>{t.brunch.badgeSubtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section Menu Saisonnier ────────────────────────────────────────────────
// Seule la saison ci-dessous reste sélectionnable ; les autres sont affichées à titre indicatif.
const AVAILABLE_SEASON: SeasonKey = 'printemps';

function SeasonalMenuSection() {
  const { t } = useLang();
  const [activeSeason, setActiveSeason] = useState<SeasonKey>(AVAILABLE_SEASON);
  const seasons = t.seasonalMenu.seasons;
  const current = seasons[activeSeason];

  return (
    <section id="menu" className="relative bg-white">
      <div style={{ height: 5, background: 'linear-gradient(to right, transparent, #B8872A30, transparent)' }} />
      <div className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#B8872A', marginBottom: '0.4rem' }}>
              {t.seasonalMenu.kicker}
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#241E1A', marginBottom: '1rem' }}>
              {t.seasonalMenu.title}
            </h2>
            <SectionDivider />
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#6E6355', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              {t.seasonalMenu.intro}
            </p>
          </div>

          {/* Sélecteur de saison */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(Object.entries(seasons) as [SeasonKey, typeof current][]).map(([key, s]) => {
              const isActive = activeSeason === key;
              const isDisabled = key !== AVAILABLE_SEASON;
              return (
                <button
                  key={key}
                  type="button"
                  disabled={isDisabled}
                  aria-disabled={isDisabled}
                  title={isDisabled ? t.seasonalMenu.comingSoon : undefined}
                  onClick={() => !isDisabled && setActiveSeason(key)}
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 700 : 400,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isActive ? '#fff' : isDisabled ? '#B8B0A0' : '#4A4038',
                    background: isActive ? s.color : '#fff',
                    border: `1.5px solid ${isActive ? s.color : '#E6D9BC'}`,
                    padding: '0.6rem 1.5rem',
                    borderRadius: '2rem',
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    opacity: isDisabled ? 0.55 : 1,
                    transition: 'all 0.25s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span>{s.icon}</span> {s.label}
                </button>
              );
            })}
          </div>

          {/* Cartes menu */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: t.seasonalMenu.categories.starters, items: current.starters, icon: '🌿' },
              { title: t.seasonalMenu.categories.mains, items: current.mains, icon: '🍽️' },
              { title: t.seasonalMenu.categories.desserts, items: current.desserts, icon: '🌸' },
            ].map((cat, i) => (
              <div
                key={i}
                className="rounded-2xl p-7"
                style={{ background: '#fff', border: '1px solid #E6D9BC', boxShadow: '0 4px 20px rgba(90,70,30,0.06)' }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span style={{ fontSize: '1.4rem' }}>{cat.icon}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: '#241E1A' }}>{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="pb-3" style={{ borderBottom: j < cat.items.length - 1 ? '1px solid #E6D9BC' : 'none' }}>
                      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.9rem', color: '#241E1A', lineHeight: 1.5 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Prix menu */}
          <div className="mt-10 text-center">
            <div className="inline-flex gap-8 rounded-2xl px-10 py-6" style={{ background: '#fff', border: '1px solid #E6D9BC', boxShadow: '0 4px 20px rgba(90,70,30,0.06)' }}>
              {t.seasonalMenu.pricing.map((m, i) => (
                <div key={i} className="text-center">
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: '#B8872A' }}>{m.price}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.75rem', color: '#8C8171', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 5, background: 'linear-gradient(to right, transparent, #B8872A30, transparent)' }} />
    </section>
  );
}

// ── Section Réservation ────────────────────────────────────────────────────
function ReservationSection() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: '2', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Lato', sans-serif",
    fontSize: '0.9rem',
    color: '#241E1A',
    background: '#fff',
    border: '1.5px solid #E6D9BC',
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
    color: '#8C8171',
    marginBottom: '0.4rem',
    display: 'block',
  };

  return (
    <section id="reservation" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#B8872A', marginBottom: '0.4rem' }}>
            {t.reservation.kicker}
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#241E1A', marginBottom: '1rem' }}>
            {t.reservation.title}
          </h2>
          <SectionDivider />
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#6E6355', maxWidth: 420, margin: '0 auto', lineHeight: 1.7 }}>
            {t.reservation.intro}
          </p>
        </div>

        {sent ? (
          <div className="text-center py-16">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌸</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 600, color: '#B8872A', marginBottom: '0.75rem' }}>
              {t.reservation.thanksTitle}
            </h3>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1rem', color: '#6E6355' }}>
              {t.reservation.thanksText}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label style={labelStyle}>{t.reservation.labels.name}</label>
              <input
                type="text"
                required
                placeholder={t.reservation.placeholders.name}
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#B8872A')}
                onBlur={e => (e.target.style.borderColor = '#E6D9BC')}
              />
            </div>
            <div>
              <label style={labelStyle}>{t.reservation.labels.email}</label>
              <input
                type="email"
                required
                placeholder={t.reservation.placeholders.email}
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#B8872A')}
                onBlur={e => (e.target.style.borderColor = '#E6D9BC')}
              />
            </div>
            <div>
              <label style={labelStyle}>{t.reservation.labels.date}</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#B8872A')}
                onBlur={e => (e.target.style.borderColor = '#E6D9BC')}
              />
            </div>
            <div>
              <label style={labelStyle}>{t.reservation.labels.time}</label>
              <select
                required
                value={form.time}
                onChange={e => setForm({ ...form, time: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#B8872A')}
                onBlur={e => (e.target.style.borderColor = '#E6D9BC')}
              >
                <option value="">{t.reservation.chooseTime}</option>
                {['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>{t.reservation.labels.guests}</label>
              <select
                value={form.guests}
                onChange={e => setForm({ ...form, guests: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = '#B8872A')}
                onBlur={e => (e.target.style.borderColor = '#E6D9BC')}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <option key={n} value={n}>{t.reservation.guestLabel(n)}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>{t.reservation.labels.message}</label>
              <textarea
                placeholder={t.reservation.placeholders.message}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={1}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => (e.target.style.borderColor = '#B8872A')}
                onBlur={e => (e.target.style.borderColor = '#E6D9BC')}
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
                  background: '#B8872A',
                  padding: '0.9rem 3rem',
                  borderRadius: '2rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.3s, transform 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#93691E'; (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#B8872A'; (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
              >
                {t.reservation.submit}
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
  const { t } = useLang();
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.2rem', color: '#B8872A', marginBottom: '0.4rem' }}>
            {t.contact.kicker}
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#241E1A', marginBottom: '1rem' }}>
            {t.contact.title}
          </h2>
          <SectionDivider />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid #E6D9BC', boxShadow: '0 2px 16px rgba(90,70,30,0.05)' }}>
              <div className="flex items-start gap-4 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#B8872A"/></svg>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#241E1A', marginBottom: '0.3rem' }}>{t.contact.addressTitle}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.95rem', color: '#4A4038', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{t.contact.address}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid #E6D9BC', boxShadow: '0 2px 16px rgba(90,70,30,0.05)' }}>
              <div className="flex items-start gap-4 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.92 7.02C17.45 6.18 16.84 5.46 16.07 4.91C15.29 4.36 14.41 4 13.5 4C11.57 4 10 5.57 10 7.5C10 8.5 10.35 9.41 10.93 10.12C10.31 10.59 9.77 11.13 9.31 11.74C8.35 13.02 7.8 14.56 7.8 16.2C7.8 19.63 10.57 22.4 14 22.4C17.43 22.4 20.2 19.63 20.2 16.2C20.2 14.56 19.65 13.02 18.69 11.74C18.23 11.13 17.69 10.59 17.07 10.12C17.65 9.41 18 8.5 18 7.5C18 6.5 17.65 5.59 17.07 4.88L17.92 7.02Z" fill="#B8872A"/></svg>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#241E1A', marginBottom: '0.3rem' }}>{t.contact.phoneTitle}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.95rem', color: '#4A4038', lineHeight: 1.6 }}><a href="tel:+33142000000" style={{ color: '#B8872A', textDecoration: 'none' }}>+33 1 42 00 00 00</a></p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid #E6D9BC', boxShadow: '0 2px 16px rgba(90,70,30,0.05)' }}>
              <div className="flex items-start gap-4 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#B8872A"/></svg>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#241E1A', marginBottom: '0.3rem' }}>{t.contact.emailTitle}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.95rem', color: '#4A4038', lineHeight: 1.6 }}><a href="mailto:contact@lapivoine.fr" style={{ color: '#B8872A', textDecoration: 'none' }}>contact@lapivoine.fr</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid #E6D9BC', minHeight: 400 }}>
            <MapView initialCenter={{ lat: 48.8566, lng: 2.3522 }} initialZoom={15} onMapReady={handleMapReady} className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  const { t } = useLang();
  return (
    <footer style={{ background: '#241E1A' }} className="relative overflow-hidden">
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
              <span
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 32, height: 32, borderRadius: '0.35rem', border: '1.5px solid #F4E3B8', fontFamily: "'Cormorant Garamond', serif", fontSize: '0.9rem', fontWeight: 600, color: '#F4E3B8' }}
              >
                CP
              </span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: '#F4E3B8' }}>Café Pivoine</span>
            </div>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              {t.footer.tagline}
            </p>
          </div>
          {/* Horaires */}
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#F4E3B8', marginBottom: '1rem' }}>{t.footer.hoursTitle}</h4>
            <div className="space-y-2">
              {t.footer.hours.map(item => (
                <div key={item.j} className="flex justify-between gap-4">
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>{item.j}</span>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>{item.h}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 600, color: '#F4E3B8', marginBottom: '1rem' }}>{t.footer.contactTitle}</h4>
            <div className="space-y-2">
              {t.footer.contactItems.map(item => (
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
            {t.footer.copyright}
          </p>
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1rem', color: '#B8872A' }}>
            {t.footer.tagline2}
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Page principale ────────────────────────────────────────────────────────
export default function Home() {
  return (
    <LangProvider defaultLang="fr">
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
    </LangProvider>
  );
}
