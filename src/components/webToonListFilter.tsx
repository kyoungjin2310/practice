import React, { ChangeEvent, useState, useEffect } from "react";
import { menuTab } from "../api/data";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  favoriteViews,
  views,
  fViewsViews,
  mViewsViews,
  dateViews,
} from "../modules/day";

type WebToonListFilterProps = {
  today?: string;
  day: string | undefined;
};

function WebToonListFilter({ today, day }: WebToonListFilterProps) {
  let history = useHistory();
  const [value, setVaule] = useState("");
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVaule(e.target.value);
    if (day) {
      history.push(`/${day}/${e.target.value}`);
    } else {
      history.push(`/${today}/${e.target.value}`);
    }
  };
  const dispatch = useDispatch();

  const getFavoriteViews = () => {
    dispatch(favoriteViews());
  };

  const getViews = () => {
    dispatch(views());
  };

  const getFViewsViews = () => {
    dispatch(fViewsViews());
  };

  const getMViewsViews = () => {
    dispatch(mViewsViews());
  };

  const getDateViews = () => {
    dispatch(dateViews());
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
