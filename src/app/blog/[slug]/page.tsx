import React from "react";
import { notFound } from "next/navigation";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import blog from "@/data/blog.json";

export function generateStaticParams() {
  return blog.map((p) => {
    slug: p.slug;
  });
}

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blogData = blog.find((b) => b.slug === slug);
  if (!blogData) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{blogData.title}</title>
        <meta name="description" content={blogData.excerpt} />
      </Head>
      <main className="container py-6">
        <ReactMarkdown className="prose prose-h1:text-4xl prose-li:marker:prose-lime prose-h1:font-bold mx-auto">
          {blogData.content}
        </ReactMarkdown>
      </main>
    </>
  );
};

export default page;
