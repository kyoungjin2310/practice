import React, { ReactNode, useState } from "react";

type SummaryPageProps = {
  children: ReactNode;
  msg?: string;
  title?: string;
  subTitle?: string;
  id?: string;
  btn?: string;
};

const SummaryPage = ({ children, ...rest }: SummaryPageProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div {...rest}>
      <form>
        <h2>{rest.title}</h2>
        <input
          type="checkbox"
          checked={checked}
          //체크박스는 onChange를 통해 체크 여부를 체크 클릭 시마다 boolean 값으로 알 수 있습니다.
          onChange={(e) => setChecked(e.target.checked)}
          id={`${rest.id}`}
        />
        <label htmlFor={`${rest.id}`}>{rest.msg}</label>
        {children}
        {/* 체크됐을때는 비활성화를 활성화로 checked가 true일때 활성화 => checked와 disabled 반대값*/}
        <button disabled={!checked} type="submit">
          {rest.btn}
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
