import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import AddToCart from "@/components/AddToCart";

export function generateStaticParams() {
  return products.map((p) => {
    slug: p.slug;
  });
}

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const productData = products.find((p) => p.slug === slug);
  if (!productData) {
    notFound();
  }
  return (
    <main className="container flex py-4">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold">{productData.name}</h1>
        <p>{productData.description}</p>
        <p className="mb-2">${productData.price}</p>
        <AddToCart
          className="bg-black text-white rounded-full py-2 px-6"
          id={productData.id}
        >
          Add to cart
        </AddToCart>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={productData.image_url}
          alt={productData.name}
          width={600}
          height={300}
          className="w-full"
        />
      </div>
    </main>
  );
};

export default page;
