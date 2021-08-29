import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LisItem from "./LisItem";
import { List } from "../modules/day";
import { RootState } from "../modules/index";
import { useParams } from "react-router-dom";
import WebToonListFilter from "../components/WebToonListFilter";
import NewListItem from "./NewWebToonItem";

function NewLists(list: List[]) {
  return list.sort(() => {
    return Math.random() - Math.random();
  });
}

function WebToonList() {
  const { day }: any = useParams();
  const [today, setToday] = useState("");
  const d = new Date();
  const week = new Array("일", "월", "화", "수", "목", "금", "토");

  const lists = useSelector((state: RootState) => state.reducer);
  const randomList = [...lists];
  useEffect(() => {
    setToday(week[d.getDay()]);
    console.log(today, "today");
  }, [today]);

  return (
    <div className="listWrap">
      <div>
        <WebToonListFilter day={day ? day : week[d.getDay()]} />
      </div>
      <div className="newListWrap">
        <NewListItem lists={NewLists(randomList)} />
      </div>
      <div className="webToonList">
        <ul>
          {day === undefined
            ? lists.map((list) =>
                list.day === today ? (
                  <LisItem list={list} key={list.id} />
                ) : null
              )
            : lists.map((list) =>
                list.day === day ? <LisItem list={list} key={list.id} /> : null
              )}
        </ul>
      </div>
    </div>
  );
}

export default WebToonList;
