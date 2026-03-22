export type ProductItem = {
  id: string;
  title: string;
  price: string;
  image: string;
  tags: { label: string; href: string }[];
  href: string;
  soldOut?: boolean;
  sale?: { was: string; now: string };
};

export const novitaProducts: ProductItem[] = [
  {
    id: "1",
    title: "2 Collezioni Primi Compagni d'Avventura – Serie 1 (IT)",
    price: "67.90",
    image: "/img/img_7284.png",
    tags: [{ label: "novità", href: "#" }],
    href: "#",
  },
  {
    id: "2",
    title: "Sky Island OP-15 Display 24 Buste – JP One Piece",
    price: "109.90",
    image: "/img/op15-seald-jap-gom-gom-watermark.png",
    tags: [{ label: "novità", href: "#" }],
    href: "#",
  },
  {
    id: "3",
    title: "Scarlet & Violet Obsidian Flames ETB Elite Trainer Box (EN)",
    price: "229.90",
    image: "/img/obsidian-flame-etb-eng-gom-gom-watermark.png",
    tags: [
      { label: "novità", href: "#" },
      { label: "scarlatto-e-violetto", href: "#" },
    ],
    href: "#",
  },
  {
    id: "4",
    title: "Sword & Shield Fusion Strike Display Box 36 Packs – ENG",
    price: "949.90",
    image: "/img/fusion-strike-gom-gom-watermark-display-eng.png",
    tags: [
      { label: "novità", href: "#" },
      { label: "spada-e-scudo", href: "#" },
    ],
    href: "#",
  },
  {
    id: "5",
    title: "Limit Over Collection The Heroes – Yu-Gi-Oh Full Art",
    price: "129.90",
    image:
      "/img/konami-yugioh-limit-over-collection-the-heroes-jap-gom-gom-watermark-1024x1024.png",
    tags: [{ label: "novità", href: "#" }],
    href: "#",
  },
  {
    id: "6",
    title: "Terastal Festival ex Display 10 Buste – JP",
    price: "147.90",
    image: "/img/pokemon-terastal-festival-png-sealed-box-jap-gomgom-watermark.png",
    tags: [
      { label: "novità", href: "#" },
      { label: "scarlatto-e-violetto", href: "#" },
    ],
    href: "#",
    soldOut: true,
  },
];

export const saldiProducts: ProductItem[] = [
  {
    id: "s1",
    title: "Scarlatto e Violetto Scintille Folgoranti Display Box 36 Buste – IT",
    price: "204.90",
    image: "/img/img_7284.png",
    tags: [
      { label: "saldi", href: "#" },
      { label: "scarlatto-e-violetto", href: "#" },
    ],
    href: "#",
    sale: { was: "209.90", now: "204.90" },
  },
  {
    id: "s2",
    title: "Sky Island OP-15 Display 24 Buste – JP One Piece",
    price: "99.90",
    image: "/img/op15-seald-jap-gom-gom-watermark.png",
    tags: [{ label: "saldi", href: "#" }],
    href: "#",
    sale: { was: "109.90", now: "99.90" },
  },
  {
    id: "s3",
    title: "Sword & Shield Fusion Strike Display Box 36 Packs – ENG",
    price: "899.90",
    image: "/img/fusion-strike-gom-gom-watermark-display-eng.png",
    tags: [{ label: "saldi", href: "#" }],
    href: "#",
    sale: { was: "949.90", now: "899.90" },
  },
];

export const brandLogos = [
  { src: "/img/pokemon.png", alt: "Pokémon", href: "#" },
  { src: "/img/one-piece.png", alt: "One Piece", href: "#" },
  { src: "/img/dragon-ball.png", alt: "Dragon Ball", href: "#" },
  { src: "/img/riftbound-scaled.png", alt: "Riftbound", href: "#" },
  { src: "/img/yu-gi-oh.png", alt: "Yu-Gi-Oh", href: "#" },
  { src: "/img/pngimg.com-naruto_PNG62-1.png", alt: "Naruto", href: "#" },
  { src: "/img/lorcana.png", alt: "Lorcana", href: "#" },
  { src: "/img/magic.png", alt: "Magic", href: "#" },
  { src: "/img/gundam.png", alt: "Gundam", href: "#" },
  { src: "/img/skifidol.png", alt: "Italian Brainrot", href: "#" },
];
