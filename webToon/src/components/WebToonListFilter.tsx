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
import qs from "qs";
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
  const history = useHistory();
  const [value, setVaule] = useState("");
  const location = useLocation();
  const select = location.pathname.split("/");
  // const home = window.location.origin + "/";

  //쿼리스트링으로 작성
  const changeHistory = (key: any) => {
    history.push(`/day/week=${day[1]}/${key}`);
  };

  //swich 문
  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setVaule(e.target.value);
      console.log(e.target.value);
      if (value === "인기순") {
        const getKey = getKeyByValue(state[0], state[0].favoriteNum);
        changeHistory(getKey);
      } else if (value === "여성 인기순") {
        const getKey = getKeyByValue(state[0], state[0].fViews);
        changeHistory(getKey);
      } else if (value === "남성 인기순") {
        const getKey = getKeyByValue(state[0], state[0].mViews);
        changeHistory(getKey);
      } else if (value === "조회순") {
        const getKey = getKeyByValue(state[0], state[0].views);
        changeHistory(getKey);
      } else if (value === "업데이트순") {
        const getKey = getKeyByValue(state[0], state[0].date);
        changeHistory(getKey);
      } else {
        return;
      }
    },
    [value]
  );

  useEffect(() => {
    console.log(location.pathname);
    // if (select.length > 3) {
    //   console.log(select);
    //   console.log(select.length);
    //   setVaule(select[select.length - 1]);
    // }
    // if (value === "인기순") {
    //   const getKey = getKeyByValue(state[0], state[0].favoriteNum);
    //   changeHistory(getKey);
    // } else if (value === "여성 인기순") {
    //   const getKey = getKeyByValue(state[0], state[0].fViews);
    //   changeHistory(getKey);
    // } else if (value === "남성 인기순") {
    //   const getKey = getKeyByValue(state[0], state[0].mViews);
    //   changeHistory(getKey);
    // } else if (value === "조회순") {
    //   const getKey = getKeyByValue(state[0], state[0].views);
    //   changeHistory(getKey);
    // } else if (value === "업데이트순") {
    //   const getKey = getKeyByValue(state[0], state[0].date);
    //   changeHistory(getKey);
    // } else {
    //   return;
    // }
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
