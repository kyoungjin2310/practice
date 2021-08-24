import React from "react";
import { List } from "../modules/day";
import LisItem from "./LisItem";

type WebToonListProps = {
  list: List[];
};

function WebToonList({ list }: WebToonListProps) {
  return (
    <ul>
      {list.map((list) => (
        <LisItem list={list} key={list.id} />
      ))}
    </ul>
  );
}

export default WebToonList;
