import React from "react";
import "./App.css";
import OrderPage from "./pages/OrderPage/OrderPage";
import { OrderContext } from "./contexts/OrderContext";
function App() {
  return (
    <div>
      <OrderContext.Provider>
        <OrderPage />
      </OrderContext.Provider>
    </div>
  );
}

export default App;
