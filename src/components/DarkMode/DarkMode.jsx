import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";

const darkTheme = {
    // backgroundColor: '#5C5C5C',
    backgroundColor:'#0c2735',
    color: 'white',
};

const lightTheme = {
    backgroundColor: 'white',
    // backgroundColor: 'rgb(216, 206, 224)',
    color: 'black',
};

const DarkMode = ()=> {
    const theme = useContext(ThemeContext);
    const [isDarkTheme, setIsDarkTheme] = useState(theme.theme.color === 'white');

    const handleOnClick = ()=> {
        theme.changeTheme(isDarkTheme ? lightTheme : darkTheme);
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <button onClick={handleOnClick}>
            Activar modo {isDarkTheme ? 'claro' : 'oscuro'}
        </button>
    );
}

export default DarkMode;