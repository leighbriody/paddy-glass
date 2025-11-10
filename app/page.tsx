import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-4 md:py-6">
          <Link href="/">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl hover:opacity-80 transition-opacity">
              Paddy O'Brien Glass
            </h1>
          </Link>
        </div>
      </header>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Handcrafted Stained Glass Art
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is carefully crafted to order, celebrating Irish heritage
            and culture through the timeless art of stained glass.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02]">
                <div className="relative aspect-square w-full overflow-hidden bg-muted">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <Badge variant="secondary" className="shrink-0">
                      <Clock className="mr-1 h-3 w-3" />
                      Made to Order
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">€{product.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {product.dimensions}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
