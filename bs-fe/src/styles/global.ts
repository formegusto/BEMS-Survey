import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        background: #26446D;
    }
    * { 
        font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important; 
        font-style: normal;
    }
    a {
        text-decoration: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    *::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

export default GlobalStyle;
