# Restaurant La Pivoine — Design Brief

## Trois approches envisagées

**1. Brasserie Parisienne Intemporelle** (probabilité : 0.07)
Blanc crème, or patiné, typographie serif classique. Élégance bourgeoise française.

**2. Jardin Botanique Contemporain** (probabilité : 0.05)
Fond blanc pur, illustrations botaniques en ligne fine, vert sauge et rose pivoine. Moderne et aéré.

**3. Salon de Thé Belle Époque** (probabilité : 0.08)
Ivoire chaud, rose poudré, dorures, textures papier peint floral. Romantique et sensoriel.

---

## Approche choisie : **Jardin Botanique Contemporain**

### Design Movement
Art Nouveau revisité — lignes organiques, motifs floraux épurés, équilibre entre nature et modernité.

### Core Principles
1. **Blanc comme toile** — fond blanc pur, l'espace respire, les pivoines apportent la couleur.
2. **Fluidité organique** — courbes douces, pas d'angles droits agressifs, tout coule comme des pétales.
3. **Hiérarchie par la couleur** — rose pivoine (#C8647A) pour les accents, or doux (#C9A96E) pour les détails.
4. **Typographie contrastée** — serif élégant pour les titres, sans-serif délicat pour le corps.

### Color Philosophy
- **Fond** : Blanc pur `oklch(1 0 0)` — pureté, légèreté, élégance.
- **Rose pivoine** : `oklch(0.62 0.12 10)` — couleur signature, chaude et romantique.
- **Or doux** : `oklch(0.72 0.08 75)` — raffinement, chaleur, luxe discret.
- **Vert sauge** : `oklch(0.65 0.06 145)` — nature, fraîcheur, équilibre.
- **Gris charbon** : `oklch(0.25 0.01 60)` — textes, sobriété.

### Layout Paradigm
Sections en pleine largeur avec des transitions ondulées (SVG waves). Navigation flottante transparente qui devient opaque au scroll. Asymétrie subtile : texte à gauche, image à droite (et vice-versa en alternance).

### Signature Elements
1. **Motif pivoine** — illustrations botaniques en filigrane sur les sections blanches.
2. **Vagues roses** — transitions fluides entre sections via SVG/GradientWaves.
3. **Cadres ovales** — images encadrées dans des formes organiques ovales.

### Interaction Philosophy
Hover doux avec légère translation verticale. Animations d'entrée au scroll (fade + slide up). Boutons avec bordure rose qui se remplit au hover.

### Animation
- Entrée des sections : `fade-in + translateY(20px → 0)` à 600ms ease-out.
- Navigation : transition opacité/fond au scroll.
- Cartes : `scale(1.02)` au hover avec ombre douce.
- Pivoines décoratives : légère rotation oscillante (keyframe).

### Typography System
- **Titres** : Cormorant Garamond (serif élégant, italic pour les sous-titres)
- **Corps** : Lato (sans-serif lisible, léger)
- **Accents** : Dancing Script (script pour les citations et taglines)
- Hiérarchie : H1 64px bold, H2 42px, H3 28px, body 16px/1.7

### Brand Essence
*La Pivoine — un écrin floral où chaque repas devient un souvenir.* Romantique, raffiné, vivant.

### Brand Voice
Chaleureux mais élégant. Poétique sans être précieux.
- Exemple titre : *"Là où les saisons ont un goût"*
- Exemple CTA : *"Réserver une table"* (jamais "Cliquez ici")

### Wordmark & Logo
Monogramme "LP" stylisé avec une pivoine intégrée dans le "P", en rose sur fond blanc.

### Signature Brand Color
**Rose Pivoine** `#C8647A` — couleur immédiatement reconnaissable, présente dans tous les accents.

## Style Decisions
- Fond blanc pur sur toutes les sections principales.
- Photo du restaurant en pleine largeur pour le hero.
- Composant GradientWaves en rose pivoine pour les transitions.
- Sections : Hero → À propos → Happy Hour → Brunch → Menu Saisonnier → Réservation → Footer.
