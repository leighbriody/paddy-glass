"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

interface ProductDisplayProps {
  product: Product;
}

export function ProductDisplay({ product }: ProductDisplayProps) {
  const [selectedVariation, setSelectedVariation] = useState(
    product.variations[0]
  );

  return (
    <div className="mx-auto max-w-5xl">
      <Card className="overflow-hidden">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative aspect-square w-full overflow-hidden bg-muted">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col p-6 md:p-8">
            <div className="mb-4">
              <Badge variant="secondary" className="mb-4">
                <Clock className="mr-1 h-3 w-3" />
                Made to Order
              </Badge>
              <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
                {product.name}
              </CardTitle>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4 mt-auto">
              {/* Variation Selection */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Select Variation:
                </label>
                <div className="flex flex-col gap-2">
                  {product.variations.map((variation) => (
                    <button
                      key={variation.id}
                      onClick={() => setSelectedVariation(variation)}
                      className={cn(
                        "text-left p-4 rounded-lg border-2 transition-all",
                        selectedVariation.id === variation.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{variation.name}</span>
                        <span className="text-lg font-bold">
                          €{variation.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Dimensions:</span>
                  <span className="font-medium text-foreground">
                    {product.dimensions}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Material:</span>
                  <span className="font-medium text-foreground">
                    {product.material}
                  </span>
                </div>
              </div>

              {/* Buy Button */}
              <Button size="lg" className="w-full mt-6 text-lg" asChild>
                <a
                  href={selectedVariation.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now - €{selectedVariation.price}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
