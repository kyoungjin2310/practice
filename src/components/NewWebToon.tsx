import React, { useState, useEffect, useRef, useCallback } from "react";
import { List } from "../modules/day";
import Slider from "react-slick";
type NewListItemProps = {
  lists: List[];
};
function NewListItem({ lists }: NewListItemProps) {
  const [listNum, setListNum] = useState(0);
  let carouselRef = useRef([] as any);
  let Ref = useRef("" as any);
  const date = new Date();
  const dateNum = date.getMonth() + 1;
  const dateMonth = dateNum > 10 ? dateNum : "0" + dateNum;
  console.log(dateMonth);
  const listLength = lists.filter(
    (list) => list.date.indexOf(`${dateMonth}`) > 0
  ).length;

  //const scroll = useCallback(() => {
  //  console.log(Ref.current.scrollLeft % 680 === 0);
  //  if (Ref.current.scrollLeft % 680 === 0) {
  //    setListNum(Ref.current.scrollLeft / 680 + 1);
  //  }
  //}, [listNum]);

  //useEffect(() => {
  //Ref.current.addEventListener("scroll", scroll);
  //scroll();
  //return () => {
  //   Ref.current.addEventListener("scroll", scroll);
  //  };
  //  }, [listNum]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (listNum: any) => setListNum(listNum),
  };
  return (
    <>
      <h3 className="title h3">이달의 신작</h3>
      <p className="tar">
        {listNum < 10 ? "0" + (listNum + 1) : listNum}/{listLength}
      </p>
      <div className="newListWrap2">
        <Slider {...settings}>
          {lists.map((list, index) =>
            list.date.indexOf(`${dateMonth}`) > 0 ? (
              <div
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
              </div>
            ) : null
          )}
        </Slider>
      </div>
    </>
  );
}

export default NewListItem;
