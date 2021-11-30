import React, { useState, useRef, ChangeEvent } from "react";
import moment from "moment-timezone";
import "moment/locale/ko";

const Date = () => {
  const [day, setDay] = useState("");
  let birthDayRef = useRef(null);
  const hendlerBirthDayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDay(moment(e.target.value, "YYYY-MM-DD").format("dddd"));
  };
  return (
    <>
      {/* 한국어로 표기 */}
      <div>{moment("07-17-2021").format("YYYY년 M월 D일")}</div>;
      {/* 요일 구하기 */}
      <div>
        <input type="date" ref={birthDayRef} onChange={hendlerBirthDayChange} />
        <h2>요일 구하기</h2>
        <p>{day}</p>
      </div>
    </>
  );
};

export default Date;
