import React from "react";
type ErrorProps = {
  message: string;
};

// 여러곳에서 사용할 경우 컴포넌트로 뺌
const ErrorBanner = ({ message }: ErrorProps) => {
  let errorMessage = message || "에러입니다.";

  return (
    <div style={{ backgroundColor: "red", color: "white" }}>{errorMessage}</div>
  );
};

export default ErrorBanner;
