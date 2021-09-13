import React, { useState } from "react";
import { List } from "../api/data";
import Slider from "react-slick";
type NewListItemProps = {
  lists: List[];
};

function NewListItem({ lists }: NewListItemProps) {
  const [listNum, setListNum] = useState(1);
  const date = new Date();
  const dateNum = date.getMonth() + 1;
  // 삭제하고 신작, 웹툰리스트 따로 만들기
  const dateMonth = dateNum <= 10 ? "0" + dateNum : dateNum;
  const list = lists.filter((list) => list.date.indexOf(`-${dateMonth}-`) > 0);
  const listLength = list.length;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (listNum: number) => setListNum(listNum + 1),
  };
  return (
    <>
      <h3 className="title h3">이달의 신작</h3>
      <p className="tar">
        {listNum < 10 ? "0" + listNum : listNum}/{listLength}
      </p>
      <div className="newListWrap2">
        <Slider {...settings}>
          {list.map((list) => (
            <div className="list" key={list.id}>
              <img
                className="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                alt={`${list.name}`}
              />
              <h3 className="title">{list.webToon}</h3>
              <br />
              업데이트순:{list.date}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default NewListItem;
