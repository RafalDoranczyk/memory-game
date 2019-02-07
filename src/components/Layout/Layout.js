import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../../Variables/theme';
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;

}
:root{
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
}
button{
    cursor: pointer;
    border: none;
    letter-spacing: 1px;
}

`

const layout = props => {

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                {props.children}
            </>
        </ThemeProvider>
    )
}



export default layout;