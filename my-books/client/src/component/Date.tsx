import React from "react";
import moment from "moment";

const Date = () => {
  //한국어로 표기
  return <div>{moment("07-17-2021").format("YYYY년 M월 D일")}</div>;
};

export default Date;
