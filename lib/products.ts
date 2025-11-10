export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  dimensions: string;
  material: string;
  artist: string;
  stripeUrl: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "eire-irish-culture",
    name: "ÉIRE - Irish Culture Stained Glass",
    description:
      "A stunning handcrafted stained glass piece celebrating Irish heritage and culture. Featuring the word 'ÉIRE' (Ireland) in elegant Celtic script, a detailed map of Ireland, and traditional Celtic knotwork designs. This commemorative piece honors the 1916 Easter Rising with the inscription '19 Sláinte 16' and includes key elements of Irish culture: wisdom (Saíocht), artistry (Ealaíonaíocht), poetry (dánta), music (CEOL), and the Irish language (Gaeilge).",
    price: 299,
    dimensions: '12" × 18"',
    material: "Hand-blown glass, lead came",
    artist: "Paddy O'Brien",
    stripeUrl: "https://buy.stripe.com/your-link-here",
    images: [
      "/irish_culutre.png",
      "/irish_culutre2.png",
      "/irish_culutre3.png",
      "/irish_culutre4.png",
    ],
  },
  {
    id: "2",
    slug: "celtic-knot-sunset",
    name: "Celtic Knot Sunset",
    description:
      "A beautiful stained glass piece featuring intricate Celtic knotwork patterns in warm sunset colors. The interwoven designs create a mesmerizing pattern that catches light beautifully throughout the day.",
    price: 275,
    dimensions: '10" × 14"',
    material: "Hand-blown glass, lead came",
    artist: "Paddy O'Brien",
    stripeUrl: "https://buy.stripe.com/your-link-here",
    images: [
      "/irish_culutre.png",
      "/irish_culutre2.png",
      "/irish_culutre3.png",
      "/irish_culutre4.png",
    ],
  },
  {
    id: "3",
    slug: "shamrock-garden",
    name: "Shamrock Garden",
    description:
      "An elegant stained glass design featuring a field of shamrocks in various shades of green. This piece brings the beauty of Irish nature into your home with its vibrant colors and organic shapes.",
    price: 250,
    dimensions: '14" × 20"',
    material: "Hand-blown glass, lead came",
    artist: "Paddy O'Brien",
    stripeUrl: "https://buy.stripe.com/your-link-here",
    images: [
      "/irish_culutre.png",
      "/irish_culutre2.png",
      "/irish_culutre3.png",
      "/irish_culutre4.png",
    ],
  },
  {
    id: "4",
    slug: "claddagh-heart",
    name: "Claddagh Heart",
    description:
      "A romantic stained glass piece featuring the traditional Claddagh symbol - hands holding a heart with a crown. This timeless Irish symbol of love, loyalty, and friendship is beautifully rendered in rich colors.",
    price: 320,
    dimensions: '16" × 16"',
    material: "Hand-blown glass, lead came",
    artist: "Paddy O'Brien",
    stripeUrl: "https://buy.stripe.com/your-link-here",
    images: [
      "/irish_culutre.png",
      "/irish_culutre2.png",
      "/irish_culutre3.png",
      "/irish_culutre4.png",
    ],
  },
  {
    id: "5",
    slug: "dublin-cityscape",
    name: "Dublin Cityscape",
    description:
      "A stunning panoramic view of Dublin's iconic skyline in stained glass. Featuring recognizable landmarks and architectural details, this piece captures the essence of Ireland's capital city in vibrant colors.",
    price: 450,
    dimensions: '18" × 24"',
    material: "Hand-blown glass, lead came",
    artist: "Paddy O'Brien",
    stripeUrl: "https://buy.stripe.com/your-link-here",
    images: [
      "/irish_culutre.png",
      "/irish_culutre2.png",
      "/irish_culutre3.png",
      "/irish_culutre4.png",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
