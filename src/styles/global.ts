import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background: #cfcfcf;
        color: #4a4a4a;
        -webkit-font-smoothing: antialiased;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        color: #242424;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }
    button {
        cursor: pointer;
    }
`;