import Image from "next/image";
import Link from "next/link";
import { description } from "../lib/constants";
import { categories } from "../lib/mock-data";
import TrendingProducts from "./trending-products";

function HomePage() {
  return (
    <div className="pb-24">
      <section className="relative w-full h-[560px]">
        <Image
          src="/images/banner.jpeg"
          alt="banner"
          fill
          className="object-cover object-bottom"
        />

        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full px-4 py-12">
          <div className="flex flex-col items-center space-y-8">
            <h1 className="text-3xl sm:text-5xl text-white text-center tracking-wide text-shadow max-w-screen-md">
              {description}
            </h1>
            <Link
              className="bg-red-600 text-white hover:bg-white hover:text-red-600 px-9 py-3 uppercase transition max-w-max"
              href="/products"
            >
              Show now
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 container mx-auto px-4 space-y-12">
        <div className="text-center">
          <h3 className="relative inline-block text-gray-700 text-2xl sm:text-3xl font-medium uppercase tracking-wide after:content-[''] after:w-1/2 after:h-[2px] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:mt-2 after:bg-red-600">
            Shop by category
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              className="bg-gray-50 p-6 w-full h-full group"
              href={`/categories/${category.slug}`}
              key={category.id}
            >
              <p className="font-medium text-lg sm:text-xl group-hover:text-red-600 transition">
                {category.name}
              </p>

              <p className="text-sm sm:text-normal text-gray-600">
                {category.products.length} products
              </p>
            </Link>
          ))}
        </div>
      </section>

      <TrendingProducts />
    </div>
  );
}

export default HomePage;
