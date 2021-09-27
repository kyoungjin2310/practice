import React from "react";
import { menu } from "../api/data";
import { Link } from "react-router-dom";
import qs from "qs";
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
                          <Link
                            to={`/day/${qs.stringify({ week: list.name[1] })}`}
                          >
                            {list.name[0]}
                          </Link>
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
