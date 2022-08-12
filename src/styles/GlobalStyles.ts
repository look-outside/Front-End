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
    html,body {
        height: 100%;
    }

    body{
        width:100%;
        font-family: 'Noto Sans KR', sans-serif;
    }
    #root{
        display: flex;
        flex-direction: column;
        height:100vh;
    }

`;

export default GlobalStyles;
