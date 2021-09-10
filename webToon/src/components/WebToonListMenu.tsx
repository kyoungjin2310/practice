import React from "react";
import { menu } from "../api/data";
import { Link } from "react-router-dom";

function WebToonListMenu() {
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
                          {/*쿼리스트링으로 바꾸기*/}
                          <Link to={`/day/${list.name}`}>{list.name}</Link>
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
