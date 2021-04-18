import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429CC;
    --blue-light: #6933ff;
    --green: #33CC95;
    --red: #E62E4D;
    --titulos: #363F5F;
    --textos: #969CB3;
    --shape: #FFFFFF;
    --background: #f0f2f5;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }


`;
