import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules/index";
import {
  favoriteViews,
  views,
  fViewsViews,
  mViewsViews,
  dayViews,
  dateViews,
} from "../modules/day";
import WebToonList from "../components/webToonList";
import WebToonListFilter from "../components/webToonListFilter";

function WebToonApp() {
  const lists = useSelector((state: RootState) => state.reducer);
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
