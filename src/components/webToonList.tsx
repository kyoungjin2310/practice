import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LisItem from "./LisItem";
import { RootState } from "../modules/index";
import { useParams } from "react-router-dom";
import WebToonListFilter from "../components/WebToonListFilter";

function WebToonList() {
  const [today, setToday] = useState("");
  const d = new Date();
  const week = new Array("일", "월", "화", "수", "목", "금", "토");

  const { day }: any = useParams();
  const lists = useSelector((state: RootState) => state.reducer);
  console.log(day);

  useEffect(() => {
    setToday(week[d.getDay()]);
  }, [today]);

  return (
    <div>
      <div>
        <WebToonListFilter today={today} day={day} />
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
