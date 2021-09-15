import React, {
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import { List, menuTab, webToonList } from "../api/data";
import { useHistory, useLocation } from "react-router-dom";
import reducer from "../modules/day/reducer";
type WebToonListFilterProps = {
  day: string;
};
function getKeyByValue(object: any, value: any) {
  for (let prop in object) {
    if (object[prop] === value) return prop;
  }
}

function WebToonListFilter({ day }: WebToonListFilterProps) {
  const [state, dispatch] = useReducer(reducer, webToonList);
  const { favoriteNum, views, fViews, mViews, date }: any = state[0];
  const history = useHistory();
  const [value, setVaule] = useState("");
  const location = useLocation();
  const select = location.pathname.split("/");
  const home = window.location.origin + "/";

  //쿼리스트링으로 작성
  const changeHistory = (key: string) => {
    history.push(`/day/week=${day[1]}/${key}`);
  };

  const changeTarget = (key: any) => {
    dispatch({
      type: "LIST_SORT",
      payload: key,
    });
    changeHistory(key);
  };

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setVaule(e.target.value);
      console.log(e.target.value);
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

  useEffect(() => {
    console.log(fViews, "fViews");
    /*if (window.location.href === home) {
      setVaule("인기순");
    }*/
    if (select.length > 3) {
      console.log(select);
      console.log(select.length);
      setVaule(select[select.length - 1]);
    }

    if (value === "인기순") {
      const getKey = getKeyByValue(state[0], state[0].favoriteNum);
      changeTarget(getKey);
    } else if (value === "여성 인기순") {
      const getKey = getKeyByValue(state[0], state[0].fViews);
      changeTarget(getKey);
    } else if (value === "남성 인기순") {
      const getKey = getKeyByValue(state[0], state[0].mViews);
      changeTarget(getKey);
    } else if (value === "조회순") {
      const getKey = getKeyByValue(state[0], state[0].views);
      changeTarget(getKey);
    } else if (value === "업데이트순") {
      const getKey = getKeyByValue(state[0], state[0].date);
      changeTarget(getKey);
    } else {
      return;
    }
  }, [value]);

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
