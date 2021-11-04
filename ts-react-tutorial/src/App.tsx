import React, { useState, useEffect } from "react";
import "./App.css";
import OrderPage from "./pages/OrderPage/OrderPage";
import axios from "axios";

function App() {
  const [state, setState] = useState("");
  const [data, setData] = useState({ product: [] });
  const [isError, setIsError] = useState(false);
  const { product } = data;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await axios.get("order");
        setData(result.data);
        console.log(result.data);
        console.log("44");
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>{product}</p>
      {/* <OrderPage /> */}
    </div>
  );
}

export default App;
