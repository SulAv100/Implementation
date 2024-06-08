import React from "react";
import "./Brand.css";
import brand1 from "../../assets/Brands/brand1.png";
import brand2 from "../../assets/Brands/brand2.jpg";
import brand3 from "../../assets/Brands/brand3.jpg";
import brand4 from "../../assets/Brands/brand4.png";
import brand5 from "../../assets/Brands/brand5.png";

function Brand() {
  return (
    <>
      <section className="brand-section">
        <h2>Brands</h2>
        <div className="brand-logos">
          <figure>
            <img src={brand1} alt="" />
          </figure>
          <figure>
            <img src={brand2} alt="" />
          </figure>
            <figure>
            <img src={brand3} alt="" />

            </figure>
            <figure>
            <img src={brand4} alt="" />

            </figure>
            <figure>
            <img src={brand5} alt="" />

            </figure>
        </div>
      </section>
    </>
  );
}

export default Brand;
