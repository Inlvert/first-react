import React, { useContext } from "react";
import { ThemeContext, UserContext } from "../contexts";
import style from "./Header.module.scss";
import classNames from "classnames";
import CONSTANTS from "../../constants";

function Header() {
  const user = useContext(UserContext);
  const [theme, switchTheme] = useContext(ThemeContext);

  const changeTheme = (e) => {
    const {
      target: { value },
    } = e;

    switchTheme(value);
  };

  const className = classNames({
    [style.darkTheme]: theme === CONSTANTS.THEMES.DARK_THEME,
    [style.lightTheme]: theme === CONSTANTS.THEMES.LIGHT_THEME,
  });

  return (
    <div className={className}>
      <h2>Header</h2>
      <p>{user?.firstName || "Guest"}</p>
      <select value={theme} onChange={changeTheme}>
        <option value={CONSTANTS.THEMES.DARK_THEME}>dark</option>
        <option value={CONSTANTS.THEMES.LIGHT_THEME}>light</option>
      </select>
    </div>
  );
}

export default Header;
