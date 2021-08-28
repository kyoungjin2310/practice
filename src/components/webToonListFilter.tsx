import React, { ChangeEvent, useState, useEffect, useCallback } from "react";
import { menuTab } from "../api/data";
import { useHistory, useLocation } from "react-router-dom";

type WebToonListFilterProps = {
  today: string;
  day?: string;
};

function WebToonListFilter({ today, day }: WebToonListFilterProps) {
  let history = useHistory();
  const [value, setVaule] = useState("");
  const location = useLocation();
  const select = location.pathname.split("/");

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setVaule(e.target.value);
      if (day) {
        history.push(`/day/${day}/${e.target.value}`);
      } else {
        history.push(`/day/${today}/${e.target.value}`);
      }
    },
    [value]
  );

  useEffect(() => {
    if (select.length > 3) {
      console.log(select);
      console.log(select.length);
      setVaule(select[select.length - 1]);
    }
  }, [location]);

  return (
    <>
      <div className="selector">
        <select value={value} onChange={(e) => onChange(e)}>
          {menuTab.map((list) => (
            <option value={list.name} key={list.id}>
              {list.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default WebToonListFilter;
