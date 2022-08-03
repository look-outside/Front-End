import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing : border-box
    }
    a,p,span {
        text-decoration: none;
    }

    /* a, a:visited, a:active{
        color : black
    } */
    body{
        width:100%;
    }
`;

export default GlobalStyles;
