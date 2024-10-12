import React, { FC, useContext } from "react";
import { ThemeContext } from "src/context/themeContext";

const ChangeThemeButton: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (

        <button className="btn btn-primary " onClick={toggleTheme}>Переключить тему</button>

    )
}
export default ChangeThemeButton;