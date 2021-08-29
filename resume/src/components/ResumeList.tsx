import React from "react";
import { CList } from "../data/data";
import ResumeItem from "../components/ResumeItem";
import { BsDot } from "react-icons/bs";

type ResumeListProps = {
  list: CList[];
};

function DateLists(list: CList[]) {
  return list.sort((a, b) => {
    return (
      parseInt(b.detailsDate.replace("~", "").replace("/", "")) -
      parseInt(a.detailsDate.replace("~", "").replace("/", ""))
    );
  });
}

function ResumeList({ list }: ResumeListProps) {
  const lists = DateLists(list);
  const responsiveItem = lists.filter((n) => n.area === "반응형");
  const nonReactiveItem = lists.filter((n) => n.area == "비반응형");
  const otherItem = lists.filter((n) => n.area == "기타");
  return (
    <>
      <ul className="careerList">
        <li>
          <h5 className="careerListTitle">
            <BsDot className="icon" />
            반응형
          </h5>
          <ul>
            {responsiveItem.map((list, index) => (
              <ResumeItem list={list} key={index} />
            ))}
          </ul>
        </li>
        <li>
          <h5 className="careerListTitle">
            <BsDot className="icon" />
            비반응형
          </h5>
          <ul>
            {nonReactiveItem.map((list, index) => (
              <ResumeItem list={list} key={index} />
            ))}
          </ul>
        </li>
        <li>
          <h5 className="careerListTitle">
            <BsDot className="icon" />
            기타
          </h5>
          <ul>
            {otherItem.map((list, index) => (
              <ResumeItem list={list} key={index} />
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default ResumeList;
