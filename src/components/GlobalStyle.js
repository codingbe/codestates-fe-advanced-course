import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        all: unset;
        cursor: pointer;
        transition: 0.4s;
        color: gray;
        &:hover{
            color: #452CDD;
        }
    }
    body{
        -ms-overflow-style: none;
    }
        
    ::-webkit-scrollbar {
        display: none;
    }

`;

export default GlobalStyle;
