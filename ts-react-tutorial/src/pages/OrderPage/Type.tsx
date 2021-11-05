import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../mocks/api";
import Product from "./Products";
import Options from "./Options";
import { client } from "../../mocks/api";
const Type = ({ orderType }: any) => {
  //data를 state에 넣음(handler.ts)
  const [items, setItems] = useState({ [`${orderType}`]: [] });
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(axios.defaults.baseURL);
    const fetchData = async () => {
      setError(false);
      try {
        const result = await client.get("/order");
        setItems(result.data);
        console.log(result.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  type ProductProps = {
    name: string;
    imagePath: string;
  };

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
        {items[orderType]
          ? items[orderType].map((item: ProductProps) =>
              orderType === "products" ? (
                <Product
                  key={item.name}
                  name={item.name}
                  imagePath={item.imagePath}
                />
              ) : (
                <Options name={item.name} />
              )
            )
          : null}
      </div>
    </>
  );
};

export default Type;
