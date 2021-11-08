import React, { createContext, useMemo, useState } from "react";

type ValueType = {
  itemName: string;
  newItemCount: string;
  orderType: string;
};

let nameAgeMapping = new Map();

export const OrderContext = createContext<Map<any, any> | null>(null);

export const OrderContextProvider = (props: Map<any, any | null>) => {
  const [orderCounts, setOrderCounts] = useState({
    //Map 간단한 키와 값을 서로 연결(매핑)시켜 저장
    //저장된 순서대로 각 요소들을 반복적으로 접근
    //Map 업데이트 set사용
    products: nameAgeMapping,
    options: nameAgeMapping,
  });

  const value = useMemo(() => {
    //나중에 total 값을 추가하기 위해서 ... 사용
    const updateItemCount = ({
      itemName,
      newItemCount,
      orderType,
    }: ValueType) => {
      //itemName : america
      //newItemCount : 개수
      //orderType : 국적 타입
      const newOrderCounts = { ...orderCounts };
      console.log("newOrderCounts before", newOrderCounts);
      const orderCountsMap = orderCounts[orderType];
      orderCountsMap.set(itemName, parseInt(newItemCount));

      setOrderCounts(newOrderCounts);
    };

    return [{ ...orderCounts }];
  }, [orderCounts]);

  return (
    <OrderContext.Provider value={value} {...props}></OrderContext.Provider>
  );
};
