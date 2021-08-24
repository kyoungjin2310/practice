import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { List } from "../modules/day";
import { todayViews } from "../modules/day";

type ListItemProps = {
  list: List;
};

function ListItem({ list }: ListItemProps) {
  const dispatch = useDispatch();
  const getTodayViews = (day: string) => {
    setToday(week[d.getDay()]);
    dispatch(todayViews(day));
  };
  const [today, setToday] = useState("");
  const d = new Date();
  const week = new Array("일", "월", "화", "수", "목", "금", "토");

  useEffect(() => {
    getTodayViews(today);
  }, [today]);

  return <li className={list.active ? "show" : "hide"}>{list.webToon}</li>;
}

export default ListItem;
