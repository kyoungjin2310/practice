import React, { useEffect } from "react";
import LisItem from "./LisItem";
import { newWebToonList, webToonList } from "../api/data";
import WebToonListFilter from "../components/WebToonListFilter";
import { useLocation } from "react-router-dom";

import qs from "qs";
import NewListItem from "./NewWebToonItem";

//오늘 요일
const week = new Array("sun", "mon", "tue", "wed", "thu", "fri", "sat");
const d = new Date();
const today = week[d.getDay()];

const listSort = (
  list: any,
  key: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined
) => {
  return Object.entries(list).sort((a: any, b: any) => b.key - a.key);
};

function WebToonList() {
  //const day = day || 오늘로 작성
  const location = useLocation();
  const day = today || location.pathname;

  useEffect(() => {
    const opt = qs.parse(location.pathname).option;
    listSort(webToonList, opt);
  }, [location]);

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
