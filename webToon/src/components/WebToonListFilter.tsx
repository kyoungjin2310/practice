import React, { ChangeEvent, useState, useEffect, useCallback } from "react";
import { menuTab } from "../api/data";
import { useHistory, useLocation } from "react-router-dom";

type WebToonListFilterProps = {
  day: string;
};

function WebToonListFilter({ day }: WebToonListFilterProps) {
  const history = useHistory();
  const [value, setVaule] = useState("");
  const location = useLocation();
  const select = location.pathname.split("/");
  const home = window.location.origin + "/";
  //쿼리스트링으로 작성
  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setVaule(e.target.value);
      history.push(`/day/${day}/${e.target.value}`);
    },
    [value]
  );

  // redux빼고 switch 함수문 쓰기
  {
    /*function filterWebtoons(type) {
    switch(type) {
       case "a": { return a sort }
    }
    }*/
  }
  const getFavoriteViews = () => {};

  const getViews = () => {};

  const getFViewsViews = () => {};

  const getMViewsViews = () => {};

  const getDateViews = () => {};

  useEffect(() => {
    console.log(window.location.href);
    console.log(home);
    if (window.location.href === home) {
      setVaule("인기순");
    }
    if (select.length > 3) {
      console.log(select);
      console.log(select.length);
      setVaule(select[select.length - 1]);
    }
    if (value === "인기순") {
      getFavoriteViews();
    } else if (value === "여성 인기순") {
      getFViewsViews();
    } else if (value === "남성 인기순") {
      getMViewsViews();
    } else if (value === "조회순") {
      getViews();
    } else if (value === "업데이트순") {
      getDateViews();
    } else {
      return;
    }
  }, [location]);

  return (
    <>
      <div className="selector">
        <select value={value} onChange={(e) => onChange(e)}>
          {menuTab.map((list) => (
            <option value={list.name} key={list.id}>
              {list.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default WebToonListFilter;
