import React from "react";
import ResumeList from "../components/ResumeList";
import Profile from "../components/Profile";
import { profile, careerList } from "../data/data";
import { DiIonic } from "react-icons/di";

function ResumeApp() {
  return (
    <>
      <div className="wrap">
        <h1 className="skip">이력서</h1>
        <section className="titleWrap">
          <h2 className="name">Oh Kyung Jin</h2>
          <h3 className="subTitle">Front-end Developer</h3>
          <p className="imgBox">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="profile image"
            />
          </p>
        </section>
        <section className="list">
          <article className="profileWrap">
            <h4 className="subTitle">
              <DiIonic className="icon" />
              Profile
            </h4>
            <Profile list={profile} />
          </article>
          <article className="listWrap">
            <h4 className="subTitle">
              <DiIonic className="icon" />
              Career <span className="txt">(퍼블리싱 - 2년 9개월)</span>
            </h4>
            <ResumeList list={careerList} />
          </article>
        </section>
      </div>
    </>
  );
}

export default ResumeApp;
