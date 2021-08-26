import React, { useState, useEffect, useRef } from "react";
import { List } from "../modules/day";

type NewListItemProps = {
  lists: List[];
};

function NewListItem({ lists }: NewListItemProps) {
  const [listNum, setListNum] = useState(1);
  let carouselRef = useRef([] as any);
  let Ref = useRef("" as any);
  const date = new Date();
  const dateNum = date.getMonth() + 1;
  const dateMonth = dateNum > 10 ? dateNum : "0" + dateNum;
  console.log(dateMonth);
  const listLength = lists.filter(
    (list) => list.date.indexOf(`${dateMonth}`) > 0
  ).length;

  const scroll = () => {
    console.log(Ref.current.scrollLeft % 680 === 0);
    if (Ref.current.scrollLeft % 680 === 0) {
      setListNum(Ref.current.scrollLeft / 680 + 1);
    }
  };

  useEffect(() => {
    Ref.current.addEventListener("scroll", scroll);
    return () => {
      Ref.current.addEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      <h3 className="title h3">이달의 신작</h3>
      <p className="tar">
        {listNum < 10 ? "0" + listNum : listNum}/{listLength}
      </p>
      <div className="newListWrap2" ref={Ref}>
        <ul style={{ width: `${listLength * 100}%` }}>
          {lists
            .map((list, index) =>
              list.date.indexOf(`${dateMonth}`) > 0 ? (
                <li
                  className="list"
                  key={list.id}
                  ref={(elem) => (carouselRef.current[index] = elem)}
                >
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
