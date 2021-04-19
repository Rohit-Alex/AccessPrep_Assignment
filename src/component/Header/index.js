import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import ListIcon from "@material-ui/icons/List";
import "./style.css";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import SearchIcon from "@material-ui/icons/Search";
import debounce from "lodash.debounce";

const Header = ({ mode, setMode, setsearchVal, setGrid }) => {
  const [inputVal, setInputVal] = useState("");
  const [show, setShow] = useState(false);
  const [view, setView] = useState("list");

  let history = useHistory();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) setShow(true);
      else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  const handleView = () => {
    if (view === "list") {
      setView("grid");
      history.push("/grid");
    } else {
      setView("list");
      history.push("/");
    }
    setGrid((prev) => !prev);
  };

  const handleToggle = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  const debouncedSave = useCallback(
    debounce((nextVal) => setsearchVal(nextVal), 400),
    []
  );

  const handleChange = (e) => {
    const nextVal = e.target.value;
    setInputVal(nextVal);
    debouncedSave(nextVal);
  };

  return (
    <div className={`navbar ${show && "dark"}`}>
      <div className="nav_left">
        <MenuBookIcon style={{ fontSize: 40 }} />
      </div>
      <div className="nav_mid">
        <div className="view">
          {view === "list" ? (
            <div className="header__option">
              <div className="Viewicon" onClick={handleView}>
                <ListIcon style={{ fontSize: 40 }} />
              </div>
            </div>
          ) : (
            <div className="Viewicon" onClick={handleView}>
              <ViewCompactIcon style={{ fontSize: 40 }} />
            </div>
          )}
        </div>

        <div className="toggle">
          {mode === "dark" && (
            <div className="Toogleicon" onClick={handleToggle}>
              <Brightness4Icon style={{ fontSize: 40 }} />
            </div>
          )}
          {mode === "light" && (
            <div className="Toogleicon" onClick={handleToggle}>
              <WbSunnyIcon style={{ fontSize: 40 }} />
            </div>
          )}
        </div>
      </div>
      <div className="nav_right">
        <SearchIcon />
        <input
          type="text"
          placeholder="search"
          value={inputVal}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Header;
