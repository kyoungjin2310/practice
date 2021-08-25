import React from "react";
import { List } from "../modules/day";

type NewListItemProps = {
  lists: List[];
};

function NewListItem({ lists }: NewListItemProps) {
  const date = new Date();
  const dateNum = date.getMonth() + 1;
  const dateMonth = dateNum > 10 ? dateNum : "0" + dateNum;
  console.log(dateMonth);

  return (
    <ul>
      {lists
        .map((list) =>
          list.date.indexOf(`${dateMonth}`) > 0 ? (
            <li className="list" key={list.id}>
              <h3 className="title">{list.webToon}</h3>
              <br />
              업데이트순:{list.date}
            </li>
          ) : null
        )
        .sort(() => {
          return Math.random() - Math.random();
        })}
    </ul>
  );
}

export default NewListItem;
