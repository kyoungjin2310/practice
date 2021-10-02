import React, { useState } from "react";
import { List } from "../api/data";
import Slider from "react-slick";
type NewListItemProps = {
  lists: List[];
};

function NewListItem({ lists }: NewListItemProps) {
  const [listNum, setListNum] = useState(1);
  const listLength = lists.length;
  const random = lists.sort(() => Math.random() - 0.5);
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
          {random.map((list) => (
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
