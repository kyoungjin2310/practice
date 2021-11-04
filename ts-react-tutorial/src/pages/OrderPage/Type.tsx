import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../mocks/api";
import Product from "./Products";
import Options from "./Options";
const Type = ({ orderType }: any) => {
  //data를 state에 넣음(handler.ts)
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  type ProductProps = {
    name: string;
    imagePath: string;
  };

  const optionItem = items.map((item: ProductProps) =>
    orderType === "products" ? (
      <Product key={item.name} name={item.name} imagePath={item.imagePath} />
    ) : (
      <Options name={item.name} />
    )
  );

  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격: </p>
      <div
        style={{
          display: "flex",
        }}
      >
        {optionItem}
      </div>
    </>
  );
};

export default Type;
