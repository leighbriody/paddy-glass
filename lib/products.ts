export interface ProductVariation {
  id: string;
  name: string;
  price: number;
  stripeUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  dimensions: string;
  material: string;
  images: string[];
  variations: ProductVariation[];
}

export const product: Product = {
  id: "ireland-proclamation",
  name: "Ireland Proclamation",
  description:
    "A stunning handcrafted stained glass piece celebrating Irish heritage and culture. This commemorative piece honors the 1916 Easter Rising and features traditional Celtic designs.",
  dimensions: '12" × 18"',
  material: "Hand-blown glass, lead came",
  images: [
    "/irish_culutre.png",
    "/irish_culutre2.png",
    "/irish_culutre3.png",
    "/irish_culutre4.png",
  ],
  variations: [
    {
      id: "clear-glass",
      name: "Clear Glass",
      price: 80,
      stripeUrl: "https://buy.stripe.com/bJecN5fg565T7JX94vfIs00", // Update with actual Stripe URL
    },
    {
      id: "yellow-silver-stain",
      name: "Yellow Silver Stain",
      price: 98,
      stripeUrl: "https://buy.stripe.com/bJecN5fg565T7JX94vfIs00", // Update with actual Stripe URL
    },
  ],
};
