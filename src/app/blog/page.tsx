import React from "react";
import Image from "next/image";
import Link from "next/link";
import blog from "@/data/blog.json";

const page = () => {
  return (
    <main className="container py-6">
      <h1 className="text-3xl font-bold mb-3 text-center">Blog</h1>
      <p className="text-center mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        minima molestiae adipisci?
      </p>
      {blog.map((p) => (
        <div key={p.id} className="flex space-x-4 mb-4 items-center">
          <div>
            <Image src={p.image_url} alt={p.title} width={400} height={300} />
          </div>
          <div>
            <h2 className="text-3xl mb-3">{p.title}</h2>
            <p className="mb-3">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`} className="underline text-lg">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
};

export default page;
