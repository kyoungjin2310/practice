import React, { useEffect, useState } from "react";
import LisItem from "./LisItem";
import { List, newWebToonList, webToonList } from "../api/data";
import WebToonListFilter from "../components/WebToonListFilter";
import { useLocation } from "react-router-dom";

import qs from "qs";
import NewListItem from "./NewWebToonItem";

//오늘 요일
const week = new Array("sun", "mon", "tue", "wed", "thu", "fri", "sat");
const d = new Date();
const today = week[d.getDay()];

function listSort(arr: List[], key: any) {
  return arr.sort(function (a: any, b: any) {
    if (key === "date") {
      return (
        parseInt(b.date.replace("-", "")) - parseInt(a.date.replace("-", ""))
      );
    } else {
      return b[key] - a[key];
    }
  });
}

function WebToonList() {
  //const day = day || 오늘로 작성
  const location = useLocation();
  const day = today || location.pathname;

  useEffect(() => {}, [location]);

  return (
    <div className="listWrap">
      <WebToonListFilter day={day} />
      <NewListItem lists={newWebToonList} />
      <div className="webToonList">
        <ul>
          {listSort(webToonList, qs.parse(location.pathname).option).map(
            (list) =>
              list.day[1] === day ? <LisItem list={list} key={list.id} /> : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default WebToonList;
