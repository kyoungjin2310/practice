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
              {list.tabMenu
                ? list.tabMenu.map((list) => (
                    <div key={list.id}>
                      <ul>
                        <li>
                          <Link to={`/day/${list.name}`}>{list.name}</Link>
                        </li>
                      </ul>
                    </div>
                  ))
                : null}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default WebToonListMenu;
