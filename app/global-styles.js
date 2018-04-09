import { injectGlobal } from 'styled-components';


/* eslint no-unused-expressions: 0 */
injectGlobal`
    html,
    body {
        height: 100%;
        width: 100%;
    }

    body {
        font-family: CircularStd-Book, Helvetica, Arial, sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #app {
        background-color: #F8F9FB;
        min-height: 100%;
        min-width: 100%;
    }
`;
