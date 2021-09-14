import React from "react";
import LisItem from "./LisItem";
import { List, newWebToonList, webToonList } from "../api/data";
import WebToonListFilter from "../components/WebToonListFilter";
import qs from "qs";
import NewListItem from "./NewWebToonItem";

//오늘 요일
const week = new Array("일", "월", "화", "수", "목", "금", "토");
const d = new Date();
const today = week[d.getDay()];

function WebToonList({ location }: any) {
  // 쿼리 스트링 쓰기
  //const day = day || 오늘로 작성
  const day = today || location;

  return (
    <div className="listWrap">
      <WebToonListFilter day={day || week[d.getDay()]} />
      <NewListItem lists={newWebToonList} />
      <div className="webToonList">
        <ul>
          {webToonList.map((list) =>
            list.day === day ? <LisItem list={list} key={list.id} /> : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default WebToonList;
