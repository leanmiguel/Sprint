import { createGlobalStyle } from 'styled-components'

import rabbidhighwaysignii from './rabbidhighwaysignii-webfont.woff'
import rabbidhighwaysignii2 from './rabbidhighwaysignii-webfont.woff2'

export default createGlobalStyle`
@font-face {
    font-family: 'rabbid_highway_sign_iiregular';
    src: url(${rabbidhighwaysignii2}) format('woff2'),
         url(${rabbidhighwaysignii}) format('woff');
    font-weight: normal;
    font-style: normal;

}

body{
    font-family: 'rabbid_highway_sign_iiregular';
}

`
/*
@font-face {
    font-family: 'rabbid_highway_sign_iiobl';
    src: url('rabbidhighwaysigniiobl-webfont.woff2') format('woff2'),
         url('rabbidhighwaysigniiobl-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}` */
