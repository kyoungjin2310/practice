import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules/index";
import {
  favoriteViews,
  views,
  fViewsViews,
  mViewsViews,
  dayViews,
  dateViews,
  todayViews,
} from "../modules/day";
import WebToonList from "../components/webToonList";
import WebToonListFilter from "../components/webToonListFilter";

function WebToonApp() {
  const lists = useSelector((state: RootState) => state.reducer);

  const [today, setToday] = useState("");
  const d = new Date();
  const week = new Array("일", "월", "화", "수", "목", "금", "토");

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

  const getDayViews = (day: string) => {
    dispatch(dayViews(day));
  };

  const getDateViews = () => {
    dispatch(dateViews());
  };

  const getTodayViews = (day: string) => {
    setToday(week[d.getDay()]);
    dispatch(todayViews(day));
  };

  useEffect(() => {
    getTodayViews(today);
  }, [today]);

  return (
    <>
      <WebToonListFilter
        getFavoriteViews={getFavoriteViews}
        getViews={getViews}
        getFViewsViews={getFViewsViews}
        getMViewsViews={getMViewsViews}
        getDateViews={getDateViews}
        getDayViews={getDayViews}
      />
      <WebToonList list={lists} />
    </>
  );
}

export default WebToonApp;
