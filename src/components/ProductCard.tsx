import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";

interface Product {
  id: string;
  name: string;
  image_url: string;
  description: string;
  price: number;
  slug: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div key={product.id} className="card p-3">
      <Image
        src={product.image_url}
        alt={product.name}
        width={800}
        height={400}
        className="w-full mb-2"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="mb-2">{product.description}</p>
      <p className="mb-2 text-lg">${product.price}</p>

      <AddToCart
        className="bg-black text-white rounded-full py-2 px-6 mr-2"
        id={product.id}
      >
        Add to cart
      </AddToCart>
      <Link className="underline" href={`/products/${product.slug}`}>
        Learn more
      </Link>
    </div>
  );
};

export default ProductCard;
