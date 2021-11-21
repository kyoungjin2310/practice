import React, { useRef } from "react";
import { LoginReqType } from "../type";

type SinginProps = {
  login: (reqData: LoginReqType) => void;
};

//로그인 요청
const Signin = ({ login }: SinginProps) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    login({ email, password });
  };

  return (
    <div>
      <h2>My Books</h2>
      <p>Please Note Your Opinion</p>
      <label htmlFor="email">Email</label>
      <input
        ref={emailRef}
        type="text"
        name="email"
        id="email"
        placeholder="email"
      />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" ref={passwordRef} />
      <button onClick={onClick}>Sign In</button>
    </div>
  );
};

export default Signin;
