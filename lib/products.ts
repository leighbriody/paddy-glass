export interface DeliveryOption {
  id: "collect" | "delivery";
  name: string;
  price: number;
  stripeUrl?: string;
}

export interface ProductVariation {
  id: string;
  name: string;
  basePrice: number;
  collect: DeliveryOption;
  delivery: DeliveryOption;
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

const DELIVERY_FEE = 15;

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
      basePrice: 80,
      collect: {
        id: "collect",
        name: "Collect from Drogheda, Ireland",
        price: 80,
        stripeUrl: "https://buy.stripe.com/bJe9AL1WV9oD8H4gnlfrW01",
      },
      delivery: {
        id: "delivery",
        name: "Delivery",
        price: 95, // 80 + 15
        stripeUrl: "https://buy.stripe.com/4gM28j9pngR5cXkgnlfrW00",
      },
    },
    {
      id: "yellow-silver-stain",
      name: "Yellow Silver Stain",
      basePrice: 98,
      collect: {
        id: "collect",
        name: "Collect from Drogheda, Ireland",
        price: 98,
        stripeUrl: "https://buy.stripe.com/6oU5kvatr1Wbf5sfjhfrW03",
      },
      delivery: {
        id: "delivery",
        name: "Delivery",
        price: 113, // 98 + 15
        stripeUrl: "https://buy.stripe.com/28EbIT30Z0S75uSefdfrW02",
      },
    },
  ],
};
