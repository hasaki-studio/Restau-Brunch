export type Lang = 'fr' | 'en';
export type SeasonKey = 'printemps' | 'ete' | 'automne' | 'hiver';

export interface Cocktail {
  name: string;
  desc: string;
  price: string;
  emoji: string;
}

export interface SeasonContent {
  label: string;
  icon: string;
  color: string;
  starters: string[];
  mains: string[];
  desserts: string[];
}

export interface Content {
  nav: {
    happyHour: string;
    brunch: string;
    seasonalMenu: string;
    reserve: string;
  };
  hero: {
    welcome: string;
    subtitle: string;
    ctaHappyHour: string;
    ctaBrunch: string;
    ctaMenu: string;
    ctaReserve: string;
    scroll: string;
  };
  about: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    paragraph1: string;
    paragraph2: string;
    badges: { n: string; t: string }[];
    sinceLabel: string;
  };
  happyHour: {
    kicker: string;
    title: string;
    intro: string;
    cocktails: Cocktail[];
  };
  brunch: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    paragraph: string;
    items: string[];
    price: string;
    perPerson: string;
    cta: string;
    badgeTitle: string;
    badgeSubtitle: string;
  };
  seasonalMenu: {
    kicker: string;
    title: string;
    intro: string;
    comingSoon: string;
    categories: { starters: string; mains: string; desserts: string };
    seasons: Record<SeasonKey, SeasonContent>;
    pricing: { label: string; price: string }[];
  };
  reservation: {
    kicker: string;
    title: string;
    intro: string;
    thanksTitle: string;
    thanksText: string;
    labels: { name: string; email: string; date: string; time: string; guests: string; message: string };
    placeholders: { name: string; email: string; message: string };
    chooseTime: string;
    guestLabel: (n: number) => string;
    submit: string;
  };
  contact: {
    kicker: string;
    title: string;
    addressTitle: string;
    address: string;
    phoneTitle: string;
    emailTitle: string;
  };
  footer: {
    tagline: string;
    hoursTitle: string;
    hours: { j: string; h: string }[];
    contactTitle: string;
    contactItems: { icon: string; text: string }[];
    copyright: string;
    tagline2: string;
  };
}

export const translations: Record<Lang, Content> = {
  fr: {
    nav: {
      happyHour: 'Happy Hour',
      brunch: 'Brunch',
      seasonalMenu: 'Menu Saisonnier',
      reserve: 'Réserver',
    },
    hero: {
      welcome: 'Bienvenue chez',
      subtitle: 'Là où les saisons ont un goût',
      ctaHappyHour: 'Happy Hour',
      ctaBrunch: 'Brunch',
      ctaMenu: 'Menu Saisonnier',
      ctaReserve: 'Réserver une table',
      scroll: 'Défiler',
    },
    about: {
      kicker: 'Notre histoire',
      titleLine1: 'Un écrin floral',
      titleLine2: 'au cœur de la ville',
      paragraph1: "Café Pivoine est un lieu où l'élégance florale rencontre la gastronomie vivante. Dans un décor aux reflets dorés et aux lumières tamisées, chaque repas devient une parenthèse hors du temps.",
      paragraph2: "Notre cuisine évolue au rythme des saisons, sublimant les produits frais du marché avec une touche créative et généreuse. Du brunch dominical au dîner intime, nous cultivons l'art de recevoir.",
      badges: [
        { n: 'Happy Hour', t: 'Chaque soir' },
        { n: 'Brunch', t: 'Sam. & Dim.' },
        { n: 'Menu Saison', t: 'Renouvelé' },
      ],
      sinceLabel: 'Depuis',
    },
    happyHour: {
      kicker: 'Chaque soir de 17h à 20h',
      title: 'Happy Hour',
      intro: "Retrouvez-nous en fin de journée pour des cocktails signature et des planches à partager, dans l'atmosphère chaleureuse de Café Pivoine.",
      cocktails: [
        { name: 'Pivoine Royale', desc: 'Champagne, liqueur de rose, framboise fraîche', price: '9€', emoji: '🥂' },
        { name: 'Sunset Pétale', desc: 'Gin, sirop de pivoine, citron, eau pétillante', price: '8€', emoji: '🌸' },
        { name: 'Or & Velours', desc: 'Whisky, miel, gingembre, citron vert', price: '9€', emoji: '✨' },
        { name: 'Mocktail Floral', desc: 'Hibiscus, grenadine, citron, soda', price: '6€', emoji: '🌺' },
      ],
    },
    brunch: {
      kicker: 'Samedi & Dimanche · 10h–15h',
      titleLine1: 'Le Brunch',
      titleLine2: 'de Café Pivoine',
      paragraph: "Un brunch généreux et raffiné, pensé pour les matins qui s'étirent. Œufs bénédicte, tartines créatives, viennoiseries maison et jus pressés à la minute — tout ce qu'il faut pour bien commencer le week-end.",
      items: [
        'Tartine avocat, saumon gravlax & œuf poché',
        'Granola maison, yaourt grec, fruits de saison',
        "Pancakes à la fleur d'oranger, sirop d'érable",
        'Planche charcuterie & fromages affinés',
        'Jus de fruits frais & smoothies du moment',
      ],
      price: '29€',
      perPerson: 'par personne',
      cta: 'Réserver le brunch',
      badgeTitle: 'Fait maison',
      badgeSubtitle: 'chaque matin',
    },
    seasonalMenu: {
      kicker: 'Renouvelé chaque saison',
      title: 'Menu Saisonnier',
      intro: 'Notre cuisine suit le rythme de la nature. Chaque saison apporte ses saveurs, ses textures et ses émotions.',
      comingSoon: 'Bientôt disponible',
      categories: { starters: 'Entrées', mains: 'Plats', desserts: 'Desserts' },
      seasons: {
        printemps: {
          label: 'Printemps', icon: '🌸', color: '#B8872A',
          starters: ["Velouté d'asperges vertes, huile de truffe", 'Tartare de daurade, fleurs comestibles', 'Burrata, petits pois, menthe fraîche'],
          mains: ["Agneau de lait, jus d'herbes, légumes primeurs", 'Risotto aux morilles, parmesan 24 mois', 'Saint-Jacques poêlées, purée de topinambour'],
          desserts: ['Pavlova aux fraises Gariguette', 'Tarte fine rhubarbe, crème légère', 'Panna cotta fleur de sureau'],
        },
        ete: {
          label: 'Été', icon: '☀️', color: '#8C6A35',
          starters: ['Gratin de quinoa et petits légumes', 'Ravioles aux champignons et à la crème de truffe, parmesan', 'Salade de melon, jambon de Bayonne, roquette'],
          mains: ['Filet de bar, ratatouille confite, pistou', 'Poulet fermier rôti, légumes du soleil', 'Penne aux courgettes, ricotta, citron'],
          desserts: ['Fromage blanc, fruits de saison & crumble noisettes', 'Crème brûlée à la vanille', 'Clafoutis aux cerises noires'],
        },
        automne: {
          label: 'Automne', icon: '🍂', color: '#B8734A',
          starters: ['Gratin de quinoa et petits légumes', 'Ravioles aux champignons et à la crème de truffe, parmesan', 'Salade de betteraves, chèvre, noix'],
          mains: ['Pavé de lieu, crème de paprika', 'Tartare de bœuf préparé, frites maison', 'Mac and cheese (and beef)'],
          desserts: ['Tarte aux poires, amandes effilées', 'Moelleux au chocolat, caramel beurre salé', 'Crumble pommes-cannelle'],
        },
        hiver: {
          label: 'Hiver', icon: '❄️', color: '#6A8FAF',
          starters: ["Soupe à l'oignon gratinée", 'Huîtres fines de Bretagne, mignonette', 'Terrine de gibier, cornichons maison'],
          mains: ['Bœuf bourguignon, purée Robuchon', 'Homard breton, bisque crémeuse', 'Ravioles de Romans, beurre de sauge'],
          desserts: ['Bûche aux marrons glacés', 'Île flottante, pralin maison', 'Fondant au chocolat noir 72%'],
        },
      },
      pricing: [
        { label: 'Entrée + Plat', price: '32€' },
        { label: 'Plat + Dessert', price: '32€' },
        { label: 'Menu complet', price: '42€' },
      ],
    },
    reservation: {
      kicker: 'Nous vous attendons',
      title: 'Réserver une table',
      intro: "Pour toute demande spéciale ou événement privé, n'hésitez pas à nous contacter directement.",
      thanksTitle: 'Merci pour votre réservation !',
      thanksText: 'Nous vous confirmerons votre table par e-mail dans les plus brefs délais.',
      labels: { name: 'Nom complet', email: 'E-mail', date: 'Date', time: 'Heure', guests: 'Nombre de couverts', message: 'Message (optionnel)' },
      placeholders: { name: 'Marie Dupont', email: 'marie@exemple.fr', message: 'Allergie, occasion spéciale...' },
      chooseTime: 'Choisir un horaire',
      guestLabel: (n: number) => `${n} ${n === 1 ? 'personne' : 'personnes'}`,
      submit: 'Confirmer la réservation',
    },
    contact: {
      kicker: 'Nous trouver',
      title: 'Localisation & Contact',
      addressTitle: 'Adresse',
      address: '12 rue des Fleurs\n75006 Paris, France',
      phoneTitle: 'Téléphone',
      emailTitle: 'Email',
    },
    footer: {
      tagline: 'Un restaurant où chaque repas est une célébration des saisons et du goût.',
      hoursTitle: 'Horaires',
      hours: [
        { j: 'Lun – Ven', h: '12h–14h30 · 19h–23h' },
        { j: 'Sam – Dim', h: 'Brunch 10h–15h · Dîner 19h–23h' },
        { j: 'Happy Hour', h: 'Tous les soirs 17h–20h' },
      ],
      contactTitle: 'Contact',
      contactItems: [
        { icon: '📍', text: '12 rue des Fleurs, 75006 Paris' },
        { icon: '📞', text: '+33 1 42 00 00 00' },
        { icon: '✉️', text: 'contact@lapivoine.fr' },
      ],
      copyright: '© 2026 Restaurant Café Pivoine — Tous droits réservés',
      tagline2: 'Là où les saisons ont un goût ✦',
    },
  },
  en: {
    nav: {
      happyHour: 'Happy Hour',
      brunch: 'Brunch',
      seasonalMenu: 'Seasonal Menu',
      reserve: 'Book a Table',
    },
    hero: {
      welcome: 'Welcome to',
      subtitle: 'Where the seasons have a taste',
      ctaHappyHour: 'Happy Hour',
      ctaBrunch: 'Brunch',
      ctaMenu: 'Seasonal Menu',
      ctaReserve: 'Book a table',
      scroll: 'Scroll',
    },
    about: {
      kicker: 'Our story',
      titleLine1: 'A floral haven',
      titleLine2: 'in the heart of the city',
      paragraph1: 'Café Pivoine is a place where floral elegance meets vibrant gastronomy. In a setting of golden light and soft glow, every meal becomes a moment out of time.',
      paragraph2: 'Our kitchen follows the rhythm of the seasons, showcasing fresh market produce with a creative, generous touch. From Sunday brunch to an intimate dinner, we cultivate the art of hosting.',
      badges: [
        { n: 'Happy Hour', t: 'Every evening' },
        { n: 'Brunch', t: 'Sat. & Sun.' },
        { n: 'Seasonal Menu', t: 'Renewed' },
      ],
      sinceLabel: 'Since',
    },
    happyHour: {
      kicker: 'Every evening from 5 to 8 PM',
      title: 'Happy Hour',
      intro: 'Join us at the end of the day for signature cocktails and sharing boards, in the warm atmosphere of Café Pivoine.',
      cocktails: [
        { name: 'Pivoine Royale', desc: 'Champagne, rose liqueur, fresh raspberry', price: '9€', emoji: '🥂' },
        { name: 'Sunset Petal', desc: 'Gin, peony syrup, lemon, sparkling water', price: '8€', emoji: '🌸' },
        { name: 'Gold & Velvet', desc: 'Whisky, honey, ginger, lime', price: '9€', emoji: '✨' },
        { name: 'Floral Mocktail', desc: 'Hibiscus, grenadine, lemon, soda', price: '6€', emoji: '🌺' },
      ],
    },
    brunch: {
      kicker: 'Saturday & Sunday · 10 AM–3 PM',
      titleLine1: 'Brunch',
      titleLine2: 'at Café Pivoine',
      paragraph: 'A generous, refined brunch, made for mornings that stretch on. Eggs Benedict, creative tartines, homemade pastries and freshly pressed juices — everything you need to start the weekend right.',
      items: [
        'Avocado tartine, gravlax salmon & poached egg',
        'Homemade granola, Greek yogurt, seasonal fruit',
        'Orange blossom pancakes, maple syrup',
        'Charcuterie & aged cheese board',
        'Fresh fruit juices & seasonal smoothies',
      ],
      price: '29€',
      perPerson: 'per person',
      cta: 'Book brunch',
      badgeTitle: 'Homemade',
      badgeSubtitle: 'every morning',
    },
    seasonalMenu: {
      kicker: 'Renewed every season',
      title: 'Seasonal Menu',
      intro: 'Our kitchen follows the rhythm of nature. Each season brings its own flavours, textures and emotions.',
      comingSoon: 'Coming soon',
      categories: { starters: 'Starters', mains: 'Mains', desserts: 'Desserts' },
      seasons: {
        printemps: {
          label: 'Spring', icon: '🌸', color: '#B8872A',
          starters: ['Green asparagus velouté, truffle oil', 'Sea bream tartare, edible flowers', 'Burrata, peas, fresh mint'],
          mains: ['Milk-fed lamb, herb jus, spring vegetables', 'Morel mushroom risotto, 24-month parmesan', 'Pan-seared scallops, Jerusalem artichoke purée'],
          desserts: ['Gariguette strawberry pavlova', 'Rhubarb tart, light cream', 'Elderflower panna cotta'],
        },
        ete: {
          label: 'Summer', icon: '☀️', color: '#8C6A35',
          starters: ['Quinoa gratin with baby vegetables', 'Mushroom ravioli, truffle cream, parmesan', 'Melon salad, Bayonne ham, arugula'],
          mains: ['Sea bass fillet, slow-cooked ratatouille, pistou', 'Roasted farm chicken, sun-kissed vegetables', 'Zucchini penne, ricotta, lemon'],
          desserts: ['Fromage blanc, seasonal fruit & hazelnut crumble', 'Vanilla crème brûlée', 'Black cherry clafoutis'],
        },
        automne: {
          label: 'Autumn', icon: '🍂', color: '#B8734A',
          starters: ['Quinoa gratin with baby vegetables', 'Mushroom ravioli, truffle cream, parmesan', 'Beetroot salad, goat cheese, walnuts'],
          mains: ['Pollock fillet, paprika cream', 'Beef tartare, homemade fries', 'Mac and cheese (and beef)'],
          desserts: ['Pear tart, flaked almonds', 'Molten chocolate cake, salted butter caramel', 'Apple-cinnamon crumble'],
        },
        hiver: {
          label: 'Winter', icon: '❄️', color: '#6A8FAF',
          starters: ['French onion soup gratin', 'Fine Brittany oysters, mignonette', 'Game terrine, homemade pickles'],
          mains: ['Beef bourguignon, Robuchon mash', 'Breton lobster, creamy bisque', 'Romans ravioli, sage butter'],
          desserts: ['Chestnut yule log', 'Floating island, homemade praline', '72% dark chocolate fondant'],
        },
      },
      pricing: [
        { label: 'Starter + Main', price: '32€' },
        { label: 'Main + Dessert', price: '32€' },
        { label: 'Full menu', price: '42€' },
      ],
    },
    reservation: {
      kicker: 'We look forward to it',
      title: 'Book a table',
      intro: 'For any special request or private event, feel free to contact us directly.',
      thanksTitle: 'Thank you for your reservation!',
      thanksText: "We'll confirm your table by email as soon as possible.",
      labels: { name: 'Full name', email: 'Email', date: 'Date', time: 'Time', guests: 'Number of guests', message: 'Message (optional)' },
      placeholders: { name: 'Marie Dupont', email: 'marie@example.com', message: 'Allergies, special occasion...' },
      chooseTime: 'Choose a time',
      guestLabel: (n: number) => `${n} ${n === 1 ? 'guest' : 'guests'}`,
      submit: 'Confirm reservation',
    },
    contact: {
      kicker: 'Find us',
      title: 'Location & Contact',
      addressTitle: 'Address',
      address: '12 rue des Fleurs\n75006 Paris, France',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
    },
    footer: {
      tagline: 'A restaurant where every meal is a celebration of the seasons and of taste.',
      hoursTitle: 'Hours',
      hours: [
        { j: 'Mon – Fri', h: '12–2:30 PM · 7–11 PM' },
        { j: 'Sat – Sun', h: 'Brunch 10 AM–3 PM · Dinner 7–11 PM' },
        { j: 'Happy Hour', h: 'Every evening 5–8 PM' },
      ],
      contactTitle: 'Contact',
      contactItems: [
        { icon: '📍', text: '12 rue des Fleurs, 75006 Paris' },
        { icon: '📞', text: '+33 1 42 00 00 00' },
        { icon: '✉️', text: 'contact@lapivoine.fr' },
      ],
      copyright: '© 2026 Restaurant Café Pivoine — All rights reserved',
      tagline2: 'Where the seasons have a taste ✦',
    },
  },
};
