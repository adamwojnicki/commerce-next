import React from "react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

const page = () => {
  return (
    <main className="container py-6">
      <h1 className="text-3xl font-bold mb-3 text-center">Products</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        minima molestiae adipisci?
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="card p-3">
            <Image
              src={p.image_url}
              alt={p.name}
              width={800}
              height={400}
              className="w-full mb-2"
            />
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="mb-2">{p.description}</p>
            <p className="mb-2">{p.price}</p>
            <Link
              className="rounded-full px-6 py-1 bg-black text-white"
              href={`/products/${p.slug}`}
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
