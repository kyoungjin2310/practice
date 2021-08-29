import React from "react";
import ResumeList from "../components/ResumeList";
import Profile from "../components/Profile";
import { profile, careerList } from "../data/data";

function ResumeApp() {
  return (
    <>
      <h1 className="skip">이력서</h1>
      <div className="titleWrap">
        <h2 className="name">Oh Kyung Jin</h2>
        <h3 className="subTitle">Front-end Developer</h3>
      </div>
      <div className="profileWrap">
        <h4 className="subTitle">profile</h4>
        <Profile list={profile} />
      </div>
      <div className="listWrap">
        <h4 className="subTitle">career</h4>
        <ResumeList list={careerList} />
      </div>
    </>
  );
}

export default ResumeApp;
