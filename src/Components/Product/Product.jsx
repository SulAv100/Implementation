import React from "react";
import "./Product.css";
import product1 from '../../assets/Products/product1.jpg'
import product2 from '../../assets/Products/product2.jpg'
import product3 from '../../assets/Products/product3.jpg'
import product4 from '../../assets/Products/product4.jpg'
import product5 from '../../assets/Products/product5.jpg'
import product6 from '../../assets/Products/product6.png'


function Product() {
  return (
    <>
      <section className="products">
        <h2>Our Products</h2>
        <div className="grid-container">
          <div className="single-product-item">
            <button>SALE</button>
            <figure>
              <img src={product1} alt="" />
            </figure>
            <p>
              ACER SWIFT GO 14 OLED 2024 | Intel® Core™ Ultra 5 processor 125H |
              16GB LPDDR5X | 512GB PCIEe NVMe SSD | Intel® Arc™ Graphics | 14″
              2.8k OLED SCREEN | BACKLIT KEYBOARD | FINGERPRINT READER
            </p>
            <span>Rs: <p>108,000</p></span>
            <button>Add to Cart</button>
          </div>
          <div className="single-product-item">
            <button>SALE</button>
            <figure>
              <img src={product2} alt="" />
            </figure>
            <p>
              ACER SWIFT GO 14 OLED 2024 | Intel® Core™ Ultra 5 processor 125H |
              16GB LPDDR5X | 512GB PCIEe NVMe SSD | Intel® Arc™ Graphics | 14″
              2.8k OLED SCREEN | BACKLIT KEYBOARD | FINGERPRINT READER
            </p>
            <span>Rs: <p>108,000</p></span>
            <button>Add to Cart</button>

          </div>
          <div className="single-product-item">
            <button>SALE</button>
            <figure>
              <img src={product3} alt="" />
            </figure>
            <p>
              ACER SWIFT GO 14 OLED 2024 | Intel® Core™ Ultra 5 processor 125H |
              16GB LPDDR5X | 512GB PCIEe NVMe SSD | Intel® Arc™ Graphics | 14″
              2.8k OLED SCREEN | BACKLIT KEYBOARD | FINGERPRINT READER
            </p>
            <span>Rs: <p>108,000</p></span>
            <button>Add to Cart</button>

          </div>
          <div className="single-product-item">
            <button>SALE</button>
            <figure>
              <img src={product4} alt="" />
            </figure>
            <p>
              ACER SWIFT GO 14 OLED 2024 | Intel® Core™ Ultra 5 processor 125H |
              16GB LPDDR5X | 512GB PCIEe NVMe SSD | Intel® Arc™ Graphics | 14″
              2.8k OLED SCREEN | BACKLIT KEYBOARD | FINGERPRINT READER
            </p>
            <span>Rs: <p>108,000</p></span>
            <button>Add to Cart</button>

          </div>
          <div className="single-product-item">
            <button>SALE</button>
            <figure>
              <img src={product5} alt="" />
            </figure>
            <p>
              ACER SWIFT GO 14 OLED 2024 | Intel® Core™ Ultra 5 processor 125H |
              16GB LPDDR5X | 512GB PCIEe NVMe SSD | Intel® Arc™ Graphics | 14″
              2.8k OLED SCREEN | BACKLIT KEYBOARD | FINGERPRINT READER
            </p>
            <span>Rs: <p>108,000</p></span>
            <button>Add to Cart</button>

          </div>
          <div className="single-product-item">
            <button>SALE</button>
            <figure>
              <img src={product6} alt="" />
            </figure>
            <p>
              ACER SWIFT GO 14 OLED 2024 | Intel® Core™ Ultra 5 processor 125H |
              16GB LPDDR5X | 512GB PCIEe NVMe SSD | Intel® Arc™ Graphics | 14″
              2.8k OLED SCREEN | BACKLIT KEYBOARD | FINGERPRINT READER
            </p>
            <span>Rs: <p>108,000</p></span>
            <button>Add to Cart</button>

          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
