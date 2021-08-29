import React from "react";
import { PList } from "../data/data";

type ProfileItemProps = {
  list: PList;
};

function ProfileItem({ list }: ProfileItemProps) {
  return (
    <li>
      <h4>{list.name}</h4>
      <p>{list.details}</p>
      <p>{list.skills}</p>
    </li>
  );
}

export default ProfileItem;
