"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ShoppingCart,
  Sparkles,
  Ruler,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Product data - you can move this to a separate file or CMS later
const product = {
  name: "ÉIRE - Irish Culture Stained Glass",
  description:
    "A stunning handcrafted stained glass piece celebrating Irish heritage and culture. Featuring the word 'ÉIRE' (Ireland) in elegant Celtic script, a detailed map of Ireland, and traditional Celtic knotwork designs. This commemorative piece honors the 1916 Easter Rising with the inscription '19 Sláinte 16' and includes key elements of Irish culture: wisdom (Saíocht), artistry (Ealaíonaíocht), poetry (dánta), music (CEOL), and the Irish language (Gaeilge).",
  price: 299,
  dimensions: '12" × 18"',
  material: "Hand-blown glass, lead came",
  artist: "Paddy Glass",
  stripeUrl: "https://buy.stripe.com/your-link-here", // Replace with actual Stripe link
  images: [
    "/irish_culutre.png",
    "/irish_culutre2.png",
    "/irish_culutre3.png",
    "/irish_culutre4.png",
  ],
};

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Image Gallery - Clickable */}
            <div className="space-y-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <button className="relative aspect-square w-full overflow-hidden rounded-lg border bg-muted group cursor-pointer hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <Image
                      src={
                        product.images[selectedImageIndex] ||
                        "/placeholder-glass.jpg"
                      }
                      alt={`${product.name} - View ${selectedImageIndex + 1}`}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Zoom overlay indicator */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <ZoomIn className="h-6 w-6 text-foreground" />
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-5xl w-full p-0 bg-transparent border-none"
                  onKeyDown={(e) => {
                    if (e.key === "ArrowLeft") prevImage();
                    if (e.key === "ArrowRight") nextImage();
                  }}
                >
                  <DialogTitle className="sr-only">
                    {product.name} - Full Size View ({selectedImageIndex + 1} of{" "}
                    {product.images.length})
                  </DialogTitle>
                  <div className="relative w-full aspect-auto max-h-[90vh] flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-lg p-4">
                    {/* Previous Button */}
                    {product.images.length > 1 && (
                      <button
                        onClick={prevImage}
                        className="absolute left-4 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 shadow-lg hover:bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                    )}
                    {/* Main Image */}
                    <Image
                      src={
                        product.images[selectedImageIndex] ||
                        "/placeholder-glass.jpg"
                      }
                      alt={`${product.name} - View ${selectedImageIndex + 1}`}
                      width={1200}
                      height={1600}
                      className="object-contain max-h-[85vh] w-auto h-auto rounded-lg"
                      priority={selectedImageIndex === 0}
                    />
                    {/* Next Button */}
                    {product.images.length > 1 && (
                      <button
                        onClick={nextImage}
                        className="absolute right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 shadow-lg hover:bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    )}
                    {/* Image Counter */}
                    {product.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                        {selectedImageIndex + 1} / {product.images.length}
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
              {/* Thumbnail Navigation */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={cn(
                        "relative aspect-square overflow-hidden rounded-md border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        selectedImageIndex === index
                          ? "border-primary opacity-100"
                          : "border-transparent opacity-60 hover:opacity-100"
                      )}
                      aria-label={`View image ${index + 1}`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
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
