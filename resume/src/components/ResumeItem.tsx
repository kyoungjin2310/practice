import React from "react";
import { CList } from "../data/data";
import { BsDash } from "react-icons/bs";

type ResumeListItemProps = {
  list: CList;
};

function ResumeListItem({ list }: ResumeListItemProps) {
  return (
    <li className="fll">
      <BsDash className="icon" />
      <h6 className="listTitle">{list.name}</h6>
      <p className="date">{list.detailsDate}</p>
    </li>
  );
}

export default ResumeListItem;
