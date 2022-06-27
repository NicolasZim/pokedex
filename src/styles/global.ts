import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
      opacity: 0;
      transform: translateY(-20px);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const fadeOutNone = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  99% {
    display: none;
    opacity: 0;
    transform: translateY(-20px);
    margin: 0;
    padding: 0;
  }
  100% {
    display: none;
    opacity: 0;
    transform: translateY(-20px);
    padding: 0;
    margin: 0;
  }
`;

export const fadeInLeft = keyframes`
  0% {
      opacity: 0;
      transform: translateX(-40px);
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  0% {
      opacity: 0;
      transform: translateX(40px);
  }
  100% {
      opacity: 1;
      transform: translateX(0);
  }
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
      width: 8px;
      border: 1px solid #D5A100;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #D5A100;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #D5A10070;
    }
  }

  html, body {
    outline: none;
    background-color: #BCBDB7;
    /* background-color: hsla(45, 100%, 45%, 0.13); */
    font-family: 'Nuninto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #F5F5F5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    overflow: hidden!important;

    width: 100%;
    height: 100%;

    @media(min-width: 1401px) {
      font-size: 16px;
    }

  }

  body {
    position: relative;
    overflow-y: hidden!important;
    overflow-x: hidden!important;
    padding: 0!important;
    margin: 0;
    width: 100vw;
    height: 100vh!important;

    background: transparent;

    > #root {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }

  input, button, textarea, select {
    font-family: 'Nuninto', sans-serif;
    font-size: 1.175rem;
    border: 0;
    &:focus {
      outline: none;
    }
  }

  button {
    cursor: pointer;
  }

  a, li, ul {
    color:inherit;
    text-decoration: none;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
    user-select: none;
  }

`;
