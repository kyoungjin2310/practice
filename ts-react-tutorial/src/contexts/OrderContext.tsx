import React, { createContext, useMemo, useState } from "react";

export const OrderContext = createContext();

export const OrderContextProvider = (props: any) => {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const value = useMemo(() => {
    return [{ ...orderCounts }];
  }, [orderCounts]);

  return <OrderContext.Provider value={value}></OrderContext.Provider>;
};
