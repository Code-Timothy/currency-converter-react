import { createGlobalStyle } from 'styled-components';
import background from "./images/background.avif";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        margin: 10px;
        font-family: "Roboto", sans-serif;
        background-image: url("${background}");
    }   
`;