import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../redux/modules/auth";
import { RootState } from "../type";

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  if (token === null) {
    return <Redirect to="/signin" />;
  }
  const click = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>home</h1>
      <button onClick={click}>logout</button>
    </div>
  );
};

export default Home;
