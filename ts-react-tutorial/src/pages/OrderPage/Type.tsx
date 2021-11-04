import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../mocks/handler";
import Product from "./Products";
import Options from "./Options";
import ErrorBanner from "../../components/ErrorBanner";
const type = ({ orderType }: any) => {
  //data를 state에 넣음(handler.ts)
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType: any) => {
    try {
      let response = await axios.get(`${url}/${orderType}`);
      setItems(response.data);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다" />;
  }

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

  return <div>{optionItem}</div>;
};

export default type;
