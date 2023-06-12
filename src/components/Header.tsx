import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container flex flex-col items-center">
        <div className="text-4xl py-4 font-thin">LOGO</div>
        <nav className="space-x-4">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="/blog">
            Blog
          </Link>
          <Link className="hover:underline" href="/products">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
