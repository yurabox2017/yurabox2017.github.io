import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useContext } from "react";
import { ThemeContext } from "src/context/themeContext";

const ChangeThemeButton: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (

        <button className="btn btn-primary " onClick={toggleTheme}><FontAwesomeIcon icon={faMoneyBill}/> Переключить тему</button>

    )
}
export default ChangeThemeButton;