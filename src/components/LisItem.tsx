import React from "react";
import { List } from "../modules/day";

type ListItemProps = {
  list: List;
};

function ListItem({ list }: ListItemProps) {
  return <li className={list.active ? "show" : "hide"}>{list.webToon}</li>;
}

export default ListItem;
