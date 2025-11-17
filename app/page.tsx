import Link from "next/link";
import { product } from "@/lib/products";
import { ProductDisplay } from "@/components/product-display";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-4 md:py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Aaron O brien stained glass artist
              </h1>
            </Link>
          </nav>
        </div>
      </header>

      {/* Product Section */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-12 md:py-20 scroll-mt-20"
      >
        <ProductDisplay product={product} />
      </section>
    </div>
  );
}
