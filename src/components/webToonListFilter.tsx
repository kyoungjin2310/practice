import React, { MouseEvent, ChangeEvent, useState, useEffect } from "react";
import { menu, menuTab } from "../api/data";

type WebToonListFilterProps = {
  getFavoriteViews: () => void;
  getViews: () => void;
  getFViewsViews: () => void;
  getMViewsViews: () => void;
  getDateViews: () => void;
  getDayViews: (day: string) => void;
};

function WebToonListFilter({
  getFavoriteViews,
  getViews,
  getFViewsViews,
  getMViewsViews,
  getDateViews,
  getDayViews,
}: WebToonListFilterProps) {
  const [value, setVaule] = useState("");
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVaule(e.target.value);
  };

  useEffect(() => {
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
  }, [value]);

  const onClick = (e: MouseEvent<HTMLAnchorElement>, day: string) => {
    e.preventDefault();
    getDayViews(day);
  };

  return (
    <>
      <div className="tabMenu">
        <ul>
          {menu.map((list) => (
            <li key={list.id}>
              <a href="#">{list.name}</a>
              {list.tabMenu
                ? list.tabMenu.map((list) => (
                    <div key={list.id}>
                      <ul>
                        <li>
                          <a href="#" onClick={(e) => onClick(e, list.name)}>
                            {list.name}
                          </a>
                        </li>
                      </ul>
                    </div>
                  ))
                : null}
            </li>
          ))}
        </ul>
      </div>
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
