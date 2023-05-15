import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{

    :root{
    --color-primary: #52B591;
    --color-secondary: #2DA77A;
    --color-terciary: #E8F9F3;
    --color-shadow: rgba(45, 167, 122, 0.1);

    --grey-100: #FAFCFC;
    --grey-90: #D3D5D6;
    --grey-70: #8E8E8E;
    --grey-50:  #03030B;
    --black: #000000;
    }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    list-style: none;
}
}

body{
    background-color: var(--grey-100);
    font-family: "Inter", sans-serif;
}
button{
    cursor: pointer;
}
* {
    font-family: "Inter", sans-serif;
}

h2 {
    padding: 20px;
    text-align:center;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 50px;
    color: var(--grey-50);
}

`;
