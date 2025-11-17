"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ShoppingCart, MapPin, Truck } from "lucide-react";
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
    <div className="mx-auto max-w-3xl">
      <Card className="overflow-hidden">
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
          </div>

          <div className="space-y-4 mt-auto">
            {/* Variation Selection */}
            <div>
              <label className="text-sm font-medium mb-3 block">
                Select Variation:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {product.variations.map((variation) => (
                  <button
                    key={variation.id}
                    onClick={() => {
                      setSelectedVariation(variation);
                    }}
                    className={cn(
                      "relative group rounded-lg border-2 overflow-hidden transition-all",
                      selectedVariation.id === variation.id
                        ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="relative aspect-square w-full bg-muted">
                      <Image
                        src={variation.images[0]}
                        alt={variation.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      {selectedVariation.id === variation.id && (
                        <div className="absolute inset-0 bg-primary/10" />
                      )}
                    </div>
                    <div className="p-3 text-center">
                      <div className="text-sm font-semibold mb-1">
                        {variation.name}
                      </div>
                      <div className="text-lg font-bold text-primary">
                        €{variation.basePrice}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Option Selection */}
            <div>
              <label className="text-sm font-medium mb-3 block">
                Collection or Delivery:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedDeliveryOption("collect")}
                  className={cn(
                    "text-left p-4 rounded-lg border-2 transition-all",
                    selectedDeliveryOption === "collect"
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <MapPin
                      className={cn(
                        "h-5 w-5 mt-0.5 shrink-0",
                        selectedDeliveryOption === "collect"
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm mb-1">Collect</div>
                      <div className="text-xs text-muted-foreground mb-2">
                        From Drogheda, Ireland
                      </div>
                      <div className="text-lg font-bold">
                        €{selectedVariation.collect.price}
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setSelectedDeliveryOption("delivery")}
                  className={cn(
                    "text-left p-4 rounded-lg border-2 transition-all",
                    selectedDeliveryOption === "delivery"
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <Truck
                      className={cn(
                        "h-5 w-5 mt-0.5 shrink-0",
                        selectedDeliveryOption === "delivery"
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm mb-1">Delivery</div>
                      <div className="text-xs text-muted-foreground mb-2">
                        +€15 delivery fee
                      </div>
                      <div className="text-lg font-bold">
                        €{selectedVariation.delivery.price}
                      </div>
                    </div>
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
      </Card>
    </div>
  );
}
