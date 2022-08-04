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

    body{
        width:100%;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default GlobalStyles;
