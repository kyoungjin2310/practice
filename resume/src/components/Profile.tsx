import React from "react";
import { PList } from "../data/data";
import ProfileItem from "../components/ProfileItem";

type ProfileProps = {
  list: PList[];
};

function Profile({ list }: ProfileProps) {
  return (
    <ul>
      {list.map((list, index) => (
        <ProfileItem list={list} key={index} />
      ))}
    </ul>
  );
}

export default Profile;
