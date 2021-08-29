import React from "react";
import { CList } from "../data/data";

type ResumeListItemProps = {
  list: CList;
};

function ResumeListItem({ list }: ResumeListItemProps) {
  return (
    <li>
      <h4>{list.name}</h4>
      <p>{list.details}</p>
      <p>{list.detailsDate}</p>
    </li>
  );
}

export default ResumeListItem;
