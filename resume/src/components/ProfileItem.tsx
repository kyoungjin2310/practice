import React from "react";
import { PList } from "../data/data";
import { BsDot } from "react-icons/bs";

type ProfileItemProps = {
  list: PList;
};

function ProfileItem({ list }: ProfileItemProps) {
  return (
    <li>
      <h4 className="listTitle">
        <BsDot className="icon" />
        {list.name}
      </h4>
      <p>
        {list.name === "Email" ? (
          <a href={`mailto:${list.details}`}>{list.details}</a>
        ) : list.name === "GitHub" ? (
          <a href={list.details}>{list.details}</a>
        ) : (
          list.details
        )}
      </p>
      <div>
        <ul>
          {list.skills?.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ProfileItem;
