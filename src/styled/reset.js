// 기본 html 초기화 입력


import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #e7e7e7;
    }
    button {
        border: none;
        cursor: pointer;
    }
    ul > li {
        list-style: none;
    }
    a {
    text-decoration: none;
    }

`

export default GlobalStyles;

