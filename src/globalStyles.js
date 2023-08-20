import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, &::after, &::before {
        box-sizing: inherit;
    }

    html{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        width: 100%;
        height: 100%;
    }
    
    body{
        background-image: url("https://cdn.pixabay.com/photo/2017/03/25/18/06/color-2174066_1280.png");
        background-position: 60% 20%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
`;