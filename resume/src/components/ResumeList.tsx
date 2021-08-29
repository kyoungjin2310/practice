import React from "react";
import { CList } from "../data/data";
import ResumeItem from "../components/ResumeItem";

type ResumeListProps = {
  list: CList[];
};

function ResumeList({ list }: ResumeListProps) {
  return (
    <ul>
      {list.map((list, index) => (
        <ResumeItem list={list} key={index} />
      ))}
    </ul>
  );
}

export default ResumeList;
