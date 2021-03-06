import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    vertical-align: baseline;
    /* font-weight: inherit;
    font-family: inherit;
    font-style: inherit; */
    font-size: 100%;
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
    background: gray;
    }
`;

export default GlobalStyle;