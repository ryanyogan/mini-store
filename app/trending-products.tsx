"use client";

import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { products } from "../lib/mock-data";

function TrendingProducts() {
  return (
    <section
      className="mt-24 container mx-auto px-4"
      data-testid="products-section"
    >
      <div className="space-y-12">
        <div className="text-center">
          <h3 className="relative inline-block text-gray-700 text-2xl sm:text-3xl font-medium uppercase tracking-wide after:content-[''] after:w-1/2 after:h-[2px] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:mt-2 after:bg-red-600">
            Trending
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              className="space-y-4 group"
              href={`/products/${product.slug}`}
              key={product.id}
            >
              <div className="relative aspect-square">
                {product.images?.length > 0 && (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover object-center p-2"
                  />
                )}

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition" />

                <div className="opacity-0 group-hover:opacity-100 flex space-x-4 absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-1/4 group-hover:translate-y-0 transition">
                  {/* Add to cart */}
                  <button
                    onClick={() => null}
                    title="Add to cart"
                    className="bg-white hover:bg-red-600 hover:text-white shadow-lg flex items-center justify-center max-w-max rounded-full p-3 transition"
                  >
                    <ShoppingBagIcon className="shrink-0 w-6 h-6" />
                  </button>

                  {/* Add to favorite */}
                  <button
                    onClick={() => null}
                    title="Add to favorite"
                    className="bg-white hover:bg-red-600 hover:text-white shadow-lg flex items-center justify-center max-w-max rounded-full p-3 transition"
                  >
                    <HeartIcon className="shrink-0 w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="text-center space-y-2">
                <p className="font-medium line-clamp-1 group-hover:text-red-600 transition">
                  {product.name}
                </p>
                <p className="text-gray-700">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          className="bg-black hover:bg-red-600 text-white px-9 py-3 uppercase text-sm transition"
          href="/products"
        >
          All products
        </Link>
      </div>
    </section>
  );
}

export default TrendingProducts;
