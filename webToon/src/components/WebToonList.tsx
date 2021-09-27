import React from "react";
import LisItem from "./LisItem";
import { newWebToonList, webToonList } from "../api/data";
import WebToonListFilter from "../components/WebToonListFilter";
import qs from "qs";
import NewListItem from "./NewWebToonItem";

//오늘 요일
const week = new Array("sun", "mon", "tue", "wed", "thu", "fri", "sat");
const d = new Date();
const today = week[d.getDay()];

function WebToonList({ location }: any) {
  //const day = day || 오늘로 작성
  const day = today || location;

  return (
    <div className="listWrap">
      <WebToonListFilter day={day} />
      <NewListItem lists={newWebToonList} />
      <div className="webToonList">
        <ul>
          {webToonList.map((list) =>
            list.day[1] === day ? <LisItem list={list} key={list.id} /> : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default WebToonList;
