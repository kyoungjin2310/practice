import React, { useState, useEffect, Key } from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  logoutUser: Boolean;
  setLogoutUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ logoutUser, setLogoutUser }: HeaderProps) => {
  const [login, setLogin] = useState<any>("");

  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value: any = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
    }
  };
  return (
    <div>
      <header style={{ marginTop: "20px" }}>
        {!logoutUser && login && login.userLogin ? (
          <button color="secondary" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button color="secondary">Login</button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
