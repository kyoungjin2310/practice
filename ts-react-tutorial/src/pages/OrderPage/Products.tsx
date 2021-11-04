import React from "react";
import { url } from "../../mocks/api";

type ProductsProps = {
  name: string;
  imagePath: string;
};
const Products = ({ name, imagePath }: ProductsProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`${url}/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label style={{ textAlign: "right" }}>{name}</label>
        <input
          style={{ marginLeft: 7 }}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
        />
      </form>
    </div>
  );
};

export default Products;
