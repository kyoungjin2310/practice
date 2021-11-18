import React, { useCallback } from "react";
import Signin from "../component/Signin";

const SigninContainer = () => {
  const login = useCallback((reqData) => {}, []);
  return <Signin login={login}></Signin>;
};

export default SigninContainer;
