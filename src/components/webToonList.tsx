import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LisItem from "./LisItem";
import { RootState } from "../modules/index";
import { useParams } from "react-router-dom";
import WebToonListFilter from "../components/WebToonListFilter";
import NewListItem from "../components/NewWebToon";
import { useDispatch } from "react-redux";
import {
  favoriteViews,
  views,
  fViewsViews,
  mViewsViews,
  dateViews,
} from "../modules/day";

function WebToonList() {
  const [today, setToday] = useState("");
  const d = new Date();
  const week = new Array("일", "월", "화", "수", "목", "금", "토");

  const { day }: any = useParams();
  const { filter }: any = useParams();
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

  const getDateViews = () => {
    dispatch(dateViews());
  };
  useEffect(() => {
    setToday(week[d.getDay()]);
    getFavoriteViews();
  }, []);
  useEffect(() => {
    console.log(filter);
    if (filter === "인기순") {
      getFavoriteViews();
    } else if (filter === "여성 인기순") {
      getFViewsViews();
    } else if (filter === "남성 인기순") {
      getMViewsViews();
    } else if (filter === "조회순") {
      getViews();
    } else if (filter === "업데이트순") {
      getDateViews();
    } else {
      return;
    }
  }, [filter]);

  return (
    <div>
      <div>
        <WebToonListFilter today={today} day={day} />
      </div>
      <div>
        <NewListItem lists={lists} />
      </div>
      <ul>
        {day === undefined
          ? lists.map((list) =>
              list.day === today ? <LisItem list={list} key={list.id} /> : null
            )
          : lists.map((list) =>
              list.day === day ? <LisItem list={list} key={list.id} /> : null
            )}
      </ul>
    </div>
  );
}

export default WebToonList;
