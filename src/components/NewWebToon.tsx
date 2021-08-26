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
  const listLength = lists.map(
    (list) => list.date.indexOf(`${dateMonth}`) > 0
  ).length;
  return (
    <>
      <h3 className="title h3">이달의 신작</h3>
      <p className="tar">{listLength}</p>

      <div className="newListWrap2">
        <ul>
          {lists
            .map((list) =>
              list.date.indexOf(`${dateMonth}`) > 0 ? (
                <li className="list" key={list.id}>
                  <img
                    className="img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                    alt={`${list.name}`}
                  />
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
      </div>
    </>
  );
}

export default NewListItem;
