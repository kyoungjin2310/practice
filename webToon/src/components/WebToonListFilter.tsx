import React, { ChangeEvent, useState, useEffect, useCallback } from "react";
import { menuTab, webToonList } from "../api/data";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";
function getKeyByValue(object: any, value: any) {
  for (let prop in object) {
    if (object[prop] === value) return prop;
  }
}

function WebToonListFilter({ day }: any) {
  const history = useHistory();
  const [value, setVaule] = useState("");
  const location = useLocation();
  const { search } = useLocation();

  const changeHistory = (key: any) => {
    const optionUrl = qs.stringify(
      { week: day, option: key },
      { indices: false }
    );
    history.push({
      pathname: "/day/weekday",
      search: `${optionUrl}`,
    });
  };

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setVaule(e.target.value);
      console.log(e.target.value);
      if (e.target.value === "인기순") {
        const getKey = getKeyByValue(
          webToonList[0],
          webToonList[0].favoriteNum
        );
        changeHistory(getKey);
      } else if (e.target.value === "여성 인기순") {
        const getKey = getKeyByValue(webToonList[0], webToonList[0].fViews);
        changeHistory(getKey);
      } else if (e.target.value === "남성 인기순") {
        const getKey = getKeyByValue(webToonList[0], webToonList[0].mViews);
        changeHistory(getKey);
      } else if (e.target.value === "조회순") {
        const getKey = getKeyByValue(webToonList[0], webToonList[0].views);
        changeHistory(getKey);
      } else if (e.target.value === "업데이트순") {
        const getKey = getKeyByValue(webToonList[0], webToonList[0].date);
        changeHistory(getKey);
      }
    },
    [day]
  );

  useEffect(() => {
    const opt = qs.parse(location.pathname).option;
    if (opt === "favoriteNum") {
      setVaule("인기순");
    } else if (opt === "fViews") {
      setVaule("여성 인기순");
    } else if (opt === "mViews") {
      setVaule("남성 인기순");
    } else if (opt === "views") {
      setVaule("조회순");
    } else if (opt === "date") {
      setVaule("업데이트순");
    }
    console.log(search);
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
