import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Sparkles, Ruler } from "lucide-react";

// Product data - you can move this to a separate file or CMS later
const product = {
  name: "Stained Glass Art Piece",
  description:
    "A beautiful handcrafted stained glass piece that captures light and color in a unique way. Each piece is carefully crafted with attention to detail and artistic vision.",
  price: 299,
  dimensions: '12" × 18"',
  material: "Hand-blown glass, lead came",
  artist: "Paddy Glass",
  stripeUrl: "https://buy.stripe.com/your-link-here", // Replace with actual Stripe link
  images: [
    "/glass-piece-1.jpg", // You'll need to add these images to /public
    "/glass-piece-2.jpg",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Image Gallery */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-muted">
              <Image
                src={product.images[0] || "/placeholder-glass.jpg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Sparkles className="mr-2 h-3 w-3" />
                  Handcrafted
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                  by {product.artist}
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Ruler className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Dimensions:</span>
                    <span className="text-muted-foreground">
                      {product.dimensions}
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">${product.price}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-6"
                  asChild
                >
                  <a
                    href={product.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Details Section */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>About This Piece</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{product.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimensions:</span>
                    <span className="font-medium">{product.dimensions}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipping & Care</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  This piece is carefully packaged and shipped with insurance.
                  Each stained glass artwork comes with care instructions to
                  ensure it remains beautiful for years to come.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>• Secure packaging</p>
                  <p>• Insured shipping</p>
                  <p>• Care instructions included</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
