import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { products } from "@/lib/products";
import { OrderTimeline } from "@/components/order-timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-4 md:py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Paddy O'Brien Glass
              </h1>
            </Link>
            <div className="flex gap-6">
              <a
                href="#products"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Products
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Products Grid */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-12 md:py-20 scroll-mt-20"
      >
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

      {/* About Me Section */}
      <section id="about" className="border-t bg-muted/30 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Hero Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-muted">
              <Image
                src="/about_hero.png"
                alt="Paddy O'Brien - Stained Glass Artist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  About Paddy O'Brien
                </h2>
                <div className="mt-4 h-1 w-20 bg-primary" />
              </div>

              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm a passionate stained glass artist dedicated to preserving
                  and celebrating Irish heritage through the timeless art of
                  stained glass. Each piece I create is a labor of love,
                  handcrafted with meticulous attention to detail and a deep
                  respect for traditional techniques.
                </p>
                <p>
                  My work draws inspiration from Ireland's rich history,
                  culture, and mythology. From commemorating significant
                  historical events to celebrating the beauty of Celtic design,
                  every piece tells a story and connects us to our heritage.
                </p>
                <p>
                  Every stained glass artwork is made to order, ensuring that
                  each piece receives the care and craftsmanship it deserves. I
                  work with traditional materials including hand-blown glass and
                  lead came, creating pieces that will be treasured for
                  generations to come.
                </p>
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">
                      Location:
                    </span>
                    <span className="ml-2 text-muted-foreground">Ireland</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">
                      Specialty:
                    </span>
                    <span className="ml-2 text-muted-foreground">
                      Irish Heritage Art
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Process Timeline */}
      <section className="border-t bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <Card>
            <CardContent className="pt-6">
              <OrderTimeline />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Future Enhancements Section */}
      <section className="border-t bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Other Potential Sections
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Potential features we could add to enhance your experience
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Customer Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Showcase reviews and testimonials from satisfied customers to
                  build trust and credibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Custom Order Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Allow customers to request custom pieces with specific
                  dimensions, colors, or designs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Production Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Display estimated production times and shipping information to
                  set clear expectations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">FAQ Section</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Answer common questions about care, shipping, custom orders,
                  and the creation process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Enable direct communication through an integrated contact form
                  for inquiries and custom requests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
