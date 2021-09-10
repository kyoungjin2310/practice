import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LisItem from "./LisItem";
import { List } from "../modules/day";
import { RootState } from "../modules/index";
import { useParams } from "react-router-dom";
import WebToonListFilter from "../components/WebToonListFilter";
import NewListItem from "./NewWebToonItem";

//컴포넌트 아닌거는 소문짜로 쓰기
function NewLists(list: List[]) {
  return list.sort(() => {
    return Math.random() - Math.random();
  });
}
const week = new Array("일", "월", "화", "수", "목", "금", "토");

function WebToonList() {
  // 쿼리 스트링 쓰기
  //const day = day || 오늘로 작성
  const { day }: any = useParams();
  //today 고정값으로 빼기
  const [today, setToday] = useState("");
  const d = new Date();

  const lists = useSelector((state: RootState) => state.reducer);
  const randomList = [...lists];
  useEffect(() => {
    setToday(week[d.getDay()]);
    console.log(today, "today");
  }, [today]);

  return (
    <div className="listWrap">
      <div>
        <WebToonListFilter day={day || week[d.getDay()]} />
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
