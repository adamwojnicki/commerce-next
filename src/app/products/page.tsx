import React from "react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

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
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </main>
  );
};

export default page;
