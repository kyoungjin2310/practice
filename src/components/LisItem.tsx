import React from "react";
import { List } from "../modules/day";

type ListItemProps = {
  list: List;
};

function ListItem({ list }: ListItemProps) {
  return (
    <li className="list">
      <h3 className="title">{list.webToon}</h3>
      <br />
      인기순:{list.favoriteNum}
      <br />
      여성 인기순:{list.fViews}
      <br />
      남성 인기순:{list.mViews}
      <br />
      조회순:{list.views}
      <br />
      업데이트순:{list.date}
    </li>
  );
}

export default ListItem;
