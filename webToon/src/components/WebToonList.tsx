import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import LisItem from "./LisItem";
import { RootState } from "../modules/index";
import { useParams } from "react-router-dom";
import WebToonListFilter from "../components/WebToonListFilter";
import NewListItem from "../components/NewWebToon";

function NewLists(list: any) {
  console.log("활성 사용자 수를 세는중...");
  return list.sort(() => {
    return Math.random() - Math.random();
  });
}

function WebToonList() {
  const [today, setToday] = useState("");
  const d = new Date();
  const week = new Array("일", "월", "화", "수", "목", "금", "토");

  const { day }: any = useParams();
  const { filter }: any = useParams();
  const lists = useSelector((state: RootState) => state.reducer);
  const rendomList = [...lists];
  useEffect(() => {
    setToday(week[d.getDay()]);
  }, []);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="listWrap">
      <div>
        <WebToonListFilter today={today} day={day} />
      </div>
      <div className="newListWrap">
        <NewListItem lists={NewLists(rendomList)} />
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
