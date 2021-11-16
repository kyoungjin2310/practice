import React, { useRef } from "react";

const Signin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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
      <input type="password" name="password" id="password" />
      <button>Sign In</button>
    </div>
  );
};

export default Signin;
