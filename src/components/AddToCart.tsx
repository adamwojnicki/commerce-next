"use client";
import React from "react";

const AddToCart = ({
  className,
  id,
  children,
}: {
  className: string | undefined;
  id: string;
  children: string;
}) => {
  const addToCart = (id: string) => {
    console.log(id);
  };
  return (
    <button className={className} onClick={() => addToCart(id)}>
      {children}
    </button>
  );
};

export default AddToCart;
