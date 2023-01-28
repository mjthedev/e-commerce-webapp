import React from "react";
import "../../../css/mens/scrollmenu.css";
import { useState } from "react";

export const MensMenu = () => {
  const [categoryDetails, setCategory] = useState("All Clothing");

  return (
    <>
      {categoryDetails}
      <div className="scrollmenu">
        <a
          href="#home"
          onClick={() => {
            setCategory("All Clothing");
          }}
        >
          All Clothing
        </a>
        <a
          href="#news"
          onClick={() => {
            setCategory("Activewear");
          }}
        >
          Activewear
        </a>
        <a
          href="#contact"
          onClick={() => {
            setCategory("Blazers & Sport Coats");
          }}
        >
          Blazers & Sport Coats
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Coats & Jackets");
          }}
        >
          Coats & Jackets
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Dress Pants");
          }}
        >
          Dress Pants
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Dress Shirts");
          }}
        >
          Dress Shirts
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Jeans");
          }}
        >
          Jeans
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Jogger & Sweatpants");
          }}
        >
          Jogger & Sweatpants
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Lounge, Pajamas & Robes");
          }}
        >
          Lounge, Pajamas & Robes
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Pants");
          }}
        >
          Pants
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Polo Shirts");
          }}
        >
          Polo Shirts
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Shirts");
          }}
        >
          Shirts
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Shorts");
          }}
        >
          Shorts
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Suits & Seperates");
          }}
        >
          Suits & Seperates
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Sweaters");
          }}
        >
          Sweaters
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Sweatshirts & Hoodies");
          }}
        >
          Sweatshirts & Hoodies
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Swimwear & Board Shorts");
          }}
        >
          Swimwear & Board Shorts
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("T-Shirts");
          }}
        >
          T-Shirts
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Underwear, Undershirts & Socks");
          }}
        >
          Underwear, Undershirts & Socks
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Big & Tall Clothing");
          }}
        >
          Big & Tall Clothing
        </a>
        <a
          href="#about"
          onClick={() => {
            setCategory("Men's Fasion Tips & How-Tos");
          }}
        >
          Men's Fasion Tips & How-Tos
        </a>
      </div>
    </>
  );
};
