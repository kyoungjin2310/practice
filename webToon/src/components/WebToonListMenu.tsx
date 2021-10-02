import React from "react";
import { menu } from "../api/data";
import { useHistory } from "react-router-dom";
import qs from "qs";
function WebToonListMenu() {
  const history = useHistory();
  const onClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    day: any
  ) => {
    e.preventDefault();
    const optionUrl = qs.stringify({ week: day }, { indices: false });
    history.push({
      pathname: "/day/weekday",
      search: `${optionUrl}`,
    });
  };

  return (
    <>
      <div className="tabMenu">
        <ul>
          {menu.map((list) => (
            <li key={list.id}>
              <a href="#">{list.name}</a>
              <div className="tabMenu2">
                <ul>
                  {list.tabMenu
                    ? list.tabMenu.map((list) => (
                        <li key={list.id}>
                          <a href="#" onClick={(e) => onClick(e, list.name[1])}>
                            {list.name[0]}
                          </a>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default WebToonListMenu;
