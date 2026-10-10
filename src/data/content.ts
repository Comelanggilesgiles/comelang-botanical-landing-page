/* ------------------------------------------------------------------
   content.ts — single source of truth for all COMELANG copy & imagery.
   Swap the `photo` ids / text here to re-skin the whole landing page.
   Photography: Pexels (royalty free). Replace with brand photography.
------------------------------------------------------------------- */

export type Photo = { id: number; ext?: "jpeg" | "png"; alt: string };

export const BRAND = {
  name: "Comelang",
  wordmark: "COMELANG.",
  tagline: "Botanical Studio & Nursery",
  currency: "₱",
};

export const NAV = [
  { label: "Home", id: "home" },
  { label: "Our Gardens", id: "gardens" },
  { label: "Plants", id: "plants" },
  { label: "Our Story", id: "story" },
  { label: "Contact", id: "visit" },
];

export const HERO = {
  eyebrow: "Bring Nature Closer",
  headline: ["A Little More Green.", "A Lot More *Life*."],
  body: "Discover thoughtfully curated plants, beautiful garden spaces, and simple ways to bring nature into your everyday life.",
  photo: {
    id: 36742224,
    alt: "A stone pathway winding through a lush, sunlit garden toward a quiet house.",
  } as Photo,
  inset: {
    id: 28953553,
    alt: "Sunlight filtering through dense green leaves.",
  } as Photo,
};

export const MARQUEE = [
  "Thoughtfully grown",
  "Soil to doorstep",
  "Slow gardening",
  "Living interiors",
  "Rooted in care",
  "Season by season",
];

export const INTRO = {
  heading: "Nature Has a Way of Making *Everything* Better.",
  body: "From a single plant on your windowsill to a garden filled with life, we believe every space deserves a little more nature.",
  paragraph:
    "Comelang began in a small propagation greenhouse with a simple idea: plants should arrive healthy, suited to the room they will live in, and paired with advice you can actually follow. Everything we grow is hardened off slowly, hand-checked, and matched to the light of your space.",
  highlights: [
    {
      title: "Thoughtfully Grown",
      text: "Propagated in-house and acclimatised before they ever leave the nursery.",
    },
    {
      title: "Naturally Beautiful",
      text: "Form, texture and season chosen with an editorial eye for balance.",
    },
    {
      title: "Made for Your Space",
      text: "Matched to your light, humidity and the time you actually have.",
    },
  ],
  stats: [
    { value: 240, suffix: "+", label: "Gardens planted" },
    { value: 1800, suffix: "", label: "Plants rehomed" },
    { value: 12, suffix: " yrs", label: "Growing together" },
  ],
  photo: {
    id: 31734741,
    alt: "A garden path of stepping stones leading beneath leafy trees to a hammock.",
  } as Photo,
  photoSmall: {
    id: 27176769,
    alt: "Gloved hands settling a young seedling into dark garden soil.",
  } as Photo,
};

export type Plant = {
  name: string;
  latin: string;
  blurb: string;
  light: string;
  water: string;
  price: number;
  tag: string;
  photo: Photo;
};

export const PLANTS: Plant[] = [
  {
    name: "Monstera Deliciosa",
    latin: "Swiss cheese plant",
    blurb: "Sculptural split leaves that turn a quiet corner into a canopy.",
    light: "Bright, indirect",
    water: "Every 7–10 days",
    price: 1450,
    tag: "Statement",
    photo: {
      id: 9088036,
      alt: "A healthy Monstera deliciosa in a pot with sunlight casting leaf shadows.",
    },
  },
  {
    name: "Fiddle Leaf Fig",
    latin: "Ficus lyrata",
    blurb: "A slow, elegant indoor tree with broad violin-shaped leaves.",
    light: "Bright, filtered",
    water: "Every 7 days",
    price: 2380,
    tag: "Floor plant",
    photo: {
      id: 12476529,
      alt: "A fiddle leaf fig growing in a terracotta pot against a warm wall.",
    },
  },
  {
    name: "Snake Plant",
    latin: "Dracaena trifasciata",
    blurb: "Architectural, forgiving, and almost impossible to upset.",
    light: "Low to bright",
    water: "Every 2–3 weeks",
    price: 780,
    tag: "Beginner",
    photo: {
      id: 10467813,
      alt: "Upright snake plant leaves beside small cacti on a pale cabinet.",
    },
  },
  {
    name: "Olive Tree",
    latin: "Olea europaea",
    blurb: "Silver-green leaves and a quiet Mediterranean kind of calm.",
    light: "Full sun",
    water: "Every 10–14 days",
    price: 3950,
    tag: "Outdoor",
    photo: {
      id: 32369938,
      ext: "png",
      alt: "A young potted olive tree in sunlight against a warm terracotta wall.",
    },
  },
  {
    name: "Peace Lily",
    latin: "Spathiphyllum",
    blurb: "Soft white blooms above deep green, air-cleaning foliage.",
    light: "Low to medium",
    water: "Every 5–7 days",
    price: 920,
    tag: "Air purifying",
    photo: {
      id: 32425124,
      alt: "White peace lily flowers opening above glossy green leaves.",
    },
  },
  {
    name: "Bird of Paradise",
    latin: "Strelitzia nicolai",
    blurb: "Bold paddle leaves that bring instant height and drama.",
    light: "Bright, direct",
    water: "Every 7–10 days",
    price: 2750,
    tag: "Tropical",
    photo: {
      id: 9160820,
      alt: "Large Strelitzia leaves fanning out against a rustic wall.",
    },
  },
];

export const SERVICES = [
  {
    title: "Residential Gardens",
    text: "Create peaceful outdoor spaces that feel like an extension of your home.",
    detail:
      "Planting plans, soft landscaping and a maintenance rhythm your weekends can keep up with.",
    meta: ["Site survey", "Planting plan", "Seasonal care"],
    photo: {
      id: 19075386,
      alt: "A garden patio under a timber pergola surrounded by flowering borders at dusk.",
    } as Photo,
  },
  {
    title: "Landscape Design",
    text: "Transform ordinary outdoor areas into beautifully planned green environments.",
    detail:
      "Levels, pathways, lighting and structure — drawn in detail before a single stone is laid.",
    meta: ["Concept design", "Materials", "Build support"],
    photo: {
      id: 38592395,
      alt: "Contemporary architecture softened by sculpted green landscaping.",
    } as Photo,
  },
  {
    title: "Indoor Plant Styling",
    text: "Bring warmth, texture, and natural beauty into your interior spaces.",
    detail:
      "Light-mapped plant selection, vessels that match your interior, and a care calendar.",
    meta: ["Light mapping", "Vessel curation", "Care calendar"],
    photo: {
      id: 9565787,
      alt: "A bright Scandinavian living room styled with large indoor plants.",
    } as Photo,
  },
];

export type GardenStyle = {
  key: string;
  name: string;
  summary: string;
  detail: string;
  notes: string[];
  photo: Photo;
};

export const GARDEN_STYLES: GardenStyle[] = [
  {
    key: "japanese",
    name: "Japanese-Inspired",
    summary: "Moss, stone and restraint",
    detail:
      "Composed with negative space in mind: moss carpets, weathered stone, clipped forms and a single point of stillness. Designed to look better the slower you walk through it.",
    notes: ["Moss & fern understory", "Stone lanterns", "Pruned acer"],
    photo: {
      id: 20708358,
      alt: "A moss-covered stone lantern in a tranquil Japanese garden.",
    },
  },
  {
    key: "tropical",
    name: "Tropical",
    summary: "Layered canopy and humidity",
    detail:
      "Big leaves, deep shade and a path that disappears into planting. Built in layers — canopy, mid-storey and ground cover — so the garden feels full from day one.",
    notes: ["Heliconia & palms", "Water feature", "Shade layering"],
    photo: {
      id: 34941670,
      alt: "A pathway running between vibrant tropical foliage in a garden.",
    },
  },
  {
    key: "minimalist",
    name: "Minimalist",
    summary: "Line, light and shadow",
    detail:
      "A short plant list, repeated with discipline. Concrete, gravel and one generous tree doing most of the talking, with shadow treated as a material.",
    notes: ["Monochrome planting", "Concrete seating", "Single specimen tree"],
    photo: {
      id: 32984282,
      alt: "A minimalist courtyard with concrete benches and sculptural trees.",
    },
  },
  {
    key: "cottage",
    name: "Cottage",
    summary: "Generous, romantic, seasonal",
    detail:
      "Roses over the gate and borders that spill onto the path. Planned to peak three times a year so there is always something coming into flower.",
    notes: ["Climbing roses", "Perennial borders", "Gravel paths"],
    photo: {
      id: 38119091,
      alt: "A cottage garden gate framed by climbing roses in full bloom.",
    },
  },
  {
    key: "mediterranean",
    name: "Mediterranean",
    summary: "Terracotta, gravel, silver leaf",
    detail:
      "Drought-tolerant planting that thrives on neglect — olive, rosemary, lavender and santolina against warm stone and clay.",
    notes: ["Low water use", "Terracotta vessels", "Herb planting"],
    photo: {
      id: 21299093,
      alt: "A rustic garden corner with potted plants against an old stone wall.",
    },
  },
  {
    key: "outdoor-living",
    name: "Modern Outdoor Living",
    summary: "Rooms without walls",
    detail:
      "Dining, lounging and cooking arranged as outdoor rooms, wrapped in planting so the hard landscaping never feels hard.",
    notes: ["Pergola structure", "Integrated lighting", "Soft screening"],
    photo: {
      id: 7587884,
      alt: "A contemporary terrace with a pergola and outdoor dining set.",
    },
  },
];

export const BENEFITS = [
  {
    icon: "leaf",
    title: "Quality Plants",
    text: "Carefully selected plants suited to their environment.",
  },
  {
    icon: "sun",
    title: "Thoughtful Design",
    text: "Spaces designed around your lifestyle and needs.",
  },
  {
    icon: "drop",
    title: "Sustainable Practices",
    text: "A mindful approach to growing and gardening.",
  },
  {
    icon: "sprout",
    title: "Personal Guidance",
    text: "Practical support for creating and maintaining your garden.",
  },
] as const;

export const TRANSFORMATION = {
  heading: "From Empty Space to *Living Sanctuary*.",
  project: "The Katipunan Courtyard",
  style: "Tropical / Modern Outdoor Living",
  text: "A narrow, unused side yard rebuilt as a shaded walk-through garden: new levels, a gravel-and-stone path, layered planting for privacy, and low lighting for the evenings.",
  facts: [
    { k: "Area", v: "64 sqm" },
    { k: "Build", v: "9 weeks" },
    { k: "Species", v: "28 planted" },
  ],
  before: {
    id: 11573714,
    alt: "Placeholder before image: a plain grass side yard enclosed by timber fencing.",
  } as Photo,
  after: {
    id: 16311149,
    alt: "Placeholder after image: a stone path running through dense tropical planting.",
  } as Photo,
};

export const GUIDES = [
  {
    kicker: "Season 01",
    title: "Spring Planting",
    text: "What to sow first, how to prepare tired soil, and the three-week head start most gardens need.",
    read: "6 min read",
    photo: {
      id: 7728874,
      alt: "A gardener setting young seedlings into prepared garden beds.",
    } as Photo,
  },
  {
    kicker: "Season 02",
    title: "Summer Garden Care",
    text: "Mulch depth, shade cloth and the morning routine that keeps borders from scorching.",
    read: "5 min read",
    photo: {
      id: 4622067,
      alt: "A metal watering can resting beside green shrubs in summer light.",
    } as Photo,
  },
  {
    kicker: "Indoors",
    title: "Indoor Plant Care",
    text: "Reading light like a gardener, choosing the right pot, and spotting trouble early.",
    read: "7 min read",
    photo: {
      id: 30386993,
      alt: "A sunlit interior corner styled with trailing and potted plants.",
    } as Photo,
  },
  {
    kicker: "Essentials",
    title: "Watering Wisely",
    text: "Why schedules fail, how to test moisture properly, and watering deeply but less often.",
    read: "4 min read",
    photo: {
      id: 4750274,
      alt: "Water pouring from a can onto fresh green garden plants.",
    } as Photo,
  },
];

/** Sample copy for development — replace with verified customer reviews. */
export const TESTIMONIALS = [
  {
    quote:
      "They mapped the light in every room before suggesting a single plant. A year on, nothing has died and the apartment finally feels finished.",
    name: "Sample review",
    role: "Apartment styling · Placeholder",
    photo: {
      id: 1444424,
      alt: "A warm living room with plants and natural light.",
    } as Photo,
  },
  {
    quote:
      "Our courtyard went from a storage space to the part of the house we use most. The planting plan still makes sense three seasons later.",
    name: "Sample review",
    role: "Courtyard garden · Placeholder",
    photo: {
      id: 29365662,
      alt: "A stone path through a planted garden border.",
    } as Photo,
  },
  {
    quote:
      "The care calendar is the part I did not know I needed. Short, seasonal, and written for someone who is not a gardener.",
    name: "Sample review",
    role: "Plant subscription · Placeholder",
    photo: {
      id: 12897981,
      alt: "A small potted olive tree on a wooden surface.",
    } as Photo,
  },
];

/* ------------------------------------------------------------------
   Studio location.
   `LOCATION` is the single place to change the pin: update lat/lng
   (and the address lines) and the embedded map, the "Get Directions"
   button and the "View larger map" link all follow automatically.
------------------------------------------------------------------- */
export const LOCATION = {
  /** Shown on the map pin */
  placeLabel: "Comelang Garden Studio",
  lat: 11.21976,
  lng: 125.002296,
  zoom: 16,
  /** Human-readable, used for the a11y map title and search fallback */
  searchQuery: "Kadungganan, Sagkahan, Tacloban City, Leyte 6500, Philippines",
};

const coords = `${LOCATION.lat},${LOCATION.lng}`;

/** Keyless Google Maps embed — drops a named pin on the coordinates. */
export const MAP_EMBED_SRC =
  `https://www.google.com/maps?q=${encodeURIComponent(
    `${coords} (${LOCATION.placeLabel})`,
  )}&z=${LOCATION.zoom}&hl=en&output=embed`;

/** Turn-by-turn directions from the visitor's current location. */
export const MAP_DIRECTIONS_HREF =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(coords)}`;

/** Opens the pin full-screen on Google Maps. */
export const MAP_LARGE_HREF =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coords)}`;

/** Keyless alternative if you prefer OpenStreetMap over Google. */
export const MAP_OSM_SRC =
  `https://www.openstreetmap.org/export/embed.html?bbox=${
    LOCATION.lng - 0.008
  }%2C${LOCATION.lat - 0.005}%2C${LOCATION.lng + 0.008}%2C${
    LOCATION.lat + 0.005
  }&layer=mapnik&marker=${LOCATION.lat}%2C${LOCATION.lng}`;

export const VISIT = {
  heading: "Come Find Your Little Piece of *Green*.",
  address: [
    "Comelang Garden Studio",
    "Kadungganan, Brgy. Sagkahan",
    "Tacloban City, Leyte 6500",
    "Philippines",
  ],
  hours: [
    { d: "Tuesday – Friday", t: "9:00 – 18:00" },
    { d: "Saturday – Sunday", t: "8:00 – 17:00" },
    { d: "Monday", t: "Closed for propagation" },
  ],
  phone: "+63 53 832 0147",
  email: "hello@comelang.garden",
  photo: {
    id: 31665672,
    alt: "Inside a lush greenhouse filled with hanging baskets and potted plants.",
  } as Photo,
};

export const FINAL_CTA = {
  heading: "Let's Make Room for *Nature*.",
  body: "Whether you're growing your first plant or creating your dream garden, every beautiful space begins with a little inspiration.",
  photo: {
    id: 33807897,
    alt: "Soft daylight falling across layers of green foliage.",
  } as Photo,
};

export const FOOTER = {
  blurb:
    "A botanical studio, nursery and garden design practice. We grow plants slowly, plan gardens carefully, and keep the advice simple.",
  explore: NAV,
  resources: [
    { label: "Seasonal Guides", id: "guides" },
    { label: "Plant Care Library", id: "guides" },
    { label: "Garden Styles", id: "gardens" },
    { label: "Transformations", id: "transformation" },
    { label: "Design Services", id: "services" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};
