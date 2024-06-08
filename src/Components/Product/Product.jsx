import React from "react";
import "./Product.css";
import { useQuery } from "@tanstack/react-query";

function Product() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["laptops"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3002/laptops");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  console.log('data:', data);
  console.log('error:', error);

  if (error) return <span>An error has occurred: {error.message}</span>;
  if (isLoading) return <span>Data is still loading...</span>;

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="grid-container">
        {data.map((item) => (
          <div key={item.id} className="single-product-item">
            <button>SALE</button>
            <figure>
            <img src={`../../Components/+${item.image}`} alt="kxa" />
            </figure>
            <p>{item.description}</p>
            <span>
              Rs: <p>{item.price}</p>
            </span>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
