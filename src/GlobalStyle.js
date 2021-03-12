import { createGlobalStyle } from "styled-components";

//<link rel="preconnect" href="https://fonts.gstatic.com">
//<link href="https://fonts.googleapis.com/css2?family=Tinos:wght@400;700&display=swap" rel="stylesheet"></link>
const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@400;700&display=swap');

*{
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
    background: gray;
    }
body{
    font-family: 'Tinos', serif;
}
`;

export default GlobalStyle;