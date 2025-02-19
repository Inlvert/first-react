import React, { useContext } from "react";
import { ThemeContext, UserContext } from "../contexts";
import classNames from "classnames";
import style from "./Header2.module.scss";
import CONSTANTS from "../../constants";

function Header2() {
  const user = useContext(UserContext);

  return (
    <ThemeContext.Consumer>
      {([theme, switchTheme]) => {
        const className = classNames({
          [style.darkTheme]: theme === CONSTANTS.THEMES.DARK_THEME,
          [style.lightTheme]: theme === CONSTANTS.THEMES.LIGHT_THEME,
        });
        

        const changeTheme = (e) => {
          const {
            target: { value },
          } = e;

          switchTheme(value)
        };

        return (
          <div className={className}>
            <h2>Header2</h2>
            <p>{user.lastName}</p>
            <select value={theme} onChange={changeTheme}>
              <option value={CONSTANTS.THEMES.DARK_THEME}>dark</option>
              <option value={CONSTANTS.THEMES.LIGHT_THEME}>light</option>
            </select>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Header2;
