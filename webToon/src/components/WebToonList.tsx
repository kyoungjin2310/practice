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
    if (a[key] === a["date"]) {
      const dateA = new Date(a["date"]).getTime();
      const dateB = new Date(b["date"]).getTime();
      return dateB - dateA;
    } else {
      return b[key] - a[key];
    }
  });
}

function WebToonList() {
  const location = useLocation();
  const [day, setDay]: any = useState(today);

  useEffect(() => {
    const opt = qs.parse(location.search, { ignoreQueryPrefix: true })["week"];
    setDay(opt);
    console.log(location.search, "day");
    if (location.pathname === "/") {
      setDay(today);
    }
  }, [location]);

  return (
    <div className="listWrap">
      <WebToonListFilter day={day} />
      <NewListItem lists={newWebToonList} />
      <div className="webToonList">
        <ul>
          {listSort(webToonList, qs.parse(location.search).option).map((list) =>
            list.day[1] === day ? <LisItem list={list} key={list.id} /> : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default WebToonList;
