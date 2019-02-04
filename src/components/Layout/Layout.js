import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
}`



const layout = props => {

    return (
        <>
            <GlobalStyle />
            {props.children}
        </>
    )
}



export default layout;