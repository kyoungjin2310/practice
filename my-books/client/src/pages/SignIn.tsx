import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import SigninContainer from "../containers/SigninContainer";
import { RootState } from "../type";

const SignIn = () => {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <SigninContainer />;
};

export default SignIn;