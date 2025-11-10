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
    slug: "bloody-sunday-croke-park",
    name: "Bloody Sunday - Croke Park",
    description:
      "A commemorative stained glass piece featuring a ticket from Croke Park on Bloody Sunday, November 21, 1920. This powerful work memorializes the tragic events when British forces opened fire on a crowd of 15,000 people during a Gaelic football match between Dublin and Tipperary, killing 14 people and wounding over 60 others. This unprovoked attack was in retaliation for the IRA's assassinations of British intelligence agents earlier that morning and marked a turning point in the Irish War of Independence. The piece preserves the historical ticket design, serving as a poignant reminder of this significant moment in Irish history.",
    price: 375,
    dimensions: '14" × 20"',
    material: "Hand-blown glass, lead came",
    artist: "Paddy O'Brien",
    stripeUrl: "https://buy.stripe.com/your-link-here",
    images: ["/bloody_sunday.png"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
