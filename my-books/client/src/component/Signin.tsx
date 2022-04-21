import React, { useRef } from "react";
import { Button, Col, Input, Row } from "antd";
import styles from "./Signin.module.css";
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
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}></Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>
              Please Note Your Opinion
            </div>
            <div className={styles.signin_underline}></div>
            <div className={styles.email_title}>Email</div>
            <input
              ref={emailRef}
              type="text"
              name="email"
              id="email"
              placeholder="email"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
            />
            <Button onClick={onClick}>Sign In</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Signin;
