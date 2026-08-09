export function EventBanner() {
  return (
    <section
      className="py-12 px-6 md:px-10"
      style={{ background: "#FDF7F8" }}
    >
      <div
        className="max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-sm"
        style={{
          border: "1px solid #F0D0D8",
          background: "#fff",
        }}
      >
        <div className="grid md:grid-cols-2 items-stretch">
          {/* Photo */}
          <div className="relative min-h-[280px] md:min-h-[340px] overflow-hidden">
            <img
              src="/images/drag-brunch.png"
              alt="Drag Brunch à La Pivoine"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Texte */}
          <div className="flex flex-col justify-center p-8 md:p-12 text-center md:text-left">
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "1.25rem",
                color: "#C8647A",
                marginBottom: "0.4rem",
              }}
            >
              ✦ Prochain événement ✦
            </p>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#2a1a1e",
                lineHeight: 1.05,
                marginBottom: "0.8rem",
              }}
            >
              Drag Brunch
            </h2>

            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.85rem",
                color: "#8a5a62",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              30 août 2026
            </p>

            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "1rem",
                color: "#5a3a42",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Une parenthèse gourmande et festive autour d'un brunch pas comme
              les autres.
              <br />
              <strong>Formule 40 €</strong> · Open Champagne{" "}
              <strong>+20 €</strong>
            </p>

            <div>
              <a
                href="#reservation"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full transition-transform hover:scale-105"
                style={{
                  background: "#C8647A",
                  color: "#fff",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Découvrir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}