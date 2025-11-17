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
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<
    "collect" | "delivery"
  >("collect");

  const currentOption =
    selectedDeliveryOption === "collect"
      ? selectedVariation.collect
      : selectedVariation.delivery;

  return (
    <div className="mx-auto max-w-5xl">
      <Card className="overflow-hidden">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative aspect-square w-full overflow-hidden bg-muted">
            <Image
              src={selectedVariation.images[0]}
              alt={`${product.name} - ${selectedVariation.name}`}
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
                      onClick={() => {
                        setSelectedVariation(variation);
                        // Reset to collect when changing variation
                        setSelectedDeliveryOption("collect");
                      }}
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
                          €{variation.basePrice}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Option Selection */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Collection or Delivery:
                </label>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedDeliveryOption("collect")}
                    className={cn(
                      "text-left p-4 rounded-lg border-2 transition-all",
                      selectedDeliveryOption === "collect"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        {selectedVariation.collect.name}
                      </span>
                      <span className="text-lg font-bold">
                        €{selectedVariation.collect.price}
                      </span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedDeliveryOption("delivery")}
                    className={cn(
                      "text-left p-4 rounded-lg border-2 transition-all",
                      selectedDeliveryOption === "delivery"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">
                          {selectedVariation.delivery.name}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1">
                          +€15 delivery fee
                        </span>
                      </div>
                      <span className="text-lg font-bold">
                        €{selectedVariation.delivery.price}
                      </span>
                    </div>
                  </button>
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
              </div>

              {/* Buy Button */}
              <Button
                size="lg"
                className="w-full mt-6 text-lg"
                asChild
                disabled={!currentOption.stripeUrl}
              >
                <a
                  href={currentOption.stripeUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now - €{currentOption.price}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
